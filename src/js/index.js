const botaoMais = document.querySelector(".btn-mostrar_mais");
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

botaoMais.addEventListener("click", () => {
  mostrarMaisProjetos();
  esconderBotao();
});

function esconderBotao() {
  botaoMais.classList.add("remover");
}

function mostrarMaisProjetos() {
  projetosInativos.forEach((projetoInativo) => {
    projetoInativo.classList.add("ativo");
  });
}
