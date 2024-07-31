// Obtém uma lista de todos os elementos <span>
let span1 = document.createElement("span");
let span2 = document.createElement("span");
let span3 = document.createElement("span");

document.body.appendChild(span1).innerText = "Lucas" + "\n";
document.body.appendChild(span2).innerText = "Lucas" + "\n";
document.body.appendChild(span3).innerText = "Lucas" + "\n";

var spans = document.querySelectorAll('span');

// Adiciona um ouvinte de eventos ao objeto window para o evento 'load'
window.addEventListener('load', function() {
  // Itera sobre a lista de elementos <span>
  spans.forEach(function(span) {
    // Define a propriedade color de cada elemento <span> como 'green'
    span.style.color = 'green';
  });
});
