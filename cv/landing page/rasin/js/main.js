


;(function ($) {
    "use strict";

    var sliderActive = $('.slider-active'),
        mobileMenuIcon = $('.mobile-menu-icon'),
        progressPie = $('.ras-progress-pie'),
        counterActive = $('.ras-counter-number'),
        sliderOneCol = $('.ras-slider-one-col'),
        videoLightbox = $('.ras-video-lightbox'),
        recentSlider = $('.recentSlider'),
        select = $('select'),
        sliderThreeCol = $('.ras-slider-three-col'),
        sliderFourCol = $('.ras-slider-four-col'),
        blog2Slider  = $('.ras-blog-2-slider'),
        totop = $('#toTop'),
        win = $(window);

    win.on('load', function () {
        $(".ras-loader").delay(1500).fadeOut("slow");
    });

    // scrollTop init
    win.on('scroll', function () {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });


    if (select.length) {
        select.niceSelect();
    }

    // totop scroller
    totop.on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });

    if (videoLightbox.length) {
        videoLightbox.magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    if (mobileMenuIcon.length) {
        mobileMenuIcon.on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('open');
            $('.ras-main-menu .nav-menu').slideToggle();
        });

    }

    $('.menu-bar li.menu-item-has-children').on('click', function (e) {

        e.stopPropagation();

        var thisElement = $(e.target);

        if (!$(thisElement).hasClass('menu-item-has-children')) {
            return;
        }

        thisElement.find('> .sub-menu > li').fadeToggle();
        thisElement.find('> .sub-menu').slideToggle();
        thisElement.toggleClass('menu-expanded');
    });

    if (progressPie.length) {
        progressPie.appear(function () {

            progressPie.asPieProgress({
                namespace: "pieProgress",
                classes: {
                    svg: "ras-progress-pie-svg",
                    number: "ras-progress-pie-number",
                    content: "ras-progress-pie-content",
                },
                min: 0,
                max: 100,
                speed: 25,
                barsize: '2',
                trackcolor: '#ccc',
                easing: 'ease',
            });
            progressPie.asPieProgress("start");
        });
    }

    if (counterActive.length) {
        counterActive.counterUp({
            delay: 10,
            time: 1000
        });
    }

    if (sliderActive.length) {
        sliderActive.slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            arrows: true,
            autoplay: false,
            fade: true
        });
    }

    if (recentSlider.length) {
        recentSlider.slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            arrows: false,
            autoplay: true,
        });
    }

    if (sliderOneCol.length) {
        sliderOneCol.slick({
            speed: 800,
            slidesToShow: 1,
            adaptiveHeight: true,
            arrows: true,
            fade: true,
            slidesToScroll: 1,
            autoplay: true,
        });
    }

    if (sliderThreeCol.length) {
        sliderThreeCol.slick({
            speed: 800,
            slidesToShow: 3,
            adaptiveHeight: true,
            arrows: true,
            slidesToScroll: 1,
            centerMode: true,
            autoplay: true,

            responsive: [
                {
                    breakpoint: 992,
                    arrows: false,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    arrows: false,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    if (blog2Slider.length) {
        blog2Slider.slick({
            speed: 800,
            slidesToShow: 3,
            adaptiveHeight: true,
            arrows:true,
            dots:true,
            slidesToScroll: 3,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 992,
                    arrows: false,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 768,
                    arrows: false,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    if (sliderFourCol.length) {
        sliderFourCol.slick({
            speed: 800,
            slidesToShow: 4,
            adaptiveHeight: true,
            arrows: false,
            dots: true,
            slidesToScroll: 4,
            centerMode: false,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 992,
                    arrows: false,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    arrows: false,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    new WOW().init();

})(jQuery);



