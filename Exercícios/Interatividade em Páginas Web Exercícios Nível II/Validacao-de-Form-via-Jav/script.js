let form = document.getElementById('form');
let nome = document.getElementById('nome');
let email = document.getElementById('email');
let cpf = document.getElementById('cpf');
let erroNome = document.getElementById('erroNome');
let erroEmail = document.getElementById('erroEmail');
let erroCPF = document.getElementById('erroCPF');


nome.addEventListener('blur', () => {
  if (nome.value == "" || nome.value == " ") {
    erroNome.textContent = "NOME INVALIDO";
    nome.focus();

  } else {
    erroNome.textContent = "";

  }
})

email.addEventListener('blur', () => {
  if (!email.value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
    erroEmail.textContent = "EMAIL INVALIDO";
    email.focus();
  } else {
    erroEmail.textContent = "";

  }
})

cpf.addEventListener('blur', () => {
  if (!cpf.value.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/) && !cpf.value.match(/^\d{11}$/)) {
    erroCPF.textContent = "CPF INEXISTENTE";
    cpf.focus()

  } else {
    erroCPF.textContent = "";

  }
});