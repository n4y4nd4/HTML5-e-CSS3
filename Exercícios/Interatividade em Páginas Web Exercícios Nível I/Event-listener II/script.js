var ulElement = document.createElement("ul");
ulElement.id = "lista";

var liElement = document.createElement("li");
liElement.textContent = "Acre";

ulElement.appendChild(liElement);

ulElement.addEventListener("click", function(){
  liElement.textContent = "Amapá";
  liElement.style.backgroundColor = "blue";
});

var body = document.querySelector("body");
body.appendChild(ulElement);