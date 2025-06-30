// Hamburger menu toggle functionality
// This script works for both root and subpages if included with the correct relative path.
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-icon');
    var mobileMenu = document.querySelector('.mobile-menu');
    var body = document.body;
    // Dropdown toggling for mobile menu
    if (mobileMenu) {
        mobileMenu.querySelectorAll('.dropdown > a').forEach(function(link) {
            link.addEventListener('click', function(e) {
                var parent = link.parentElement;
                if (parent.classList.contains('dropdown')) {
                    e.preventDefault();
                    // Close other open dropdowns
                    mobileMenu.querySelectorAll('.dropdown.open').forEach(function(openItem) {
                        if (openItem !== parent) openItem.classList.remove('open');
                    });
                    parent.classList.toggle('open');
                }
            });
        });
    }
    function toggleMenu() {
        mobileMenu.classList.toggle('open');
        if (mobileMenu.classList.contains('open')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
            // Close all open dropdowns when menu closes
            if (mobileMenu) {
                mobileMenu.querySelectorAll('.dropdown.open').forEach(function(openItem) {
                    openItem.classList.remove('open');
                });
            }
        }
    }
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', toggleMenu);
        hamburger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
            }
        });
    }
    // Optional: Close menu when clicking outside or on a link
    document.addEventListener('click', function(e) {
        if (mobileMenu && mobileMenu.classList.contains('open') && !mobileMenu.contains(e.target) && e.target !== hamburger) {
            mobileMenu.classList.remove('open');
            body.style.overflow = '';
            // Close all open dropdowns
            mobileMenu.querySelectorAll('.dropdown.open').forEach(function(openItem) {
                openItem.classList.remove('open');
            });
        }
    });
    // Optional: Close menu when a link is clicked
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a:not(.dropdown > a)').forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('open');
                body.style.overflow = '';
                // Close all open dropdowns
                mobileMenu.querySelectorAll('.dropdown.open').forEach(function(openItem) {
                    openItem.classList.remove('open');
                });
            });
        });
    }
});
