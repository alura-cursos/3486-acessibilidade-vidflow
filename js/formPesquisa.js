const formPesquisa = document.querySelector('.form__pesquisa');

formPesquisa.addEventListener('submit', (evento) => {
  evento.preventDefault();
  
  const primeiroVideoFiltrado =
    document.querySelector(".videos__item:not(.escondido) > iframe");

  primeiroVideoFiltrado?.focus();
});

const barraDePesquisa = document.querySelector(".pesquisar__input");

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa() {
  const videos = document.querySelectorAll(".videos__item");

  if (barraDePesquisa.value !== "") {
    for (const video of videos) {
      let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
      let valorFiltro = barraDePesquisa.value.toLowerCase();

      video.classList.toggle("escondido", !titulo.includes(valorFiltro));
    }
  } else {
    for (const video of videos) {
      video.classList.remove("escondido");
    }
  }
}