// Hamburger menu toggle functionality
// This script works for both root and subpages if included with the correct relative path.
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-icon');
    var closeButton = document.querySelector('.mobile-menu-close');
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
    function closeMenu() {
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            body.style.overflow = '';
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
    if (closeButton) {
        closeButton.addEventListener('click', closeMenu);
    }
    // Optional: Close menu when clicking outside or on a link
    document.addEventListener('click', function(e) {
        if (mobileMenu && mobileMenu.classList.contains('open') && !mobileMenu.contains(e.target) && e.target !== hamburger && !hamburger.contains(e.target)) {
            mobileMenu.classList.remove('open');
            body.style.overflow = '';
        }
    });
    // Optional: Close menu when a link is clicked
    if (mobileMenu) {
        var links = mobileMenu.querySelectorAll('a');
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('open');
                body.style.overflow = '';
            });
        });
    }
    // Add: Dropdown arrow click for mobile menu
    if (mobileMenu) {
        mobileMenu.querySelectorAll('.dropdown > a').forEach(function(parentLink) {
            // Create arrow span
            var arrow = document.createElement('span');
            arrow.className = 'dropdown-arrow';
            arrow.setAttribute('tabindex', '0');
            arrow.setAttribute('aria-label', 'Toggle dropdown');
            arrow.innerHTML = '&#9660;'; // ▼
            parentLink.parentNode.insertBefore(arrow, parentLink.nextSibling);
            arrow.addEventListener('click', function(e) {
                var parentLi = parentLink.parentElement;
                if (parentLi.classList.contains('open')) {
                    parentLi.classList.remove('open');
                } else {
                    // Close other open dropdowns
                    mobileMenu.querySelectorAll('.dropdown.open').forEach(function(openLi) {
                        openLi.classList.remove('open');
                    });
                    parentLi.classList.add('open');
                }
                e.stopPropagation();
            });
            arrow.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    arrow.click();
                }
            });
        });
    }
});
