var divContainer = document.createElement("div");
divContainer.id = "container";

var spanElement = document.createElement("span");
spanElement.textContent = "olá";

divContainer.appendChild(spanElement);

divContainer.addEventListener("click", function(){
  spanElement.textContent = "teste";
});

var body = document.querySelector("body");
body.appendChild(divContainer);
