const wrapper = document.querySelector('.stories-wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];
let currentTestimonial = 0; // Default 0
let counter = 0;

setInterval(() => {
  indicators[currentTestimonial].classList.remove('active');
  wrapper.style.marginLeft = `-${100 * (currentTestimonial + 1)}%`;
  indicators[(currentTestimonial + 1) % indicators.length].classList.add('active');
  currentTestimonial = (currentTestimonial + 1) % indicators.length;
  
  counter++;
  
  if (counter === 4) {
    wrapper.style.marginLeft = 0;
    currentTestimonial = 0;
    counter = 0;
  }
}, 6000);