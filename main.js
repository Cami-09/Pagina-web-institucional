let current = 0;
const slides = document.querySelectorAll('.slide');

function autoSlider() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}
setInterval(autoSlider, 6000); // Cambia cada 6 segundos
