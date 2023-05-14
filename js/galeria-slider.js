// Seleciona os elementos da galeria
const gallery = document.querySelector('.gallery');
const books = document.querySelectorAll('.book');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Define a largura de cada livro na galeria
const bookWidth = books[0].offsetWidth;

// Define a variável que mantém o índice do livro atual
let currentIndex = 0;

// Função para atualizar a posição da galeria
const updateGalleryPosition = () => {
  gallery.style.transform = `translateX(${-currentIndex * bookWidth}px)`;
};

// Função para avançar para o próximo livro na galeria
const nextBook = () => {
  currentIndex++;
  // Se atingir o limite máximo, volta para o primeiro livro
  if (currentIndex === books.length) {
    currentIndex = 0;
  }
  updateGalleryPosition();
};

// Função para voltar para o livro anterior na galeria
const prevBook = () => {
  currentIndex--;
  // Se atingir o limite mínimo, volta para o último livro
  if (currentIndex < 0) {
    currentIndex = books.length - 1;
  }
  updateGalleryPosition();
};

// Adiciona um event listener para a seta direita
nextBtn.addEventListener('click', nextBook);

// Adiciona um event listener para a seta esquerda
prevBtn.addEventListener('click', prevBook);
