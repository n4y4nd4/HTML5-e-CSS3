//Seleciona todos os elementos com a classe 'accordion-item'
const itens = document.querySelectorAll('.accordion-item');

//Loop em cada elemento encontrado
for (const item of itens) {
  //Seleciona o elemento com a classe 'accordion-header'
  const header = item.querySelector('.accordion-header');
  //Seleciona o elemento com a classe 'conteudo'
  const conteudo = item.querySelector('.conteudo');
  //Adiciona um click no elemento 'header'
  header.addEventListener('click', function() {
    //Verifica se o item atual possui a classe 'active' nele
    if (item.classList.contains('active')) {
      //Se tiver a classe 'active', ele remove a altura maxima do conteudo e a classe 'active'
      conteudo.style.maxHeight = null;
      item.classList.remove('active');
    }
    else {
      //Se nao tiver a classe 'active', percorre todos os outros itens e verifica se algum   deles tem a classe 'active'
      for (const outroItem of itens) {
        if (outroItem.classList.contains('active')) {
          //Seleciona o elemento com a classe 'conteudo' dentro do outro item
          const outroConteudo = outroItem.querySelector('.conteudo');
          //Remove a altura maxima do conteudo e a classe 'active' do outro item
          outroConteudo.style.maxHeight = null;
          outroItem.classList.remove('active');
        }
      }
      //Define a altura maxima do conteudo atual como a altura total e adiciona a classe 'active' nele
      conteudo.style.maxHeight = conteudo.scrollHeight + 'px';
      item.classList.add('active');
    }
  });
}
