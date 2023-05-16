const carousel = document.querySelector('.carousel');
const books = document.querySelectorAll('.book');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;
const bookWidth = books[0].offsetWidth + 10;

function moveCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * bookWidth}px)`;
}

leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    moveCarousel();
  }
});

rightArrow.addEventListener('click', () => {
  if (currentIndex < books.length - 7) {
    currentIndex++;
    moveCarousel();
  }
});