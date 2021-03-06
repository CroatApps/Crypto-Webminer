# CROAT Coin webminer
Earn CROATCoin when your visitors visit your site, useful to accept donations.

#### v0.2 Non-mobile 
21/07/2019

* Disable CSS & javascript on mobile devices 

#### v0.1 First version
20/07/2019

* localStorage key (minerName) with value "WebMiner-" + timestamp. This is to keep a custom minername in your pool
* localStorage key (minerEnd) with current timestamp plus 10 minutes. This is to keep miner working during 10 minutes, even if you change current page.
* localStorage key (minerAd) with current timestamp plus 10 minutes. This is to keep modal windows AD hidden during 10 minutes if you have already accepted or closed modal 

Script check each time is there is (minerName) and (minerEnd). 

#### DEMO HTML

Check html version in action here: https://webminer.croat.community/

#### How to Use HTML version in your site

1. Include CSS stylesheet in header

```sh
<link rel="stylesheet" type="text/css" href="css/webminer.css">
```

2. Include JQuery & webminer scripts in footer. Edit (jason) parameter in <b>webminer.js</b> to use your main pool.

```sh
    <!-- JQuery -->
    <script src="scripts/jquery.min.js"></script>

    <!-- Javascript Constructor -->
    <script src="scripts/webminer.js?v8?perfekt=wss://?algo=cn/0?jason=pool.croat.community:8888"></script>

    <!-- Modal + Miner UI Controller -->
    <script src="scripts/croat.js"></script>
```

3. Include in (body) this HTML

```sh
    <!-- CROAT WebMinerBar -->
    <div class="croat-webminerbar"> 
        <img src="img/croat.community.png" width="40px" id="croatImg" class="help"/>
        <div class="croat-data">
            <font>Hashes/s</font>
            <br><font id="hashes-per-second">0</font>
            <hr>
            <font>Totals</font>
            <br><font id="accepted-shares">0</font>
            <hr>
            <font>Threads</font>
            <br>
            <span id="threads"></span> &nbsp;
            <span id="thread-add" class="action"> + </span>
            <span class="divide"> / </span>
            <span id="thread-remove" class="action"> - </span>
            <hr>
            <button id="start" class="action">Start</button>
        </div>
    </div>
    
    <!-- The Modal -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span><br>
        <p>Please, enable webminer to share power of your CPU during this session, this action helps to maintain this site, thanks!
        <br><br>
        <span id="kill-modal" class="action modalKill"> Close and do not ask me again... </span><span id="start-modal" class="action modalYes"> Yes, of course! </span></p>
      </div>
    </div> 
```

4. Use your CROAT wallet address, edit <b>wallet</b> in 'scripts/croat.js'

<br><br> 
(PiTi2k5/Crypto-Webminer) Script take a 1% developer fee<br>

«------------------------------------------------------------------------------------------------------------------------------------»

CROAT.Community

https://croat.community/


