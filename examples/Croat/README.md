# CROAT Coin webminer
Earn CROATCoin when your visitors visit your site, useful to accept donations.

#### v0.1 First version
20/07/2019

* localStorage key (minerName) with value "WebMiner-" + timestamp. This is to keep a custom minername in your pool
* localStorage key (minerEnd) with current timestamp plus 10 minutes. This is to keep miner working during 10 minutes, even if you change current page.
* localStorage key (minerAd) with current timestamp plus 10 minutes. This is to keep modal windows AD hidden during 10 minutes if you have already accepted or closed modal 

Script check each time is there is (minerName) and (minerEnd). 




Check html version in action here: https://webminer.croat.community/