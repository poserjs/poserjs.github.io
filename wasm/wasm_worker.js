self.onmessage = async function(e) {
    const data = e.data
    let result
    await setup()

    switch(data.api) {
        case "HandCalc": {
            result = poserWasmApiHandCalc(...data.args)
            break
        }
        case "HandEval": {
            result = poserWasmApiHandEval(...data.args)
            break
        }
        case "HandEvalPlayers": {
            result = poserWasmApiHandEvalPlayers(...data.args)
            break
        }
        default: {
            result = {err: "Unknown api: "+data.api}
            break
        }
    }
    self.postMessage({
        api: data.api,
        id: data.id,
        args: [...data.args],
        result,
    });
}

let inst

async function setup() {
    if(!inst) {
        inst = await startWasmInst("/wasm/wasm_exec.js", "/wasm/poser.wasm")
    }
}

async function startWasmInst(jsUrl, wasmUrl) {
    try {
        importScripts(jsUrl);

        const resp = await fetch(wasmUrl)
        const buffer = await resp.arrayBuffer()

        const go = new global.Go()
        const mod = await WebAssembly.compile(buffer)
        const inst = await WebAssembly.instantiate(mod, go.importObject)

        go.run(inst)

        return inst
    } catch(ex) {
        console.error(ex)
    }
}
