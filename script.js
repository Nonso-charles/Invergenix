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
