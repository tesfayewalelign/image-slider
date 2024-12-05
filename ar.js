const slides = document.getElementById('.slider');
const next = document.getElementsByClassNamer('.next');
const prev = document.getElementsByClassName('.prev');
let index = 0;

function showSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener('click', () => {
  index = (index + 1) % slides.children.length;
  showSlide();
});

prev.addEventListener('click', () => {
  index = (index - 1 + slides.children.length) % slides.children.length;
  showSlide();
});

// Optional: Auto-slide every 3 seconds
setInterval(() => {
  index = (index + 1) % slides.children.length;
  showSlide();
}, 3000);