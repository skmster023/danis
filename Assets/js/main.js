var counterClicks = 0;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn.addEventListener("click", function() {
    if(counterClicks == 0) {
      counterClicks++;
      var ourRequest = new XMLHttpRequest();
      ourRequest.open('GET', 'Assets/js/Dani.json');
      ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
          var ourData = JSON.parse(ourRequest.responseText);
          renderHTML(ourData);
        } else {
      	 console.log("We connected to the server, but it returned an error.");
      }
    }
    btn.classList.add("hide-me");
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };
  
  ourRequest.send();

}); //curly brace to close function discription. 
		//paranthesis to close EventListener.

function renderHTML(data) {
  var htmlString = "";
  var i = getRandomInt(0,data.length);
  var j = getRandomInt(0,data.likes.length);
    htmlString += "<p>Thank you for submitting</p>"
    htmlString += "<p>Here is a random fact about Dani:</p>"
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat" + data[i].likes[j] + ".</p>";
  
  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}