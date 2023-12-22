const botoesCategorias = document.querySelectorAll(".botao-categoria");

botoesCategorias.forEach((botao) => {
  botao.addEventListener("click", () => {
    const categoriaSelecionada = botao.getAttribute("name");

    associarPainel(categoriaSelecionada);
    filtrarPorCategoria(categoriaSelecionada);
    atualizarEstadosDosBotoes(categoriaSelecionada);
  });
});

function associarPainel(categoriaSelecionada) {
  const painelVideos = document.querySelector('[role="tabpanel"]');
  const idBotao = document.querySelector(`[name="${categoriaSelecionada}"]`).id;

  painelVideos.setAttribute("aria-labelledby", idBotao);
}

function filtrarPorCategoria(filtro) {
  const videos = document.querySelectorAll(".videos__item");

  for (const video of videos) {
    const categoria = video.querySelector(".categoria").textContent.toLowerCase();
    const valorFiltro = filtro.toLowerCase();

    const mostrarVideo = valorFiltro === 'tudo' || categoria.includes(valorFiltro);

    video.classList.toggle("escondido", !mostrarVideo);
  }
}

function atualizarEstadosDosBotoes(categoriaSelecionada) {
  botoesCategorias.forEach((botao) => {
    const botaoFoiSelecionado = botao.getAttribute("name") === categoriaSelecionada;

    botao.ariaSelected = botaoFoiSelecionado;
  })
}
