# Texas Holdem Poker Probability Calculator

This calculator run thousands of random simulations to calculate 3 probability indicators:

* ER - Expected Return
  - how much money we are expected to make by betting this hand
  - profitable hands will have positive expected value
  - losing hands will have negative expected return
  - this indicator can be used to make a decision to bet or raise
  - ER = WP * Players - 100 
* WP - Winning Probability
  - the probability (%) that this hand would win the pot
* WO - Winning Odds
  - loss : win odds presented as n : 1 ratio
  - the value should be compared with the ratio between the pot and the bet size
  - this indicator can be used to make a decision to call
  - the bigger the pot the cheaper it may be to call
  - WO = 100 / WP - 1

These indicators are giving us good assessment about how strong any hand is, but you need to consider many more factors in order to play a profitable poker e.g.:
- bluffing
- position
- stack sizes
- betting styles and frequencies of your opponents

## License

MIT
