document.getElementById('mobile-button').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.toggle('open');
});
// Mobile menu toggle
document.getElementById('mobile-button').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.toggle('open');
});

// Auto-set active based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-navbar a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});