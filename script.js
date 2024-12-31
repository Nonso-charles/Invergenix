// Select the menu toggle image and the navigation links
const menuToggle = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Add a click event listener to the menu toggle
menuToggle.addEventListener('click', () => {
    // Toggle the "active" class on the nav links
    navLinks.classList.toggle('active');
});