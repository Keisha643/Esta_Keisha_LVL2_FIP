//Variables
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");


// Function
function showSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[n].classList.add("active");
}


// Auto-slide every 3 seconds
setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}, 3000);
