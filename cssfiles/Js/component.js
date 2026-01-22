// component.js - Loads shared components

document.addEventListener('DOMContentLoaded', function() {
    // Load Navigation
    loadNavbar();
    
    // Load Footer
    loadFooter();
    
    // Set active nav link after components are loaded
    setTimeout(setActiveNavLink, 100);
    
    // Mobile menu toggle
    setupMobileMenu();
});

function loadNavbar() {
    const container = document.getElementById('navbar-container');
    if (!container) return;
    
    container.innerHTML = `
        <nav style="background: white; padding: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.05); position: sticky; top: 0; z-index: 100;">
            <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
                <a href="index.html" style="font-size: 1.5rem; font-weight: 700; color: #2575fc; text-decoration: none;">Sodetso</a>
                <div id="navMenu" style="display: flex; gap: 30px; align-items: center;">
                    <a href="index.html" class="nav-link" style="color: #2c3e50; text-decoration: none; font-weight: 500;">Home</a>
                    <a href="solutions.html" class="nav-link" style="color: #2c3e50; text-decoration: none; font-weight: 500;">Solutions</a>
                    <a href="contact.html" class="nav-link" style="color: #2c3e50; text-decoration: none; font-weight: 500;">Contact</a>
                </div>
                <button id="hamburger" style="display: none; background: none; border: none; cursor: pointer; font-size: 1.5rem;">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </nav>
    `;
}

function loadFooter() {
    const container = document.getElementById('footer-container');
    if (!container) return;
    
    container.innerHTML = `
        <footer style="background: #2c3e50; color: white; padding: 60px 0 20px; margin-top: 80px;">
            <div class="container">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-bottom: 40px;">
                    <div>
                        <h4 style="margin-bottom: 20px; font-weight: 700;">Sodetso</h4>
                        <p style="opacity: 0.8; line-height: 1.6;">Leading provider of modern banking technology solutions.</p>
                    </div>
                    <div>
                        <h4 style="margin-bottom: 20px; font-weight: 700;">Solutions</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li><a href="core-banking.html" style="color: white; text-decoration: none; opacity: 0.8;">Core Banking</a></li>
                            <li><a href="mobile-banking.html" style="color: white; text-decoration: none; opacity: 0.8;">Mobile Banking</a></li>
                            <li><a href="payments.html" style="color: white; text-decoration: none; opacity: 0.8;">Payments</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style="margin-bottom: 20px; font-weight: 700;">Company</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li><a href="index.html" style="color: white; text-decoration: none; opacity: 0.8;">Home</a></li>
                            <li><a href="contact.html" style="color: white; text-decoration: none; opacity: 0.8;">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 40px 0;">
                <div style="text-align: center; opacity: 0.8;">
                    <p>&copy; 2026 Sodetso Banking Technology. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (!hamburger || !navMenu) return;
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Setup dropdowns for mobile
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        if (link) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                    
                    // Close other dropdowns
                    dropdowns.forEach(other => {
                        if (other !== dropdown) {
                            other.classList.remove('active');
                        }
                    });
                }
            });
        }
    });
    
    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                
                // Close all dropdowns
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    });
}

// Handle page transitions
window.addEventListener('beforeunload', function() {
    // Add loading indicator if needed
    document.body.style.opacity = '0.5';
});
