let div = document.getElementById("container");

let btn = document.querySelector("button");

btn.addEventListener("click", function() {
  let txt = document.createElement("h2");
  txt.textContent = "Título Inserido";
  div.appendChild(txt);
});