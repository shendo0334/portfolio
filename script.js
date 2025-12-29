// Role rotation animation
const roles = ['Python Developer', 'AI Enthusiast', 'Tech Enthusiast'];
let currentRoleIndex = 0;
const roleElement = document.getElementById('role');

function changeRole() {
    roleElement.style.opacity = '0';
    
    setTimeout(() => {
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        roleElement.textContent = roles[currentRoleIndex];
        roleElement.style.opacity = '1';
    }, 500);
}

setInterval(changeRole, 3000);

// Navigation
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links and pages
        navLinks.forEach(l => l.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Show corresponding page
        const pageName = link.getAttribute('data-page');
        document.getElementById(pageName).classList.add('active');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Scroll to top button
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Form submission
document.querySelector('.contact-form button').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
});
// ===== LIGHTBOX FUNCTIONS (GLOBAL) =====
function openLightbox(img, caption) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");

    if (!lightbox || !lightboxImg || !lightboxCaption) {
        console.error("Lightbox elements not found");
        return;
    }

    lightboxImg.src = img.src;
    lightboxCaption.textContent = caption;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) lightbox.style.display = "none";
}

// ESC key close
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
});
