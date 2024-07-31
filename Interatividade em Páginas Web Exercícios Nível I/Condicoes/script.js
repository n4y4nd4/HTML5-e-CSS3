//Seleciona todos os botoes dentro da tabela
const botoes = document.querySelectorAll("#tabela button");

//Para cada botao, ele adiciona um evento de clique que aciona a funçao
for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function(){
    //Seleciona a linha pai do botao clicado
    const linha = this.parentNode.parentNode;
    //Seleciona o elemento com classe "nota" dentro da linha e pega o texto
    const nota = linha.querySelector(".nota").textContent;

    //Verifica se a nota é maior ou igual a 6
    if (nota >= 5){
      //Remove a classe "vermelho" da linha e adiciona a classe "verde"
      linha.classList.remove("vermelho");
      linha.classList.add("verde");
    }
    else{
      //Remove a classe "verde" da linha e adiciona a classe "vermelho"
      linha.classList.remove("verde");
      linha.classList.add("vermelho");
    }
  });
}