let item = document.body.children[0].children[1];
let lista = item.parentNode;

item.onclick = function alterar(){
  this.parentNode.classList.remove("lista");
  this.parentNode.classList.add("listaSelecionada");
}
console.log(item);