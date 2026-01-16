// Smooth Scrolling for navigation links
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Back to top button
const backToTop = document.createElement('button');
backToTop.textContent = '↑ Top';
backToTop.id = 'backToTop';
document.body.appendChild(backToTop);

backToTop.style.position = 'fixed';
backToTop.style.bottom = '30px';
backToTop.style.right = '30px';
backToTop.style.padding = '0.5rem 1rem';
backToTop.style.background = '#007bff';
backToTop.style.color = '#fff';
backToTop.style.border = 'none';
backToTop.style.borderRadius = '5px';
backToTop.style.cursor = 'pointer';
backToTop.style.display = 'none';
backToTop.style.zIndex = '1000';

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Scroll to top on click
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Project hover effects (fade description)
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'scale(1.02)';
        project.style.transition = '0.3s';
    });
    project.addEventListener('mouseleave', () => {
        project.style.transform = 'scale(1)';
    });
});

// Optional: Mobile menu toggle
const nav = document.querySelector('header nav ul');
const logo = document.querySelector('.logo');
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '&#9776;'; // hamburger icon
logo.parentElement.insertBefore(menuToggle, logo.nextSibling);

menuToggle.style.fontSize = '1.5rem';
menuToggle.style.color = '#fff';
menuToggle.style.cursor = 'pointer';
menuToggle.style.display = 'none'; // show only on mobile

// Responsive menu toggle
menuToggle.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
        nav.style.flexDirection = 'column';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
    }
});

// Make toggle visible on small screens
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        menuToggle.style.display = 'block';
        nav.style.display = 'none';
    } else {
        menuToggle.style.display = 'none';
        nav.style.display = 'flex';
        nav.style.flexDirection = 'row';
    }
});

// Trigger resize event on load
window.dispatchEvent(new Event('resize'));
