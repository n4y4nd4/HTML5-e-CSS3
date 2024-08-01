let nomeColegio = "Escola ABC";
let anoFundacao = 1950;
let nomeDiretor = "João Silva";
let telefoneDiretor = "11 99999-9999";

let colegio = {
  nome: nomeColegio,
  fundacao: anoFundacao,
  diretor: nomeDiretor,
  telefone: telefoneDiretor,
  obterDiretor: function(){
    console.log("Diretor: " + this.diretor);
  }
}

colegio.obterDiretor();
console.log(colegio);