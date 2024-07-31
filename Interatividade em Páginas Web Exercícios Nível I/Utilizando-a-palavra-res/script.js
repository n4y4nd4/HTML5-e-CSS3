let nome = "Louis Tomlinson";
let horasTrabalhadas = 15;
let valorHora = 20;


let advogado = {
  nome: nome,
  horas: horasTrabalhadas,
  valor: valorHora,
  calcularGanho:function(){
    this.calcularGanho = this.horas * this.valor;
    
    
  }
}
  
advogado.calcularGanho();
console.log(advogado);