var container = document.getElementById("containerInfo");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://boiling-thicket-91212.herokuapp.com/danis/Assets/js/Dani.json');					
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