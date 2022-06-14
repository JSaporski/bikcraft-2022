// Link Ativo
const links = document.querySelectorAll('.header-menu a')

if (links) {
  function ativarLink(link) {
    const href = link.href
    const url = document.location.href

    if (href === url) {
      link.classList.add('active')
    }
  }

  links.forEach(ativarLink)
}

// Items do Orçamento
const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro) // Não preciso passar o nome da ID pelo 'ById'
  console.log(elemento)

  if (elemento) {
    elemento.checked = true
  }
}

parametros.forEach(ativarProduto)

// Perguntas Frequentes

const perguntas = document.querySelectorAll('#perguntas dt button')

function ativarPergunta(e) {
  const pergunta = e.currentTarget
  const controls = pergunta.getAttribute('aria-controls')

  const resposta = document.getElementById(controls)

  resposta.classList.toggle('ativa')
  const ativa = resposta.classList.contains('ativa')

  pergunta.setAttribute('aria-expanded', ativa)
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventoPerguntas)

// Galeria de Bicicletas
const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function trocarImagem(e) {
  const img = e.currentTarget
  galeriaContainer.prepend(img)
}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria)

// Simple Anime Plugin
if (window.SimpleAnime) {
  new SimpleAnime()
}

// ClipboardJS Plugin -------- Não será utilizado no projeto final, serve apenas para testes
// if (window.ClipboardJS) {
//   new ClipboardJS('.introducao-infos p')
// }
