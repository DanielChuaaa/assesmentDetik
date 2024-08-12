const hamburgerButton = document.querySelector(".hamburgerButton");
const navLink = document.querySelector(".navLink");

hamburgerButton.addEventListener("click", navLinkToggle);

function navLinkToggle() {
  if (navLink.classList.contains("navLinkActive")) {
    hamburgerButton.classList.remove("active");
    navLink.classList.remove("navLinkActive");
    hamburgerButton.src = "../assets/hamburgerButton.png";
  } else {
    hamburgerButton.classList.add("active");
    navLink.classList.add("navLinkActive");
    hamburgerButton.src = "../assets/xicon.png";
  }
}

let currentIndex = 0;
let slidesToShow = 3.5;

function updateSlidesToShow() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    slidesToShow = 1.5;
  } else {
    slidesToShow = 3.5;
  }
}

function moveSlide(step) {
  const slideContainer = document.querySelector(".carousel-slide");
  const slideWidth = document.querySelector(".slide").offsetWidth;
  const totalSlides = document.querySelectorAll(".slide").length;

  const maxIndex = totalSlides - slidesToShow;

  if (step === 1 && currentIndex < maxIndex) {
    currentIndex++;
  } else if (step === -1 && currentIndex > 0) {
    currentIndex--;
  }

  const offset = -currentIndex * slideWidth;
  slideContainer.style.transform = `translateX(${offset}px)`;

  document.querySelector(".prev-button").disabled = currentIndex === 0;
  document.querySelector(".next-button").disabled = currentIndex >= maxIndex;
}

document.querySelector(".prev-button").disabled = true;
document.querySelector(".next-button").disabled = false;

updateSlidesToShow();
window.addEventListener("resize", updateSlidesToShow);

window.addEventListener("resize", () => moveSlide(0));
