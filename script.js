AOS.init({
  duration: 1000,
  once: true
});

window.addEventListener('scroll', function () {
  const header = document.getElementById('main-header');
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

function toggleMenu() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('active');
}

