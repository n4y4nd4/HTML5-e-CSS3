function Pais(nome, continente, capital){
  this.nome = nome;
  this.continente = continente;
  this.capital = capital;
}

let pais = new Pais(nome = prompt("Nome do país:"), continente = prompt("Continente do país:"), capital = prompt("Capital do país"));

console.log(pais);