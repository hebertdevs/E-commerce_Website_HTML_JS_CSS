const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

/* Condição de inserir na navbar a class "active" que faz o menu hamburgue aparecer */
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("actives");
  });
}

/* Condição de retirar da navbar a class "active" que faz o menu hamburgue aparecer */
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("actives");
  });
}
