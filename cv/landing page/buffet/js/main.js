

(function($) {

    "use strict";

    // sticky menu
    var header = $('.menu-sticky'),
        win = $(window);

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 80) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }
    });

    // scrollTop init
    var totop = $('#toTop');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });

    // totop scroller
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });

    //Mobile menu  
    $('.mobile-menu-icon').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('.menu-bar .mainmenu').slideToggle();
    });

    // Banner Slider
    if ($('.banner-slider').length) {
        // Banner Slider
        $('.banner-slider').owlCarousel({
            loop:true,
            items:1,
            margin:30,
            autoplay:false,
            slideSpeed : 300,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    dots:false,
                },
                768:{
                    dots:true,
                },
            }
        })
    }

    // Testimonial Slider
    if ($('.testi-slider').length) {
        // Testimonial Slider
        $('.testi-slider').owlCarousel({
            loop:true,
            items:1,
            margin:20,
            autoplay:true,
            slideSpeed : 300,
            nav:false,
            dots:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    dots:false,
                },
                768:{
                    items:1,
                    dots:true,
                },
                992:{
                    items:1,
                    dots:true,
                },
            }
        })
    }

    // Partner Carousel
    var partnerCarousel = $('.partner-carousel');
    if (partnerCarousel.length) {
        partnerCarousel.owlCarousel({
            items:5,
            autoplay: true,
            loop: true,
            margin: 75,
            navSpeed: 1500,
            dots: false,
            responsive:{
                0:{
                    items:2,
                },
                576:{
                    items:3,
                },
                768:{
                    items:4,
                },
                992:{
                    items:5,
                },
            }
        });
    }

    // Blog Slider
    if ($('.blog-slider').length) {
        // Destination Slider
        $('.blog-slider').owlCarousel({
            loop:true,
            items:2,
            margin:20,
            autoplay:false,
            slideSpeed : 300,
            nav:false,
            dots:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:1,
                },
                992:{
                    items:2,
                },
            }
        })
    }

    // Post Slider
    if ($(".related_post_slide").length) {
        $(".related_post_slide").owlCarousel({
            items: 2,
            loop: true,
            dots: false,
            autoplay: true,
            singleItem: true,
            smartSpeed: 500,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
            }
        });
    }

	
})(jQuery);
