var selectTxt = document.getElementsByClassName("selectTxt");
var opcaoP = document.getElementsByClassName("opcaoP");

var myDropdown = document.getElementById("myDropdown");


var buttonSubmit = document.getElementById("btnSubmit");
buttonSubmit.addEventListener("click", function(event){
    // Validação do campo Nome
    var nomeInput = document.getElementById("nome");
    if (nomeInput.value.trim() === "" || nomeInput.value.trim().split(" ").length < 2) {
      alert("O campo Nome deve conter pelo menos 2 nomes.");
      event.preventDefault(); 
      return;
    }

    // Validação do campo E-mail
    var emailInput = document.getElementById("email");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert("O campo E-mail deve ser válido.");
      event.preventDefault();
      return;
    }

    // Validação do campo Telefone
    var telefoneInput = document.getElementById("telefone");
    var telefone = telefoneInput.value.replace(/[\s()+-]/g, "");
    if (telefone.length !== 11) {
      alert("O campo Telefone deve ter 11 caracteres.");
      event.preventDefault();
      return;
    }




 //Validação contato
   if(pai.classList.contains("checkedC")){
     return
   }
   else if(filho1.classList.contains("checkedC")){
   }
    else if(filho2.classList.contains("checkedC")){
   }else{
     alert("Selecione um meio de contato");
    event.preventDefault();
    return;
   }

  // Validação do campo select
  if(selectTxt[0].classList.contains("validar")){
    alert("Selecione sua carne favorita");
    event.preventDefault();
    return;
  }


  //Validação preferencia
   if(opcaoP[0].classList.contains("checkedP")){
     
   }
   else if(opcaoP[1].classList.contains("checkedP")){
   }
    else if(opcaoP[2].classList.contains("checkedP")){
   }else{
     alert("Selecione uma preferência favorita");
    event.preventDefault();
    return
   }
  
     // Validação do campo Mensagem
    var mensagemInput = document.getElementById("mensagem");
    if (mensagemInput.value.trim() === "" || mensagemInput.value.length < 5) {
      alert("O campo Mensagem deve ter pelo menos 5 caracteres.");
      event.preventDefault();
      return;
    }
 alert("Formulário enviado!");
 
  });


    


let btnRadio = document.getElementsByClassName("opcaoP");

    btnRadio[0].addEventListener("click", function(){
        btnRadio[0].classList.toggle("checkedP")
        if(btnRadio[0].classList.contains("checkedP")){
            btnRadio[1].classList.remove("checkedP")
            btnRadio[2].classList.remove("checkedP")
        }
    });

    btnRadio[1].addEventListener("click", function(){
        btnRadio[1].classList.toggle("checkedP")
        if(btnRadio[1].classList.contains("checkedP")){
            btnRadio[0].classList.remove("checkedP")
            btnRadio[2].classList.remove("checkedP")
        }
    });

    btnRadio[2].addEventListener("click", function(){
        btnRadio[2].classList.toggle("checkedP")
        if(btnRadio[2].classList.contains("checkedP")){
            btnRadio[0].classList.remove("checkedP")
            btnRadio[1].classList.remove("checkedP")
        }
    });


   // Codigo do check

let checks = document.getElementsByClassName("checkC")
let container = document.querySelectorAll(".opcaoC")
let filho1 = checks[0];
let filho2 = checks[1]
let pai = checks[2];



pai.addEventListener("click", function(){
    if(pai.classList.value == "checkC inter" ){
        filho1.setAttribute("class","checkC")
        filho2.setAttribute("class","checkC")
        pai.setAttribute("class","checkC")
}else{
    pai.classList.toggle("checkedC");
    pai.classList.remove("inter");
    filho1.classList.toggle("checkedC");
    filho2.classList.toggle("checkedC");
}
});

filho1.addEventListener("click", function(){
    filho1.classList.toggle("checkedC")
    pai.classList.toggle("inter")
    if(filho2.classList.contains("checkedC")){
        pai.classList.add("checkedC")
    }else{
        pai.classList.remove("checkedC")
    }
});

filho2.addEventListener("click", function(){
    filho2.classList.toggle("checkedC")
    pai.classList.toggle("inter")
    if(filho1.classList.contains("checkedC")){
        pai.classList.add("checkedC")
    }else{
        pai.classList.remove("checkedC")
    }
});

// Select / Dropbox
let dropTxt = document.getElementsByClassName("dropTxt")
let dropContent = document.getElementsByClassName("contentDrop");
let setinha = document.querySelector("i")
let select = document.getElementsByClassName("selectTxt");
let item = document.getElementsByClassName("btnDrop");
let textSelector = select[0].textContent;

  dropTxt[0].addEventListener("click", function(){
    dropContent[0].classList.toggle("drop")
    setinha.classList.toggle("move")
    dropContent[0].addEventListener("click", function(){
      if(dropContent[0].classList.contains("drop")){
        setinha.classList.toggle("move")
        dropContent[0].classList.remove("drop")
      }
    });
  });
 
  

item[0].addEventListener("click", function(){
  let txt0 = item[0].innerText;
  selectTxt[0].innerText = txt0;
  selectTxt[0].classList.remove("validar");
})

item[1].addEventListener("click", function(){
  let txt1 = item[1].innerText;
  selectTxt[0].innerText = txt1;
  selectTxt[0].classList.remove("validar");
})

item[2].addEventListener("click", function(){
  let txt2 = item[2].innerText;
  selectTxt[0].innerText = txt2;
  selectTxt[0].classList.remove("validar");
})

item[3].addEventListener("click", function(){
  let txt3 = item[3].innerText;
  selectTxt[0].innerText = txt3;
  selectTxt[0].classList.remove("validar");
})

item[4].addEventListener("click", function(){
  let txt4 = item[4].innerText;
  selectTxt[0].innerText = txt4;
  selectTxt[0].classList.remove("validar");
})


