window.addEventListener('load', verNome)

function verNome(){
  
  let input = document.getElementById('nome');
  let exibe = document.getElementById('exibe');

  input.addEventListener('change', () => {
    exibe.style.display = 'block';
    exibe.textContent = input.value;
  });
};