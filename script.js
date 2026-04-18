document.addEventListener("DOMContentLoaded", () => {
  const mobileBtn = document.getElementById('mobile-button');
  const mobileNav = document.getElementById('mobileNav');

  mobileBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    mobileBtn.classList.toggle('active');
  });
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a, .mobile-navbar a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});