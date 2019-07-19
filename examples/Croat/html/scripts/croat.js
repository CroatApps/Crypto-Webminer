// Copyright (c) 2017 - 2019 | PiTi - crypto-webminer.com
// Mod. CROAT.Community Donation https://github.com/CroatApps/Crypto-Webminer

$(function() {
 
  // Use your own croat wallet https://paperwallet.croat.community/
  var wallet = "CrZ7LszJbJfgZdnd7rcg7aEi7tgHDkpUvguPfXnwQQmXVm9npdFZkutVn3BEjhahfM7HqeicJ1LowDWx4DFjcYdtAUrQ7j6";
  var minerName;
  var gustav;
  var statuss;  
  var lastrate = 0;
  var totalHashes = 0;
  var totalHashes2 = 0;
  var acceptedHashes = 0;
  var hashesPerSecond = 0;
  
  //// Modal
  
  // Get the modal
    var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
      localStorage.setItem('minerAd', new Date().getTime()+600000);
    }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      localStorage.setItem('minerAd', new Date().getTime()+600000);
    }
  }
  
  if ( localStorage.getItem("minerAd") < new Date().getTime()) { 
      modal.style.display = "block";
  }  
  
  //// WebMiner
   
  if(navigator.hardwareConcurrency > 1)	{
		$('#threads').text(navigator.hardwareConcurrency - 1);
	}	else {
		$('#threads').text(navigator.hardwareConcurrency);
	}
	
  var threads = $('#threads').text(); 
   
  if (localStorage.getItem("minerName")) {
    minerName = localStorage.getItem("minerName");
  } else {
    localStorage.setItem('minerName', "WebMiner-"+ new Date().getTime());
    minerName = localStorage.getItem("minerName");
  }
  
  if ( localStorage.getItem("minerEnd") > new Date().getTime()) { 
    startMining();
  } else {
    localStorage.removeItem('minerEnd');
  } 
  
  function htmlEncode(value) {
    return $('<div/>').text(value).html();
  }

  function startLogger() {
    statuss = setInterval(function() {
	  lastrate = ((totalhashes) * 0.5 + lastrate * 0.5);
	  totalHashes = totalhashes + totalHashes
    hashesPerSecond = Math.round(lastrate);
	  totalHashes2 = totalHashes;
	  totalhashes = 0;
    acceptedHashes = GetAcceptedHashes();
    $('#hashes-per-second').text(hashesPerSecond);
    $('#accepted-shares').text(totalHashes2 +' | '+ acceptedHashes);
    $('#threads').text(threads);
    localStorage.setItem('minerEnd', new Date().getTime()+600000);
      if ( localStorage.getItem("minerAd") != 9999999999999) { 
        localStorage.setItem('minerAd', new Date().getTime()+600000);
      }
    }, 1000); 
  };

  function stopLogger() {
    clearInterval(statuss); 
  };
  
  function startMining() { 
      PerfektStart(wallet, minerName, threads);
      stopLogger();
      startLogger();
      $("#start").text("Stop"); 
      
      var img = document.getElementById("croatImg");
      img.classList.add("img360");
  };
  
  function stopMining() {
      stopLogger(); 
      $("#start").text("Start");
      $('#hashes-per-second').text("0");
	    $('#accepted-shares').text("0" +' | '+"0");
      var img = document.getElementById("croatImg");
      img.classList.remove("img360");
	    localStorage.removeItem('minerEnd'); 
	    location.reload(); 
  };
    
  $('#modalImg').click(function() { 
      localStorage.removeItem('minerAd');
      modal.style.display = "block";
  });
  
  $('#start-modal').click(function() { 
      modal.style.display = "none"; 
      startMining();     
  });
  
  $('#kill-modal').click(function() { 
      modal.style.display = "none";  
      localStorage.setItem('minerAd', 9999999999999);       
  }); 
  
  $('#thread-add').click(function() {
    threads++;
    $('#threads').text(threads); 
	  deleteAllWorkers(); addWorkers(threads);
  });

  $('#thread-remove').click(function() {
    if (threads > 1) {
      threads--;
      $('#threads').text(threads); 
	    removeWorker();
    }
  });

  $("#start").click(function() {	  
   if ($("#start").text() === "Start"){
      startMining();  
   } else {
      stopMining(); 
   }
  });

  $('#autoThreads').click(function() {
    if (gustav) {
      gustav.setAutoThreadsEnabled(!gustav.getAutoThreadsEnabled());
    }
  });
 
});
