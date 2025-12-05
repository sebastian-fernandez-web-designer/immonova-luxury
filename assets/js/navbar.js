AOS.init({ 
    once: true, 
    offset: 50,
    duration: 800 
});

// 1. LÓGICA NAVBAR AL SCROLL
const navbar = document.getElementById('mainNavbar');
const topBar = document.querySelector('.top-bar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Navbar visible/invisible
    if (currentScroll > 70) {
        navbar.classList.add('navbar-visible');
    } else {
        navbar.classList.remove('navbar-visible');
    }

    // Top-bar oculta al bajar, aparece al subir
    if (currentScroll > lastScroll && currentScroll > 50) {
        topBar.style.transform = 'translateY(-100%)';
    } else {
        topBar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

