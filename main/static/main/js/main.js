// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').style.backgroundColor = '#ffffff';
        document.querySelector('.navbar').style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        document.querySelector('.navbar').style.backgroundColor = 'transparent';
        document.querySelector('.navbar').style.boxShadow = 'none';
    }
});

// Form submission handling
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
}); 