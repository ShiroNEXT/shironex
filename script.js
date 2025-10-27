// ShiroNEX Navigation Script
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const menuBtn = document.querySelector('.menu-btn');
    const userMenu = document.querySelector('.user-menu');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            // Toggle mobile menu (you can expand this with actual menu functionality)
            console.log('Menu clicked');
            // Add mobile menu functionality here if needed
        });
    }

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
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

    // Add hover effects to cards
    const cards = document.querySelectorAll('.card, .content-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll('.back-btn, .footer-icon');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key to go back to home
        if (e.key === 'Escape') {
            window.location.href = 'index.html';
        }
        
        // Number keys for quick navigation (1-6)
        const keyMap = {
            '1': 'operating-system.html',
            '2': 'pc-laptop.html',
            '3': 'music.html',
            '4': 'cloud-storage.html',
            '5': 'hardware.html',
            '6': 'game-engine.html'
        };
        
        if (keyMap[e.key]) {
            window.location.href = keyMap[e.key];
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all content cards for scroll animations
    const animatedElements = document.querySelectorAll('.content-card, .card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add search functionality (basic implementation)
    function addSearchFunctionality() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search...';
        searchInput.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px 15px;
            border: none;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            backdrop-filter: blur(10px);
            z-index: 1000;
            width: 200px;
            outline: none;
        `;
        
        document.body.appendChild(searchInput);
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const cards = document.querySelectorAll('.content-card, .card');
            
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(searchTerm) || searchTerm === '') {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                } else {
                    card.style.opacity = '0.3';
                }
            });
        });
    }

    // Uncomment the line below to enable search functionality
    // addSearchFunctionality();

    // Footer hide/show functionality
    const hideFooterBtn = document.getElementById('hideFooterBtn');
    const showFooterBtn = document.getElementById('showFooterBtn');
    const footer = document.querySelector('footer');
    const floatingMenu = document.getElementById('floatingMenu');

    if (hideFooterBtn && showFooterBtn && footer && floatingMenu) {
        hideFooterBtn.addEventListener('click', function() {
            footer.classList.add('hidden');
            floatingMenu.classList.add('show');
            hideFooterBtn.classList.add('active');
        });

        showFooterBtn.addEventListener('click', function() {
            footer.classList.remove('hidden');
            floatingMenu.classList.remove('show');
            hideFooterBtn.classList.remove('active');
        });

        // Auto-hide footer on index page
        if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || window.location.pathname === '') {
            // Add a small delay to ensure the page is fully loaded
            setTimeout(() => {
                footer.classList.add('hidden');
                floatingMenu.classList.add('show');
                hideFooterBtn.classList.add('active');
            }, 500);
        }
    }

    console.log('ShiroNEX Navigation Script Loaded');
});
