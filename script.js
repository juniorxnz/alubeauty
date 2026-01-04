// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('custom-navbar').shadowRoot.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled-nav');
    } else {
        navbar.classList.remove('scrolled-nav');
    }
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Agendamento enviado com sucesso! Entraremos em contato para confirmar.');
            form.reset();
        });
    });
});

// Service filtering functionality
function filterServices(category) {
    const services = document.querySelectorAll('custom-service-card');
    services.forEach(service => {
        if (category === 'all' || service.getAttribute('data-category') === category) {
            service.style.display = 'block';
        } else {
            service.style.display = 'none';
        }
    });
}