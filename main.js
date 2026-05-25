let slideIndex = 0;

const slides = document.querySelectorAll(".slides");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

showSlides(slideIndex);

function showSlides(n){

    if(n >= slides.length){
        slideIndex = 0;
    }

    if(n < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide=>{
        slide.style.display = "none";
    });

    slides[slideIndex].style.display = "block";
}

function nextSlide(){
    slideIndex++;
    showSlides(slideIndex);
}

function prevSlide(){
    slideIndex--;
    showSlides(slideIndex);
}

next.addEventListener("click", nextSlide);

prev.addEventListener("click", prevSlide);

setInterval(()=>{
    slideIndex++;
    showSlides(slideIndex);
},5000);
