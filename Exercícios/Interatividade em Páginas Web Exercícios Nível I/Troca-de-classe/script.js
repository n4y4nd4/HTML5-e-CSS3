//Seleciona todas as linhas da tabela
const linhas = document.querySelectorAll("#tabela tr");

//Percorre todas as linhas
for (let i = 0; i < linhas.length; i++) {
  //Verifica se a linha atual tem a classe "azul"
  if (linhas[i].classList.contains("azul")) {
    linhas[i].classList.remove("azul");//Remove a classe "azul" da linha atual
    linhas[i].classList.add("vermelho");//Adiciona a classe "vermelho" na linha atual
  }

  //Verifica se a linha atual tem a classe "vermelho" 
  else if (linhas[i].classList.contains("vermelho")) {
    linhas[i].classList.remove("vermelho");//Remove a classe "vermelho" da linha atual
    linhas[i].classList.add("azul");//Adiciona a classe "azul" na linha atual
  }

}