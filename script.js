document.addEventListener("DOMContentLoaded", () => {
  const mobileBtn = document.getElementById('mobile-button');
  const mobileNav = document.getElementById('mobileNav');
  const darkModeBtn = document.getElementById('darkmode');

  mobileBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    mobileBtn.classList.toggle('active');
  });

  darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    darkModeBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('darkMode', isDark);
  });

  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeBtn.textContent = 'Light Mode';
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a, .mobile-navbar a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});