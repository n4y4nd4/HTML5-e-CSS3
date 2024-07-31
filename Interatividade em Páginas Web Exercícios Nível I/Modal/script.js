const modal = document.getElementById('modal');
const botao = document.getElementById('botao');
const botaoFechar = document.getElementById('close');

// Adiciona a classe "oculto" na modal
modal.classList.add('oculto');

//Função para exibir a modal
function exibirModal() {
  modal.classList.remove('oculto');
}

//Função para esconder a modal
function esconderModal() {
  modal.classList.add('oculto');
}

//Event listener para exibir o modal quando clica no botao
botao.addEventListener('click', exibirModal);

//Event listener para esconder o modal quando clicar no X
botaoFechar.addEventListener('click', esconderModal);