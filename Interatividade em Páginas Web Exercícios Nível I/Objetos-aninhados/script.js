
let cidade = {
  nomeCidade: "Rio de Janeiro",
  anoFundacao: 1565,
  prefeito:{
    nomePrefeito: "Camila",
    idade: 37,
  },

  exibeNomePrefeito(){
    console.log("Prefeito:", this.prefeito.nomePrefeito);
  }
  
  
}

cidade.exibeNomePrefeito();
console.log(cidade);