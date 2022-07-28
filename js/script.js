// Ativar links do Menu
const links = document.querySelectorAll(".header-menu a");
function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

// Escolher produto
const parametros = new URLSearchParams(window.location.search);
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  //verifica se elemento existe
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

//perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");
function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const conteudo = document.getElementById(controls);

  //se não existir a classe adiciona, se existir retira
  conteudo.classList.toggle("ativa");

  // se possuir a classe ativa
  pergunta.setAttribute("aria-expanded", conteudo.classList.contains("ativa"));
}
function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de biciletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  // adiciona media query
  if (matchMedia("(min-width:1000px)")) {
    // pega elemento a adiciona na primeira posição
    galeriaContainer.prepend(img);
  }
}
function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animação
if (window.SimpleAnime) {
  //verifica se arquivo foi carregado na pagina
  new SimpleAnime();
}
