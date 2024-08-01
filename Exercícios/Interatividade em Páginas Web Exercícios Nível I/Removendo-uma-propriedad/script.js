let nomeColegio = "Escola ABC";
let anoFundacao = 1950;
let nomeDiretor = "João Silva";
let telefoneDiretor = "11 99999-9999";

let colegio = {
  nome: nomeColegio,
  diretor: nomeDiretor,
  telefone: telefoneDiretor,
  fundacao: anoFundacao,
  obterDiretor: function(){
    console.log("Diretor: " + this.diretor);
  }
};

delete colegio.fundacao;

colegio.obterDiretor();
console.log(colegio);