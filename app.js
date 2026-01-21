// FreshPrep - Meal Prep Service Website
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

// Select Plan Function
function selectPlan(planName, price) {
    const planSelect = document.getElementById('subPlan');
    if (planSelect) {
        // Map plan names to select options
        const planMap = {
            'Starter': 'Starter',
            'Balance': 'Balance',
            'Performance': 'Performance'
        };
        planSelect.value = planMap[planName] || 'Balance';
    }
    openModal('subscribeModal');
}

// Handle Subscription Form
function handleSubscription(event) {
    event.preventDefault();

    const name = document.getElementById('subName').value;
    const email = document.getElementById('subEmail').value;
    const plan = document.getElementById('subPlan').value;

    // Get selected dietary preferences
    const checkboxes = document.querySelectorAll('.checkbox-group input:checked');
    const preferences = Array.from(checkboxes).map(cb => cb.value);

    // Log subscription data (in production, this would be sent to a server)
    console.log('New Subscription:', {
        name,
        email,
        plan,
        preferences
    });

    // Close subscribe modal and show success
    closeModal('subscribeModal');

    // Update success message
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.textContent = `Thanks ${name}! You've subscribed to the ${plan} plan. Check your email at ${email} for next steps.`;
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

    // Log newsletter signup (in production, this would be sent to a server)
    console.log('Newsletter Signup:', email);

    // Show success message
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.textContent = `You're subscribed! We'll send weekly recipes and tips to ${email}.`;
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

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Animation on scroll (simple implementation)
function animateOnScroll() {
    const elements = document.querySelectorAll('.blog-card, .plan-card, .feature');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;

        if (isVisible) {
            element.style.opacity = '1';
            element.style.transform = element.classList.contains('plan-card') && element.classList.contains('popular')
                ? 'scale(1.05)'
                : 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial states for animation
    const animatedElements = document.querySelectorAll('.blog-card, .plan-card:not(.popular), .feature');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Popular plan card special handling
    const popularCard = document.querySelector('.plan-card.popular');
    if (popularCard) {
        popularCard.style.opacity = '0';
        popularCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    }

    // Trigger initial animation check
    setTimeout(animateOnScroll, 100);

    // Add scroll listener for animations
    window.addEventListener('scroll', animateOnScroll);
});

// Console welcome message
console.log('%cFreshPrep', 'color: #22c55e; font-size: 24px; font-weight: bold;');
console.log('%cHealthy Eating Made Simple', 'color: #64748b; font-size: 14px;');
console.log('This is a proof of concept website. In production, form data would be sent to a backend server.');
