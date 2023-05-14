function slide(direction) {
  let slidesToShow = 4;
  let slidesToScroll = 1;
  const sliderTrack = document.querySelector(".slider-track");
  const sliderItem = document.querySelectorAll(".slider-item");
  const sliderItemWidth = sliderItem[0].offsetWidth;
  const sliderContainerWidth = document.querySelector(".slider-container").offsetWidth;
  const sliderTrackWidth = sliderItemWidth * sliderItem.length;

  if (sliderContainerWidth >= 768 && sliderContainerWidth < 1024) {
    slidesToShow = 3;
  } else if (sliderContainerWidth >= 576 && sliderContainerWidth < 768) {
    slidesToShow = 2;
  } else if (sliderContainerWidth < 576) {
    slidesToShow = 1;
  }

  const movePosition = slidesToScroll * sliderItemWidth;
  const maxPosition = -(sliderTrackWidth - slidesToShow * sliderItemWidth);

  if (direction === "next" && currentIndex < sliderItem.length - slidesToShow) {
    currentIndex += slidesToScroll;
  } else if (direction === "prev" && currentIndex > 0) {
    currentIndex -= slidesToScroll;
  }

  if (currentIndex === 0) {
    document.querySelector(".slider-arrow-left").classList.add("hidden");
  } else {
    document.querySelector(".slider-arrow-left").classList.remove("hidden");
  }

  if (currentIndex >= sliderItem.length - slidesToShow) {
    document.querySelector(".slider-arrow-right").classList.add("hidden");
  } else {
    document.querySelector(".slider-arrow-right").classList.remove("hidden");
  }

  sliderTrack.style.transform = `translateX(${currentIndex * -movePosition}px)`;
}