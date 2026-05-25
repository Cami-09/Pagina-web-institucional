let slides = document.querySelectorAll(".slide");

let current = 0;

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

next.addEventListener("click", ()=>{

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);
});

prev.addEventListener("click", ()=>{

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    showSlide(current);
});

setInterval(()=>{

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);

},5000);
