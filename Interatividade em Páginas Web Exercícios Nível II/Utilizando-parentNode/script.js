let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

for(let i = 0; i<li.length; i++){
  li[i].addEventListener("click", function alterar(){
    
    if(li[i].classList.contains("corAmarela")){
      li[i].classList.remove("corAmarela");
      li[i].classList.add("corVerde");
      ul.classList.toggle("corPreta");
    }
      
    else if(li[i].classList.contains("corVerde")){
      li[i].classList.remove("corVerde");
      li[i].classList.add("corAmarela");
      li[i].classList.add("corPreta");
    }
  })
}
