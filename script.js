document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };

    // Initial animation check
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Contact form functionality
    const contactBtn = document.querySelector('.contact-btn');
    const contactForm = document.querySelector('.contact-form');
    const closeFormBtn = document.querySelector('.close-form');

    contactBtn.addEventListener('click', () => {
        contactForm.classList.add('show');
    });

    closeFormBtn.addEventListener('click', () => {
        contactForm.classList.remove('show');
    });

    // Form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.classList.remove('show');
        form.reset();
    });
});