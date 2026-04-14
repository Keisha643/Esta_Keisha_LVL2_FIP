//Variables
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const faqItems = document.querySelectorAll('.faq-item');


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


// FAQ Items Toggle
faqItems.forEach(item => {
    const toggle = item.querySelector('.faq-toggle');

    toggle.addEventListener('click', () => {

      // Close all other items
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
        }
      });

      // Toggle the clicked item
      item.classList.toggle('open');
    });
  });