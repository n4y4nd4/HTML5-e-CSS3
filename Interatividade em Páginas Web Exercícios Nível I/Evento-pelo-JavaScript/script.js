let h1 = document.createElement("h1");

h1.addEventListener('click', function onClick(){
  h1.style.backgroundColor = "red";

})
h1.innerText = "red";
document.body.appendChild(h1);