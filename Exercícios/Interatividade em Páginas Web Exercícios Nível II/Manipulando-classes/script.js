let div = document.querySelector("div");
div.addEventListener("click", function() {
  div.classList.add("card");
});

let h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
  h1.classList.toggle("corVermelha");
});