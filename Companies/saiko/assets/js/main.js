(function ($) {
    "use strict";

    $(document).ready(function () {

        /*-------------------------------
            Navbar Fix
          ------------------------------*/
        if ($(window).width() < 991) {
            navbarFix()
        }

        $(".menu-item-has-children a").on("click", function () {
            var element = $(this).parent("li");
            if (element.hasClass("show")) {
                element.removeClass("show");
                element.children("ul").slideUp(500);
            } else {
                element.siblings("li").removeClass('show');
                element.addClass("show");
                element.siblings("li").find("ul").slideUp(500);
                element.children('ul').slideDown(500);
            }
        });

        //Odometer
        if ($(".single-counterup").length) {
            $(".single-counterup").each(function () {
                $(this).isInViewport(function (status) {
                    if (status === "entered") {
                        for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                            var el = document.querySelectorAll('.odometer')[i];
                            el.innerHTML = el.getAttribute("data-odometer-final");
                        }
                    }
                });
            });
        }

        /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();
        
        /*--------------------
           Remove cart item
        ---------------------*/
        $('.remove-cart').on('click', function (e) {
            e.preventDefault();
            $(this).parent().parent().hide(300);
        });

        /*-------------------------
            product + - start here
        -------------------------*/
        $(function () {
            $(".qtybutton").on("click", function () {
                var $button = $(this);
                var oldValue = $button.parent().find("input").val();
                if ($button.text() === "+") {
                    var newVal = parseFloat(oldValue) + 1;
                } else {
                    // Don't allow decrementing below zero
                    if (oldValue > 1) {
                        var newVal = parseFloat(oldValue) - 1;
                    } else {
                        newVal = 1;
                    }
                }
                $button.parent().find("input").val(newVal);
            });
        });

        /*-------------------------
            magnific popup activation
        -------------------------*/
        $('.video-play-btn,.video-popup,.small-vide-play-btn').magnificPopup({
            type: 'video'
        });
        $('.image-popup').magnificPopup({
            type: 'image',
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });

        /*------------------
            back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

        /*----------------------
            Sidebar
        -----------------------*/
        $('.open-sidebar').on('click', function () {
            $('.sidebar-menu-wrap').addClass('sidebar-open');
            $('.side-menu-overlay').addClass('overlay-open');
        });

        $('.side-menu-overlay,.close-btn-02').on('click', function () {
            $('.sidebar-menu-wrap').removeClass('sidebar-open');
            $('.side-menu-overlay').removeClass('overlay-open');
        });

        /*----------------------
            Search Popup
        -----------------------*/
        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('#search-popup');

        $(document).on('click', '#body-overlay', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click', '.border-none', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click', '#search', function (e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });

        /*----------------------
            Circle Progress Bar
        -----------------------*/
        function animateElements() {
            $('.progressbar').each(function () {
                var elementPos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                var percent = $(this).find('.circle').attr('data-percent');
                var percentage = parseInt(percent, 10) / parseInt(100, 10);
                var animate = $(this).data('animate');
                if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                    $(this).data('animate', true);
                    $(this).find('.circle').circleProgress({
                        startAngle: -Math.PI / 2,
                        value: percent / 100,
                        size: 160,
                        thickness: 16,
                        emptyFill: "rgba(223, 223, 223, 0.32)",
                        fill: {
                            color: '#e17141'
                        }
                    }).on('circle-animation-progress', function (event, progress, stepValue) {
                        $(this).find('div').text((stepValue * 100).toFixed(0) + "%");
                    }).stop();
                }
            });
        }

        // Show animated elements
        animateElements();
        $(window).scroll(animateElements);

        

    });

    // Banner Slider One
    var swiper = new Swiper('.banner-slider-one', {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        navigation: {
            nextEl: '.next-icon',
            prevEl: '.prev-icon',
        },
        pagination: {
            el: '.banner-pagination',
            clickable: true,
        },
        autoplay: {
          speeds: 1000,
          delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            1300: {
                slidesPerView: 1,
            },
            1199: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    // Course Slider One
    var swiper = new Swiper('.course-slider-one', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.prev-icon',
            prevEl: '.next-icon',
        },
        // autoplay: {
        //   speeds: 1000,
        //   delay: 4000,
        // },
        speed: 1000,
        breakpoints: {
            1300: {
                slidesPerView: 3,
            },
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
        }
    });

    // Testimonial Slider One
    var swiper = new Swiper('.testimonial-slider-one', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // autoplay: {
        //   speeds: 1000,
        //   delay: 4000,
        // },
        speed: 1000,
        breakpoints: {
            1300: {
                slidesPerView: 3,
            },
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
        }
    });

    // Blog Slider One
    var swiper = new Swiper('.blog-slider-one', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.next-icon',
            prevEl: '.prev-icon',
        },
        speed: 1000,
        breakpoints: {
            1300: {
                slidesPerView: 1,
            },
            1199: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    //define variable for store last scrolltop
    var lastScrollTop = '';

    $(window).on('scroll', function () {

        //back to top show/hide
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

        // Sticky-Memu
        if ($(window).width() > 991) {
            StickyMenu();
        }

        /*----------------------
            Lierar Progress Bar
        -----------------------*/
        if ($(window).scrollTop() > 2000) {
            $('#example-1').progress_fnc();
        };
        
    });

    /*--------------------------------------
        pricing Active
    ---------------------------------------*/
    $(document).on('mouseover','.icon-box-item, .team-single-item, .price-single-item',function() {
        $(this).addClass('active');
        $('.icon-box-item, .team-single-item, .price-single-item').removeClass('active');
        $(this).addClass('active');
    });

    $(window).on('resize', function () {
        /*-------------------------------
            Navbar Fix
        ------------------------------*/
        if ($(window).width() < 991) {
            navbarFix()
        }
    });


    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        setInterval(function () {
            $("#preloader").fadeOut(300);
        }, 700);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

    });

    $.fn.progress_fnc = function(options) {
        var settings = $.extend({
          type: 'start'
        }, options);
    
        var div = $(this);
        var progress = div.find('.cssProgress');
    
        progress.each(function() {
          var self = $(this);
          var progress_bar = self.find('.cssProgress-bar');
          var progress_label = self.find('.cssProgress-label, .cssProgress-label2');
          var progress_value = progress_bar.data('percent');
          var percentage = parseInt(progress_value, 10) + '%';
    
          progress_bar.css({'width': '0%', 'transition': 'none', '-webkit-transition': 'none', '-moz-transition': 'none'});
    
          if(settings.type == 'start') {
    
            progress_bar.animate({
              width: percentage
            }, {
              duration: 2000,
              step: function(x) {
                progress_label.text(Math.round(x) + '%');
              }
            });
    
          } else if(settings.type == 'reset') {
            progress_bar.css('width', '0%');
            progress_label.text('0%');
          }
    
        });
    
    };

    function navbarFix() {
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a, .navbar-area .navbar-nav li.appside-megamenu>a', function (e) {
            e.preventDefault();
        })
    }

    function StickyMenu() {
        /*--------------------------
        sticky menu activation
        ---------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 500) {
            mainMenuTop.addClass('nav-fixed');
        } else {
            mainMenuTop.removeClass('nav-fixed');
        }
        lastScrollTop = st;
    }

})(jQuery);