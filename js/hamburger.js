// Hamburger menu toggle functionality
// This script works for both root and subpages if included with the correct relative path.
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-icon');
    var mobileMenu = document.querySelector('.mobile-menu');
    function toggleMenu() {
        mobileMenu.classList.toggle('open');
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
        }
    });
    // Optional: Close menu when a link is clicked
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('open');
            });
        });
    }
});
