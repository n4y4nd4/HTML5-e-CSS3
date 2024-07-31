let botao = document.querySelector('button');
let title = document.getElementById('titulo');
botao.setAttribute('click', 'alterar()');

botao.onclick = function alterar(){
  title.style.marginBottom = "0";
}