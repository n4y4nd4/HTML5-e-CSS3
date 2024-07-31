let div = document.createElement("div");
div.id = "card";
document.body.appendChild(div);


document.onload = alterar();

function alterar(){
  div.style.border = "4px dashed orange";
}