const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.navbar-menu');
const searchBox = document.querySelector('.navbar-search');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  searchBox.classList.toggle('active');
});