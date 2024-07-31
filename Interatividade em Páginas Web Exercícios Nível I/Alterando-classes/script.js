let titulo1 = document.querySelector('h1');
titulo1.setAttribute('class', 'alterar');

titulo1.onclick = function alterar(){
  document.querySelector("h1").classList.toggle("titulo");
  
}