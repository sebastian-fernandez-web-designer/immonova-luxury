    // PRELOADER
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        const letters = preloader.querySelectorAll('.letters-container span');
        const body = document.body;

        body.classList.add('loading');

        const tl = gsap.timeline({
            onComplete: () => {
                preloader.style.display = 'none';
                body.classList.remove('loading');
            }
        });

        tl.fromTo(letters, { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05, duration: 0.8, ease: "power4.out" });
        tl.to(letters, { color: '#d4af37', stagger: 0.05, duration: 0.4, ease: "power2.inOut" }, "-=0.4");
        tl.to({}, { duration: 0.3 });
        tl.to(letters, { y: -50, opacity: 0, stagger: 0.03, duration: 0.6, ease: "back.in(1.7)" });
        tl.to(preloader, { yPercent: -100, duration: 0.8, ease: "power2.inOut" }, "-=0.2");
    });

    // AOS Init
    AOS.init({ duration: 800, once: true });

    // Dark Mode
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const icon = themeToggle.querySelector('i');

    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // html.setAttribute('data-theme', 'dark'); // Uncomment if you want auto-dark
    }

    themeToggle.addEventListener('click', () => {
        if (html.getAttribute('data-theme') === 'light') {
            html.setAttribute('data-theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
            icon.style.color = '#d4af37'; // Gold sun
        } else {
            html.setAttribute('data-theme', 'light');
            icon.classList.replace('fa-sun', 'fa-moon');
            icon.style.color = ''; // Reset color
        }
    });