(function($) {

	"use strict";


    // Header Fixed
    window.onscroll = function() {myFunction()};
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        function myFunction() {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
    }


   



    // Navbar Animation
     jQuery('#main-nav').stellarNav({
        theme: 'light',
        breakpoint: 991,
        openingSpeed: 200,
        closingDelay: 50,
        position: 'right',
        sticky: false
    });


    // testimonial-carousel
    if($('.testimonial-carousel').length){
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: false,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            center: false,
            // navText: [
            //   '<i class="fa fa-long-arrow-down"></i>',
            //   '<i class="fa fa-long-arrow-up"></i>'
            // ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        })
    }


    // testimonial-Two-carousel
    if($('.testimonial-two-carousel').length){
        $('.testimonial-two-carousel').owlCarousel({
            loop: true,
            margin: 0,
            dots: true,
            nav: false,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            center: false,
            // navText: [
            //   '<i class="fa fa-long-arrow-down"></i>',
            //   '<i class="fa fa-long-arrow-up"></i>'
            // ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }


        // client-carousel
    if($('.client-carousel').length){
        $('.client-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            center: false,
            // animateIn: 'flipInX',
            navText: [
              '<i class="icofont-long-arrow-left"></i>',
              '<i class="icofont-long-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: true
                },
                375:{
                    items:2,
                    center: false
                },
                480:{
                    items:3,
                    center: false
                },
                600: {
                    items: 3,
                    center: false
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        })
    }


    // Post-carousel
    if($('.post-carousel').length){
        $('.post-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: false,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            center: false,
            // animateIn: 'flipInX',
            // navText: [
            //   '<i class="icofont-long-arrow-left"></i>',
            //   '<i class="icofont-long-arrow-right"></i>'
            // ],
            responsive: {
                0: {
                    items: 1,
                    center: true
                },
                375:{
                    items:1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }




    // Isotope Script
    $(window).on('load', function() {
        function sortingGallery() {
            if ($(".my-gallery").length) {
                var $container = $('.gallery-container');
                $container.isotope({
                    filter:'*',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });

                $(".gallery-nav li a").on("click", function() {
                    $('.gallery-nav li .active').removeClass('active');
                    $(this).addClass('active');
                    var selector = $(this).attr('data-filter');
                    $container.isotope({
                        filter:selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });
                    return false;
                });
            }
        }
        sortingGallery();
    }); 
    $('.gallery-container').isotope({
      itemSelector: '.item',
      masonry: {
        gutter: 30
      }
    });


    // Isotope Script for portfolio two
    $(window).on('load', function() {
        function sortingGallery() {
            if ($(".my-gallery").length) {
                var $container = $('.gallery-container');
                $container.isotope({
                    filter:'*',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });

                $(".gallery-nav li a").on("click", function() {
                    $('.gallery-nav li .active').removeClass('active');
                    $(this).addClass('active');
                    var selector = $(this).attr('data-filter');
                    $container.isotope({
                        filter:selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });
                    return false;
                });
            }
        }
        sortingGallery();
    }); 
    $('.gallery-container-two').isotope({
      itemSelector: '.item',
      masonry: {
        gutter: 0
      }
    });





    // Background Image Call Script
    if ($('.background-image').length > 0) {
        $('.background-image').each(function () {
            var src = $(this).attr('data-src');
            $(this).css({
                'background-image': 'url(' + src + ')'
            });
        });
    }


    // CounterUp
    $('.count').countUp();


    // Back To Top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
        });
    }



})(window.jQuery);