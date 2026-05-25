// --- LÓGICA DEL SLIDER PROFESIONAL ---

let currentSlide = 0;
const slides = document.querySelectorAll('#main-slider .slide');

// Función para mostrar un slide específico
function showSlide(index) {
    // Primero ocultamos todos los slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Calculamos el índice circularmente
    currentSlide = (index + slides.length) % slides.length;
    
    // Mostramos el slide actual
    slides[currentSlide].classList.add('active');
}

// Función para avanzar o retroceder (botones)
function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// --- CAMBIO AUTOMÁTICO (Auto-scroll) ---
// Cambia de slide cada 7 segundos para una lectura tranquila
setInterval(() => {
    moveSlide(1);
}, 7000);
