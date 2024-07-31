var button = document.createElement("button");
button.textContent = "Inserir";


button.addEventListener("click", function() {
  var listItem = document.createElement("li");
  listItem.textContent = "Nova entrada";

  var list = document.getElementById("lista")

  if (list){
    list.appendChild(listItem);
  }
  else {
    var ul = document.createElement("ul");
    ul.id = "lista";
    ul.appendChild(listItem);

    var body = document.querySelector("body");
    body.appendChild(ul);    
  }
});

var body = document.querySelector("body");
body.appendChild(button);