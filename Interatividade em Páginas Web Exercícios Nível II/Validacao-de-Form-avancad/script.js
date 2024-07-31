function validar(){
  let nome = document.querySelector("#nome");
  if (nome.value.length < 3 || nome.value.length > 10){
    alert('insira seu nome')
    return
  } 
  
  let check = document.querySelectorAll("input");
  if (check[1].checked == false && check[2].checked == false){
    alert("selecione pelo menos uma opção"); 
    return
  }

  let cpf = document.querySelector('#cpf')
  let strCpf = cpf.value.replace(/[^a-zA-Z0-9]/gi, "")
  console.log(strCpf)
  if (strCpf.length != 11){
    alert("informe um cpf valido");
    return
  }


  let born = document.querySelector("#data");
  if (born.value.includes("/") == false) {
    alert("insira o caractere '/'");
    return
  }

  let end = document.querySelector("#endereco").value.toLowerCase()
  if (end.includes("rua") == false){
   alert("insira a palavra rua de forma correta"); 
    return
  }
  
}
