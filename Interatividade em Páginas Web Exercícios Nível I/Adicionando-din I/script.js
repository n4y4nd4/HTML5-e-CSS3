var button = document.createElement("button");
button.textContent = "Inserir";
button.id = "inserirButton";

button.addEventListener("click", function() {
  var heading = document.createElement("h2");
  heading.textContent = "Inserido";

  var container = document.getElementById("container");
  container.appendChild(heading);
});

var body = document.querySelector("body");

var div = document.createElement("div");
div.id = "container";

body.appendChild(button);
body.appendChild(div);