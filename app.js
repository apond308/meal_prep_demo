// Meal Prep Made Simple - Jennifer Pond
// JavaScript for interactivity

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
});

// Handle eBook Download Form
function handleEbookDownload(event) {
    event.preventDefault();

    const name = document.getElementById('ebookName').value;
    const email = document.getElementById('ebookEmail').value;
    const challenge = document.getElementById('ebookChallenge').value;

    // Log signup data (in production, this would be sent to an email service)
    console.log('New eBook Download Request:', {
        name,
        email,
        challenge,
        timestamp: new Date().toISOString()
    });

    // Close ebook modal and show success
    closeModal('ebookModal');

    // Update success message
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.textContent = `Thanks, ${name}! Check your inbox at ${email} for your free guide. Let's make meal prep simple!`;
    }

    openModal('successModal');

    // Reset form
    event.target.reset();
}

// Handle Newsletter Subscription
function handleNewsletter(event) {
    event.preventDefault();

    const emailInput = event.target.querySelector('input[type="email"]');
    const email = emailInput.value;

    // Log newsletter signup (in production, this would be sent to an email service)
    console.log('Newsletter Signup:', {
        email,
        timestamp: new Date().toISOString()
    });

    // Show success message
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.textContent = `You're subscribed! Weekly meal prep tips are on their way to ${email}.`;
    }

    openModal('successModal');

    // Reset form
    emailInput.value = '';
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');

        // Skip if it's just "#" or if there's an onclick handler
        if (targetId === '#' || this.hasAttribute('onclick')) {
            return;
        }

        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();

            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }

            // Smooth scroll to target
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar shadow on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.system-card, .block-card, .blog-card, .philosophy-card, .learn-item');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 80;

        if (isVisible && !element.classList.contains('animated')) {
            element.classList.add('animated');
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial states for animation
    const animatedElements = document.querySelectorAll('.system-card, .block-card, .blog-card, .philosophy-card, .learn-item');
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
    });

    // Trigger initial animation check
    setTimeout(animateOnScroll, 100);

    // Add scroll listener for animations
    window.addEventListener('scroll', animateOnScroll);
});

// Console welcome message
console.log('%cMeal Prep Made Simple', 'color: #d97706; font-size: 20px; font-weight: bold;');
console.log('%cby Jennifer Pond, M.S., CNS', 'color: #1e3a5f; font-size: 14px;');
console.log('%cNourishing meals without the stress', 'color: #6b7280; font-size: 12px; font-style: italic;');
console.log('');
console.log('This is a proof of concept website. In production, form submissions would connect to an email marketing service.');
