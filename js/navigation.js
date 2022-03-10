(function ($) {
    'use strict';

    var browserWindow = $(window);

  // :: 2.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#academyNav').classyNav();
    }

 // :: 5.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // :: 6.0 CouterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 7.0 prevent default a click
    $('a[href="#"]').click(function ($) {
        $.preventDefault()
    });

    // :: 8.0 wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }
    
    // :: 9.0 Sticky Active Code
    if ($.fn.sticky) {
        $(".academy-main-menu").sticky({
            topSpacing: 0
        });
    }

})(jQuery);