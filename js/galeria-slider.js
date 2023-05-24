document.addEventListener("DOMContentLoaded", function() {
	const carousel = document.querySelector('.carousel');
	const books = carousel.querySelectorAll('.book');
	const containerWidth = carousel.offsetWidth;
	const maxSlides = Math.floor(containerWidth / (books[0].offsetWidth + 10));
	const leftArrow = document.querySelector('.arrow.left');
	const rightArrow = document.querySelector('.arrow.right');

	let currentSlide = 0;

	leftArrow.addEventListener('click', function() {
		if (currentSlide > 0) {
			currentSlide--;
			carousel.style.transform = `translateX(-${currentSlide * (books[0].offsetWidth + 8)}px)`;
		}
		updateArrows();
	});

	rightArrow.addEventListener('click', function() {
		if (currentSlide < maxSlides - 1) {
			currentSlide++;
			carousel.style.transform = `translateX(-${currentSlide * (books[0].offsetWidth + 8)}px)`;
		}
		updateArrows();
	});

	function updateArrows() {
		leftArrow.classList.remove('disabled');
		rightArrow.classList.remove('disabled');

		if (currentSlide === 0) {
			leftArrow.classList.add('disabled');
		}

		if (currentSlide === maxSlides - 1) {
			rightArrow.classList.add('disabled');
		}
	}

	updateArrows();
});