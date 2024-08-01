 let brasil = document.getElementById('brasil');
let argentina = document.getElementById('argentina');
let span = document.getElementById('escolhido');

brasil.addEventListener('click', () => {
  span.innerHTML = brasil.textContent;
  span.style.border = "1px solid green";
})

argentina.addEventListener('click', () => {
  span.innerHTML = argentina.textContent;
  span.style.border = "1px solid blue";
})