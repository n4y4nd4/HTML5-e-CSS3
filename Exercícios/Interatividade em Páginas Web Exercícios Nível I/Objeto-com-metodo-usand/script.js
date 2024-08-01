let raio = 3;

let circulo = {
  raio: raio,
  circunferencia:function(){
    return Math.PI * (this.raio * 2);
},
  area:function(){
    return Math.PI * this.raio ** 2;
    
  },
    
}

console.log("Circunferência:", circulo.circunferencia());
console.log("Área:", circulo.area());