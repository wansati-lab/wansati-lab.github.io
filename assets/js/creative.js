/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggler:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation - Custom sticky behavior
    var navbar = document.getElementById('mainNav');
    var stickyOffset = 100;
    
    function toggleStickyNavbar() {
        if (window.pageYOffset >= stickyOffset) {
            navbar.classList.add('navbar-sticky');
            document.body.style.paddingTop = '70px';
        } else {
            navbar.classList.remove('navbar-sticky');
            document.body.style.paddingTop = '0';
        }
    }
    
    window.addEventListener('scroll', toggleStickyNavbar);

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict