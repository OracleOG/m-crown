// ===================================
// Smooth Scrolling & Navigation
// ===================================

// ===================================
// HERO ANIMATION CONFIGURATION
// ===================================
// Change this value to switch animation modes:
// "slide" - Slide-Up + Fade (Default)
// "typing" - Typing/Writing Effect
// "words" - Word-by-Word Reveal
const HERO_ANIMATION_MODE = "slide";

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initHeroAnimation();
    initNavigation();
    initScrollAnimations();
    initBackToTop();
    initContactForm();
    initMobileMenu();
    updateFooterYear();
    initScrollIndicator();
});

// ===================================
// Update Footer Year
// ===================================
function updateFooterYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ===================================
// Scroll Indicator
// ===================================
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            // Get the next section after hero
            const heroSection = document.querySelector('.hero');
            const nextSection = heroSection.nextElementSibling;
            
            if (nextSection) {
                nextSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
        
        // Add hover cursor pointer
        scrollIndicator.style.cursor = 'pointer';
    }
}

// ===================================
// Hero Title Animation System
// ===================================

function initHeroAnimation() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // Show everything immediately without animation
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroTitle) heroTitle.style.opacity = '1';
        if (heroSubtitle) heroSubtitle.style.opacity = '1';
        return;
    }
    
    // Get the hero section and set the animation class
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    // Remove all animation classes first
    heroSection.classList.remove('animation-slide', 'animation-typing', 'animation-words');
    
    // Add the selected animation class
    heroSection.classList.add(`animation-${HERO_ANIMATION_MODE}`);
    
    // Run the appropriate animation
    switch(HERO_ANIMATION_MODE) {
        case 'typing':
            runTypingAnimation();
            break;
        case 'words':
            runWordAnimation();
            break;
        case 'slide':
        default:
            runSlideAnimation();
            break;
    }
}

// ===================================
// Mode A: Slide-Up + Fade Animation
// ===================================

function runSlideAnimation() {
    const lines = document.querySelectorAll('.hero-title-line');
    const subtitle = document.querySelector('.hero-subtitle');
    
    // Trigger animations by adding the 'animated' class
    lines.forEach((line) => {
        line.classList.add('animated');
    });
    
    // Animate subtitle after title finishes (600ms after last line starts)
    if (subtitle) {
        subtitle.classList.add('animated');
    }
}

// ===================================
// Mode B: Typing Effect Animation
// ===================================

function runTypingAnimation() {
    const lines = document.querySelectorAll('.hero-title-line');
    const subtitle = document.querySelector('.hero-subtitle');
    const typingSpeed = 50; // milliseconds per character
    
    let currentDelay = 0;
    
    lines.forEach((line, lineIndex) => {
        const text = line.textContent;
        line.textContent = ''; // Clear the text
        line.classList.add('animated', 'typing');
        
        // Type each character
        setTimeout(() => {
            typeText(line, text, typingSpeed, () => {
                // Remove typing class when done
                line.classList.remove('typing');
                
                // Animate subtitle after last line finishes
                if (lineIndex === lines.length - 1 && subtitle) {
                    setTimeout(() => {
                        subtitle.classList.add('animated');
                    }, 200);
                }
            });
        }, currentDelay);
        
        // Calculate delay for next line
        currentDelay += (text.length * typingSpeed) + 300; // 300ms pause between lines
    });
}

function typeText(element, text, speed, callback) {
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    
    type();
}

// ===================================
// Mode C: Word-by-Word Reveal Animation
// ===================================

function runWordAnimation() {
    const lines = document.querySelectorAll('.hero-title-line');
    const subtitle = document.querySelector('.hero-subtitle');
    const wordDelay = 100; // milliseconds between words
    
    let totalWords = 0;
    let currentDelay = 0;
    
    lines.forEach((line, lineIndex) => {
        const text = line.textContent;
        const words = text.split(' ');
        
        // Clear the line and prepare for word-by-word reveal
        line.textContent = '';
        
        words.forEach((word, wordIndex) => {
            // Create a span for each word
            const wordSpan = document.createElement('span');
            wordSpan.className = 'hero-title-word';
            wordSpan.textContent = word;
            line.appendChild(wordSpan);
            
            // Add space after word (except for last word)
            if (wordIndex < words.length - 1) {
                line.appendChild(document.createTextNode(' '));
            }
            
            // Animate the word
            setTimeout(() => {
                wordSpan.classList.add('animated');
            }, currentDelay);
            
            currentDelay += wordDelay;
            totalWords++;
        });
        
        // Add a small pause between lines
        if (lineIndex < lines.length - 1) {
            currentDelay += 200;
        }
    });
    
    // Animate subtitle after all words finish
    if (subtitle) {
        setTimeout(() => {
            subtitle.classList.add('animated');
        }, currentDelay + 300);
    }
}

// ===================================
// Navigation Functionality
// ===================================

function initNavigation() {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Active link highlighting based on scroll position
    function updateActiveLink() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        const headerHeight = header.offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Adjusted offset to account for header height plus a buffer
            if (window.scrollY >= (sectionTop - headerHeight - 50)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    
    // Smooth scroll for all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Immediately update active state
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
    
    // Smooth scroll for all CTA buttons
    const ctaButtons = document.querySelectorAll('a[href^="#"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#' && document.querySelector(targetId)) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                closeMobileMenu();
            }
        });
    });
}

// ===================================
// Mobile Menu
// ===================================

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
}

// ===================================
// Scroll Animations
// ===================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animation for service cards
                if (entry.target.classList.contains('service-card')) {
                    const cards = document.querySelectorAll('.service-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 100);
                    });
                }
                
                // Add staggered animation for why items
                if (entry.target.classList.contains('why-item')) {
                    const items = document.querySelectorAll('.why-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 150);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => observer.observe(card));
    
    // Observe why items
    const whyItems = document.querySelectorAll('.why-item');
    whyItems.forEach(item => observer.observe(item));
}

// ===================================
// Back to Top Button
// ===================================

function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// Contact Form Handling
// ===================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        // Create mailto link (alternative to backend submission)
        const subject = encodeURIComponent(`New Contact Request from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone || 'Not provided'}\n\n` +
            `Message:\n${message}`
        );
        
        const mailtoLink = `mailto:mcrownnigerialtd@gmail.com?subject=${subject}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showNotification('Thank you! Your message is being prepared in your email client.');
        
        // Reset form
        this.reset();
    });
}

// ===================================
// Notification System
// ===================================

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#d4af37' : '#e74c3c'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// ===================================
// Performance Optimizations
// ===================================

// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Lazy loading for images (if you add images later)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===================================
// Accessibility Enhancements
// ===================================

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

// Focus trap for mobile menu when open
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// ===================================
// Analytics & Tracking (Optional)
// ===================================

// Track CTA button clicks
function trackCTAClick(buttonName) {
    console.log(`CTA clicked: ${buttonName}`);
    // Add your analytics tracking code here
    // Example: gtag('event', 'click', { button_name: buttonName });
}

// Add tracking to all CTA buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        trackCTAClick(buttonText);
    });
});

// ===================================
// Console Branding
// ===================================

console.log(
    '%c🏆 M-Crown Nigeria LTD',
    'font-size: 20px; font-weight: bold; color: #d4af37;'
);
console.log(
    '%cDriving Brands. Creating Experiences. Growing Customers.',
    'font-size: 14px; color: #0a1128;'
);
console.log(
    '%c📧 mcrownnigerialtd@gmail.com | 📱 +234 706 266 6662',
    'font-size: 12px; color: #666;'
);
