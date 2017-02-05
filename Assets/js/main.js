var container = document.getElementById("containerInfo");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');					
	ourRequest.onload = function() {
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
	};	
	ourRequest.send();
});

function renderHTML(data) {
	var htmlString = "";

	for(i=0; i<data; i++) {
		htmlString += "<p>Dani is a! " + data[i].attribute + "dog!</p>";
 	}
	
	container.insertAdjacentHTML('beforeend', htmlString);
}