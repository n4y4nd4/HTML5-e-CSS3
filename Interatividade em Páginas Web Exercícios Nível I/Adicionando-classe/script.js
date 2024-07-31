let botao = document.querySelector('button');
botao.setAttribute('onclick', 'alterar');

botao.onclick = function alterar(){
  nome = document.getElementById('nome').setAttribute('class', 'texto');
}