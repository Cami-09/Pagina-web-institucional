let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Función para mover el slider
function moveSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto-play (Cambio automático cada 5 segundos)
setInterval(() => {
    moveSlide(1);
}, 5000);
