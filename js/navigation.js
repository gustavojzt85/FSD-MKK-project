(function ($) {
    'use strict';

// :: 1.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#academyNav').classyNav();
    }

// :: 2.0 prevent default a click
    $('a[href="#"]').click(function ($) {
        $.preventDefault()
    });

    
// :: 3.0 Sticky Active Code
    if ($.fn.sticky) {
        $(".academy-main-menu").sticky({
            topSpacing: 0
        });
    }




smoothScroll.init({
    speed: 1000, 
    offset: 100, 

});



$(window).scroll(function () {

    var nav = $('.header-area');
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        nav.addClass("fondo-menu");
    } else {
        nav.removeClass("fondo-menu");
    }
});

   
})(jQuery);
