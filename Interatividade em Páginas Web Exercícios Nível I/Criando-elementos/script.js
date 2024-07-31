let span = document.createElement("span");
let div = document.createElement("div");
div.classList.add("mensagem");

div.appendChild(span);
document.body.appendChild(div);

span.innerText = "Olá Mundo";

console.log(div)
