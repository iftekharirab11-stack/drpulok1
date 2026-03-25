// ==================== script.js ====================
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Contact Form WhatsApp Redirect
    const contactForm = document.getElementById('appointmentForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !phone || !message) {
                alert('Please fill in all fields before submitting.');
                return;
            }
            
            // WhatsApp number (use international format without '+' or '00')
            const whatsappNumber = '8801712345678';  // +880 1712-345678
            const baseMessage = "Hello Doctor I want an appointment";
            const userDetails = `Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
            const fullText = `${baseMessage}%0A%0A${userDetails}`;
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${fullText}`;
            
            window.open(whatsappURL, '_blank');
            
            // Optional: clear form or show success message
            // contactForm.reset();
        });
    }

    // Smooth scroll for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll reveal animation for cards
    const revealElements = document.querySelectorAll('.info-card, .service-card, .testimonial-card, .qual-card, .cert-item, .contact-info-card, .contact-form-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
