var a = document.querySelector('.conteudo');
function alterar(){
  a.setAttribute("style", "background-color: blue; color: white; border-color: orange; width:102px; height:102px;");
}
a.addEventListener("click", alterar);