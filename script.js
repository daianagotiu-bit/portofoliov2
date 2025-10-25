// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optimized scroll-based animations - only animate once
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            // Stop observing after animation completes to prevent re-triggering
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize cards - only observe work cards, not experience cards
document.addEventListener('DOMContentLoaded', () => {
    // Work cards get fade-in animation
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Experience cards and other frost cards are always visible (no animation needed)
    const allFrostCards = document.querySelectorAll('.frost-card');
    allFrostCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'none';
    });
});

// Throttled scroll handler for better performance
let scrollTimeout;
let lastScrollPosition = window.scrollY;

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= (sectionTop - 200)) {
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

// Throttle scroll events to reduce flickering
window.addEventListener('scroll', () => {
    // Only update if scroll position changed significantly
    if (Math.abs(window.scrollY - lastScrollPosition) > 50) {
        lastScrollPosition = window.scrollY;
        
        // Clear previous timeout
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        // Set new timeout
        scrollTimeout = setTimeout(updateActiveNav, 100);
    }
}, { passive: true });

// Mobile: Card expansion toggle on tap - only for experience cards
if (window.innerWidth <= 768) {
    const experienceCards = document.querySelectorAll('.experience-card.frost-card');
    
    experienceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Toggle expanded class on this card
            const isExpanded = this.classList.contains('expanded');
            
            // Close all other experience cards
            experienceCards.forEach(c => c.classList.remove('expanded'));
            
            // Toggle current card
            if (!isExpanded) {
                this.classList.add('expanded');
            }
            
            e.stopPropagation();
        });
    });
    
    // Close cards when tapping outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.experience-card.frost-card')) {
            experienceCards.forEach(card => card.classList.remove('expanded'));
        }
    });
}

// Carousel Functionality
class Carousel {
    constructor(container) {
        this.container = container;
        this.track = container.querySelector('.carousel-track');
        this.items = Array.from(container.querySelectorAll('.carousel-item'));
        this.prevBtn = container.querySelector('.carousel-nav.prev');
        this.nextBtn = container.querySelector('.carousel-nav.next');
        this.indicators = container.querySelectorAll('.carousel-indicator');
        
        this.currentIndex = 0;
        this.visibleCount = 5; // 1 center + 2 on each side
        
        // Create live region for screen reader announcements
        this.liveRegion = document.createElement('div');
        this.liveRegion.setAttribute('aria-live', 'polite');
        this.liveRegion.setAttribute('aria-atomic', 'true');
        this.liveRegion.className = 'sr-only';
        this.container.appendChild(this.liveRegion);
        
        this.init();
    }
    
    init() {
        // Set up ARIA attributes on container
        this.container.setAttribute('role', 'region');
        this.container.setAttribute('aria-roledescription', 'carousel');
        this.container.setAttribute('aria-label', 'Project screenshots');
        
        // Add ARIA labels to navigation buttons
        this.prevBtn.setAttribute('aria-label', 'Previous image');
        this.nextBtn.setAttribute('aria-label', 'Next image');
        
        // Add ARIA labels to indicators
        this.indicators.forEach((indicator, index) => {
            indicator.setAttribute('role', 'button');
            indicator.setAttribute('aria-label', `Go to image ${index + 1}`);
        });
        
        this.updateCarousel();
        
        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Indicator dots
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goTo(index));
        });
        
        // Click on preview images to navigate
        this.items.forEach((item, index) => {
            item.addEventListener('click', () => {
                if (!item.classList.contains('active')) {
                    this.goTo(index);
                }
            });
        });
        
        // Keyboard navigation - only when carousel is focused
        this.container.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.prev();
            }
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.next();
            }
            if (e.key === 'Home') {
                e.preventDefault();
                this.goTo(0);
            }
            if (e.key === 'End') {
                e.preventDefault();
                this.goTo(this.items.length - 1);
            }
        });
    }
    
    updateCarousel() {
        // Clear track
        this.track.innerHTML = '';
        
        // Calculate which items to show (2 before, current, 2 after)
        const startIndex = Math.max(0, this.currentIndex - 2);
        const endIndex = Math.min(this.items.length, this.currentIndex + 3);
        
        // Add items to track
        for (let i = startIndex; i < endIndex; i++) {
            const item = this.items[i].cloneNode(true);
            
            // Remove existing classes
            item.classList.remove('active', 'preview');
            
            // Add appropriate class and ARIA attributes
            if (i === this.currentIndex) {
                item.classList.add('active');
                item.setAttribute('aria-current', 'true');
                item.setAttribute('tabindex', '0');
            } else {
                item.classList.add('preview');
                item.removeAttribute('aria-current');
                item.setAttribute('tabindex', '-1');
            }
            
            // Add role and label
            item.setAttribute('role', 'group');
            item.setAttribute('aria-roledescription', 'slide');
            item.setAttribute('aria-label', `Image ${i + 1} of ${this.items.length}`);
            
            // Add click handler
            item.addEventListener('click', () => {
                if (!item.classList.contains('active')) {
                    this.goTo(i);
                }
            });
            
            this.track.appendChild(item);
        }
        
        // Update indicators
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
            indicator.setAttribute('aria-current', index === this.currentIndex ? 'true' : 'false');
        });
        
        // Update button states and ARIA attributes
        const isAtStart = this.currentIndex === 0;
        const isAtEnd = this.currentIndex === this.items.length - 1;
        
        this.prevBtn.style.opacity = isAtStart ? '0.3' : '1';
        this.prevBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';
        this.prevBtn.setAttribute('aria-disabled', isAtStart ? 'true' : 'false');
        
        this.nextBtn.style.opacity = isAtEnd ? '0.3' : '1';
        this.nextBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
        this.nextBtn.setAttribute('aria-disabled', isAtEnd ? 'true' : 'false');
        
        // Announce to screen readers
        this.announceSlide();
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        }
    }
    
    next() {
        if (this.currentIndex < this.items.length - 1) {
            this.currentIndex++;
            this.updateCarousel();
        }
    }
    
    goTo(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }
    
    announceSlide() {
        this.liveRegion.textContent = `Image ${this.currentIndex + 1} of ${this.items.length}`;
    }
}

// Initialize all carousels on the page
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(container => new Carousel(container));
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.className = 'back-to-top';
backToTopButton.setAttribute('aria-label', 'Back to top');
backToTopButton.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 19V5M5 12l7-7 7 7" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;
document.body.appendChild(backToTopButton);

// Show/hide back to top button based on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show button after scrolling down 300px
    if (scrollTop > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
    
    lastScrollTop = scrollTop;
}, { passive: true });

// Scroll to top when clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Project Folder Tabs
function initProjectTabs() {
    const tabsContainer = document.querySelector('.project-tabs');
    const tabs = document.querySelectorAll('.project-tab');
    const contents = document.querySelectorAll('.project-tab-content');
    
    if (tabs.length === 0) return;
    
    // Set up ARIA attributes for tabs
    if (tabsContainer) {
        tabsContainer.setAttribute('role', 'tablist');
        tabsContainer.setAttribute('aria-label', 'Project workstreams');
    }
    
    tabs.forEach((tab, index) => {
        const tabId = `tab-${index}`;
        const panelId = `panel-${index}`;
        
        // Set up tab ARIA attributes
        tab.setAttribute('role', 'tab');
        tab.setAttribute('id', tabId);
        tab.setAttribute('aria-controls', panelId);
        tab.setAttribute('aria-selected', tab.classList.contains('active') ? 'true' : 'false');
        tab.setAttribute('tabindex', tab.classList.contains('active') ? '0' : '-1');
        
        // Set up panel ARIA attributes
        if (contents[index]) {
            contents[index].setAttribute('role', 'tabpanel');
            contents[index].setAttribute('id', panelId);
            contents[index].setAttribute('aria-labelledby', tabId);
            contents[index].setAttribute('tabindex', '0');
        }
        
        // Click handler
        tab.addEventListener('click', () => {
            activateTab(index);
        });
        
        // Keyboard navigation for tabs
        tab.addEventListener('keydown', (e) => {
            let newIndex = index;
            
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                newIndex = (index + 1) % tabs.length;
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                newIndex = (index - 1 + tabs.length) % tabs.length;
            } else if (e.key === 'Home') {
                e.preventDefault();
                newIndex = 0;
            } else if (e.key === 'End') {
                e.preventDefault();
                newIndex = tabs.length - 1;
            } else {
                return;
            }
            
            activateTab(newIndex);
            tabs[newIndex].focus();
        });
    });
    
    function activateTab(index) {
        // Remove active class from all tabs and contents
        tabs.forEach((t, i) => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
            t.setAttribute('tabindex', '-1');
        });
        contents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        tabs[index].classList.add('active');
        tabs[index].setAttribute('aria-selected', 'true');
        tabs[index].setAttribute('tabindex', '0');
        contents[index].classList.add('active');
        
        // Smooth scroll to top of tabs
        if (tabsContainer) {
            const offset = tabsContainer.offsetTop - 100;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    }
}

// Initialize tabs when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initProjectTabs();
});
