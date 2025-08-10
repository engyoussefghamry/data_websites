(function ($) {
    "use strict";
    $(window).on('load', function () {
        $('.preloder-overlay').fadeOut(1000);
    });

    // lightcase 
    // $('a[data-rel^=lightcase]').lightcase();

    $(document).ready(function () {

        //Header
        var fixed_top = $("header");
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 200) {
                fixed_top.addClass("header-fixed animate__animated animate__fadeInDown");
            } else {
                fixed_top.removeClass("header-fixed animate__animated animate__fadeInDown");
            }
        });

        //=========================================

        var sections = $('section'),
            nav = $('.header'),
            nav_height = nav.outerHeight();

        $(window).on('scroll', function () {
            var cur_pos = $(this).scrollTop();

            sections.each(function () {
                var top = $(this).offset().top - nav_height,
                    bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                    nav.find('.nav-link').removeClass('active');
                    sections.removeClass('active');

                    $(this).addClass('active');
                    nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                }
            });
        });

        nav.find('.nav-link').on('click', function () {
            var $el = $(this),
                id = $el.attr('href');

            $('html, body').animate({
                scrollTop: $(id).offset().top - nav_height + 2
            }, 500);

            return false;
        });


        // Demo
        $('.demo__toggole').on('click', function () {
            $('.demo').toggleClass('open');
        })



        //=======================

        //header mobile menu
        $(".nav-link").click(function () {
            $(".navbar-collapse").removeClass("show");
            $(".navbar-toggler").addClass("collapsed");
        });
        // $(".nav-link").click(function () {
        //     $(".navbar-toggler").addClass("collapsed");
        // });

        // scroll up start here
        $(function () {
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 300) {
                    $('.scrollToTop').css({
                        'bottom': '2%',
                        'opacity': '1',
                        'transition': 'all .5s ease'
                    });
                } else {
                    $('.scrollToTop').css({
                        'bottom': '-30%',
                        'opacity': '0',
                        'transition': 'all .5s ease'
                    })
                }
            });

            //Click event to scroll to top
            $('a.scrollToTop').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        });



        //wow js initialization
        new WOW().init();

    });

    $(window).on('load', function () {

        // init Isotope
        var $grid = $('.portfolio__grid').isotope({
            itemSelector: '.portfolio__item',
            layoutMode: 'fitRows',
        });


        // filter functions
        var filterFns = {
            // show if name ends with -ium
            ium: function () {
                var name = $(this).find('.name').text();
                return name.match(/ium$/);
            }
        };
        // bind filter button click
        $('.portfolio__buttongroup').on('click', '.filter-btn', function () {
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
            $grid.isotope({
                filter: filterValue
            });
        });
        // change is-checked class on buttons
        $('.portfolio__buttongroup').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', '.filter-btn', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
    });

    $(window).on('load', function () {


        // init Isotope
        var $grid = $('.portfolio-grid2').isotope({
            itemSelector: '.portfolio__item',
            layoutMode: 'masonry',
            // masonry: {
            //     columnWidth: 110,
            // },
        });

        // filter functions
        var filterFns = {
            // show if name ends with -ium
            ium: function () {
                var name = $(this).find('.name').text();
                return name.match(/ium$/);
            }
        };
        // bind filter button click
        $('.portfolio__buttongroup').on('click', '.filter-btn', function () {
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
            $grid.isotope({
                filter: filterValue
            });
        });
        // change is-checked class on buttons
        $('.portfolio__buttongroup').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', '.filter-btn', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });


    });

    //counter up
    $(window).on('scroll', function () {
        $('.counter').data('countToOptions', {
            formatter: function (value, options) {
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
        });
        // start all the timers
        $('.counter').each(count);

        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    });


    //testimonial slider
    var swiper = new Swiper(".testimonial__slider", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".testimonial__slider-next",
            prevEl: ".testimonial__slider-prev",
        },
    });
    //testimonial-slider 2
    var swiper = new Swiper(".testimonial__slider2", {
        slidesPerView: 1,
        spaceBetween: 24,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".testimonial__slider-pagination",
            clickable: true,
        },
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    //Service slider
    var swiper = new Swiper(".service__slider", {
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
            el: ".service__slider-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });










    //contact form js
    $(function () {
        var form = $('#contact-form');
        var formMessages = $('.form-message');
        $(form).submit(function (e) {
            e.preventDefault();
            var formData = $(form).serialize();
            $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData
                })
                .done(function (response) {
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');
                    $(formMessages).text(response);
                    $('#contact-form input, #contact-form textarea').val('');
                })
                .fail(function (data) {
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
        });
    });

}(jQuery));