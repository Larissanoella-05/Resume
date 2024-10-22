const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

window.addEventListener('scroll', () => {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            link.classList.add('active'); // Add active class to the current link
        } else {
            link.classList.remove('active'); // Remove active class from other links
        }
    });
});