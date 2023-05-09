// Get all elements with the "animate-on-scroll" class
const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

// Define the function that will check if an element is in view
function isElementInView(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Define the function that will handle the scroll event
function handleScroll() {
  animateOnScrollElements.forEach(el => {
    if (isElementInView(el)) {
      el.classList.add('animated');
    }
  });
}

// Add the scroll event listener
window.addEventListener('scroll', handleScroll);
