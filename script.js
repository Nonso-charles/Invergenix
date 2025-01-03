// Select all filter buttons and product cards
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

// Add click event listener to each filter button
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    // Add 'active' class to the clicked button
    button.classList.add('active');

    // Get the filter category
    const filterCategory = button.getAttribute('data-filter');

    // Show or hide products based on the selected category
    productCards.forEach((card) => {
      const productCategory = card.getAttribute('data-category');
      if (filterCategory === 'all' || filterCategory === productCategory) {
        card.style.display = 'block'; // Show product
      } else {
        card.style.display = 'none'; // Hide product
      }
    });
  });
});


productCards.forEach((card, index) => {
  if (filterCategory === 'all' || filterCategory === card.getAttribute('data-category')) {
    setTimeout(() => card.classList.remove('hidden'), index * 100); // Staggered show
  } else {
    setTimeout(() => card.classList.add('hidden'), index * 100); // Staggered hide
  }
});


// Adding a staggered animation effect for additional text 
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.animated-header');

  // Adding slight delay for a more dramatic effect
  setTimeout(() => {
    header.style.animationDelay = '0.2s';
    subtitle.style.animationDelay = '0.5s';
  }, 100);
});


// Add scroll animation to solutions
const solutionItems = document.querySelectorAll('.solution-item');

window.addEventListener('scroll', () => {
  solutionItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if(rect.top < window.innerHeight) {
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    }
  });
});

// Animate services on scroll
const servicesItems = document.querySelectorAll('.services-item');

window.addEventListener('scroll', () => {
  servicesItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const carouselInner = document.querySelector(".carousel-inner");
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  // Function to update the carousel
  function updateCarousel() {
    // Remove active class from all items
    carouselItems.forEach((item) => item.classList.remove("active"));

    // Add active class to the current item
    carouselItems[currentIndex].classList.add("active");

    // Calculate the offset for sliding
    const offset = -currentIndex * 100; // Move by 100% per slide
    carouselInner.style.transform = `translateX(${offset}%)`;

    // Update index for next slide
    currentIndex = (currentIndex + 1) % carouselItems.length;
  }

  // Automatically update carousel every 5 seconds
  setInterval(updateCarousel, 5000);

  // Initialize carousel
  updateCarousel();
});
