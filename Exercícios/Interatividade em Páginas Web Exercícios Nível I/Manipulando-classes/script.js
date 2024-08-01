// seleciona o botão
const botao = document.querySelector('button');

// adiciona o evento de clique no botão
botao.addEventListener('click', function() {
  // seleciona todas as tags p do documento
  const paragrafos = document.querySelectorAll('p');

  // percorre a lista de parágrafos e altera o estilo de exibição para 'block'
  for (let i = 0; i < paragrafos.length; i++) {
    paragrafos[i].style.display = 'block';
  }

  // seleciona a div card
  const card = document.querySelector('.card');

  // altera a cor de fundo da div para azul
  card.style.backgroundColor = 'blue';

  // altera o evento do botão para desfazer as alterações
  botao.addEventListener('click', function() {
    // percorre a lista de parágrafos e altera o estilo de exibição para 'none'
    for (let i = 0; i < paragrafos.length; i++) {
      paragrafos[i].style.display = 'none';
    }

    // altera a cor de fundo da div para branco
    card.style.backgroundColor = 'white';

    // altera o evento do botão para fazer as alterações novamente
    botao.addEventListener('click', function() {
      for (let i = 0; i < paragrafos.length; i++) {
        paragrafos[i].style.display = 'block';
      }

      card.style.backgroundColor = 'blue';
    });
  });
});
