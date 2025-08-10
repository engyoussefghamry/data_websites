/*
* ----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------
*/
(function($) {
    'use strict';

    jQuery(document).ready(function() {


        /*----------------------------------------------------*/
        /* Preloader 
		/*----------------------------------------------------*/

        var prealoaderOption = $(window);
        prealoaderOption.on("load", function() {
            var preloader = jQuery('.spinner');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(350).fadeOut('slow');
        });


        /*----------------------------------------------------*/
        /* MainMenu Bg Change 
		/*----------------------------------------------------*/

        var headertopoption = $(window);
        var headTop = $('.header-top-area');

        headertopoption.on('scroll', function() {
            if (headertopoption.scrollTop() > 50) {
                headTop.addClass('menu-strick-bg');
            } else {
                headTop.removeClass('menu-strick-bg');
            }
        });


        
        /*----------------------------------------------------*/
        /* Work Popup 
        /*----------------------------------------------------*/

        $("a.work-popup").fancybox();


        /*----------------------------------------------------*/
        /* ScrollUp 
		/*----------------------------------------------------*/
        $(window).on("scroll", function() {
            if ($(this).scrollTop() > 250) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
        $('.scroll-up').on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });
		

        /*----------------------------------------------------*/
        /* Portfolio
        /*----------------------------------------------------*/

        $('.portfolio-start').mixItUp();
		
        /*----------------------------------------------------*/
        /* Testimonial 
		/*----------------------------------------------------*/

        $(".testimonial-list").owlCarousel({
            items: 1,
            autoPlay: true,
            navigation: false,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: true,
            autoHeight: true,
        });

        /*----------------------------------------------------*/
        /* Hide Menu 
		/*----------------------------------------------------*/

        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

		

    });

})(jQuery);