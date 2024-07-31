
let input = document.getElementById("email");
input.addEventListener("keydown", function(adicionar){
  console.log(adicionar.key);
});

input.addEventListener("blur", function(){
  let text = input.value;
  alert(text)
})