// Seleciona os elementos da página que serão manipulados no carrossel
const prev = document.querySelector('#prev'); // Botão "Anterior"
const next = document.querySelector('#next'); // Botão "Próximo"
const carrossel = document.querySelector('#carrossel-contrainer'); // Contêiner do carrossel
const carrosselLista = document.querySelector('.carrossel'); // Lista de itens do carrossel
const carrosselItems = document.querySelectorAll('.item'); // Todos os itens do carrossel

let indice = 0; // Índice inicial do carrossel (começa no primeiro item)

// Calcula quantos itens do carrossel podem ser exibidos de acordo com a largura do contêiner
const itensMostrados = Math.floor(carrossel.offsetWidth / carrosselItems[0].offsetWidth);
const totalItems = carrosselItems.length; // Número total de itens no carrossel

// Função para atualizar o carrossel, ajustando o deslocamento e a habilitação dos botões
function atualizaCarrossel() {
  // Calcula a largura de um item, incluindo margens
  const larguraItem = carrosselItems[0].offsetWidth;

  // Calcula o deslocamento necessário para mover o carrossel para o índice atual
  const deslocamento = (indice * larguraItem * -1 )*6.55;
  console.log(deslocamento) // Exibe o valor de deslocamento no console para debug

  // Aplica o deslocamento na lista de itens do carrossel (transformação de translateX)
  carrosselLista.style.transform = `translateX(${deslocamento}px)`;

  // Desabilita o botão "Anterior" se o índice estiver no primeiro item
  prev.disabled = indice === 0;

  // Desabilita o botão "Próximo" se o índice for igual ao número total de itens - itens visíveis
  next.disabled  = indice === 1;
}

// Atualiza o carrossel ao carregar a página ou ao iniciar
atualizaCarrossel();

// Adiciona um evento de clique ao botão "Anterior"
prev.addEventListener('click', () => {
  if (indice > 0) { // Verifica se o índice não está no primeiro item
    indice--; // Decrementa o índice (move para o item anterior)
    atualizaCarrossel(); // Atualiza a posição do carrossel
  }
});

// Adiciona um evento de clique ao botão "Próximo"
next.addEventListener('click', () => {
  if (indice < totalItems - itensMostrados) { // Verifica se há mais itens à frente
    indice++; // Incrementa o índice (move para o próximo item)
    atualizaCarrossel(); // Atualiza a posição do carrossel
  }
});

// Seleciona os elementos de controle do menu lateral
let departamento = document.getElementById("departamento"); // Elemento do departamento (botão para abrir o menu)
let close = document.getElementById("close"); // Botão de fechar o menu
let aside = document.querySelector("aside"); // Menu lateral (elemento aside)

// Adiciona um evento de clique ao botão de departamento para alternar a visibilidade do menu lateral
departamento.addEventListener('click', () => {
  if (aside.classList.contains('active')) {
    aside.classList.remove('active'); // Remove a classe 'active', escondendo o menu
  } else {
    aside.classList.add('active'); // Adiciona a classe 'active', mostrando o menu
  }
});

// Adiciona um evento de clique ao botão de fechar para esconder o menu lateral
close.addEventListener('click', () => {
  if (aside.classList.contains('active')) {
    aside.classList.remove('active'); // Remove a classe 'active', escondendo o menu
  } else {
    aside.classList.add('active'); // Adiciona a classe 'active', mostrando o menu
  }
});
