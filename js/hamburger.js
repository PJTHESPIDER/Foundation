// Hamburger menu toggle functionality
// This script works for both root and subpages if included with the correct relative path.
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-icon');
    var mobileMenu = document.querySelector('.mobile-menu');
    var body = document.body;
    function toggleMenu() {
        mobileMenu.classList.toggle('open');
        if (mobileMenu.classList.contains('open')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
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
        }
    });
    // Optional: Close menu when a link is clicked
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('open');
                body.style.overflow = '';
            });
        });
    }
    // Add: Enable dropdowns in mobile menu to open on tap/click
    if (mobileMenu) {
        mobileMenu.querySelectorAll('.dropdown > a').forEach(function(parentLink) {
            parentLink.addEventListener('click', function(e) {
                var parentLi = parentLink.parentElement;
                if (parentLi.classList.contains('open')) {
                    parentLi.classList.remove('open');
                } else {
                    // Close any other open dropdowns
                    mobileMenu.querySelectorAll('.dropdown.open').forEach(function(openLi) {
                        openLi.classList.remove('open');
                    });
                    parentLi.classList.add('open');
                }
                // Only prevent default if dropdown-content exists
                if (parentLi.querySelector('.dropdown-content')) {
                    e.preventDefault();
                }
            });
        });
    }
});
