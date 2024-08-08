const previousButton = document.querySelector(".prev");
const forwardButton = document.querySelector(".next");

let currentIndex = 0;

const showSlide = (index) => {
  let slides = document.querySelectorAll(".slides-item");
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
};

const nextSlide = () => {
  showSlide(currentIndex + 1);
};

const prevSlide = () => {
  showSlide(currentIndex - 1);
};

previousButton.addEventListener("click", prevSlide);
forwardButton.addEventListener("click", nextSlide);
