(function ($) {
    "use strict";

    $(document).ready(function () {
        /*------------------
        Select Price
        ------------------*/
        let selectPrice = $(".select-price");
        if (selectPrice.length) {
            selectPrice.niceSelect();
        }
        /*------------------
        Video Popup
        ------------------*/
        var videoPlay = $(".video-play");
        if (videoPlay.length) {
            videoPlay.magnificPopup({
                items: {
                    src: "https://www.youtube.com/watch?v=kshIWIc15yg",
                },
                type: "iframe",
                iframe: {
                    markup:
                        '<div class="mfp-iframe-scaler">' +
                        '<div class="mfp-close"></div>' +
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                        "</div>",
                    patterns: {
                        youtube: {
                            index: "youtube.com/",
                            id: "v=",
                            src: "//www.youtube.com/embed/kshIWIc15yg",
                        },
                    },
                    srcAction: "iframe_src",
                },
            });
        }
        var videoButton = $(".bttn-video");
        if (videoButton.length) {
            videoButton.magnificPopup({
                items: {
                    src: "https://www.youtube.com/watch?v=kshIWIc15yg",
                },
                type: "iframe",
                iframe: {
                    markup:
                        '<div class="mfp-iframe-scaler">' +
                        '<div class="mfp-close"></div>' +
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                        "</div>",
                    patterns: {
                        youtube: {
                            index: "youtube.com/",
                            id: "v=",
                            src: "//www.youtube.com/embed/kshIWIc15yg",
                        },
                    },
                    srcAction: "iframe_src",
                },
            });
        }

        /*------------------
        Blog Post Slider
        ------------------*/
        let postSlider = $(".blog-post__slider");
        if (postSlider.length) {
            postSlider.slick({
                mobileFirst: true,
                prevArrow:
                    '<button type="button" class="slick-prev"><i class="las la-arrow-left"></i></button>',
                nextArrow:
                    '<button type="button" class="slick-next"><i class="las la-arrow-right"></i></button>',
            });
        }
        /*------------------
        FeedBack Slider
        ------------------*/
        let feedback = $(".feedback-slider");
        if (feedback.length) {
            feedback.slick({
                mobileFirst: true,
                arrows: false,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            arrows: true,
                            prevArrow:
                                '<button type="button" class="slick-prev"><i class="las la-arrow-left"></i> Previous</button>',
                            nextArrow:
                                '<button type="button" class="slick-next">Next <i class="las la-arrow-right"></i></button>',
                            autoplay: false,
                        },
                    },
                ],
            });
        }
        /*------------------
        Testimonial Slider
        ------------------*/
        let testimonialSlider = $(".testimonials-slider");
        if (testimonialSlider.length) {
            testimonialSlider.slick({
                mobileFirst: true,
                prevArrow:
                    '<button type="button" class="slick-prev"><i class="las la-arrow-left"></i></button>',
                nextArrow:
                    '<button type="button" class="slick-next"><i class="las la-arrow-right"></i></button>',
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                ],
            });
        }
        /*------------------
        Award Slider
        ------------------*/
        let awardSlider = $(".award-slider");
        if (awardSlider.length) {
            awardSlider.slick({
                mobileFirst: true,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                ],
            });
        }
        /*------------------
        Project Slider
        ------------------*/
        let projectSlider = $(".project-slider");
        if (projectSlider.length) {
            projectSlider.slick({
                mobileFirst: true,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 4,
                        },
                    },
                    {
                        breakpoint: 1359,
                        settings: {
                            slidesToShow: 5,
                        },
                    },
                ],
            });
        }
        /*------------------
        Service Slider
        ------------------*/
        let serviceSlider = $(".service-slider");
        if (serviceSlider.length) {
            serviceSlider.slick({
                mobileFirst: true,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 3,
                            arrows: true,
                            prevArrow:
                                '<button type="button" class="slick-prev"><i class="las la-arrow-left"></i></button>',
                            nextArrow:
                                '<button type="button" class="slick-next"><i class="las la-arrow-right"></i></button>',
                        },
                    },
                ],
            });
        }
        /*------------------
        Hero Slider
        ------------------*/
        let heroSlider = $(".hero-slider");
        if (heroSlider.length) {
            heroSlider.owlCarousel({
                items: 1,
                dots: false,
                loop: true,
                autoplay: true,
                autoplayHoverPause: true,
                smartSpeed: 3000,
            });
        }
        /*------------------
        Hero Slider 2
        ------------------*/
        let heroSlider2 = $(".hero-slider-2");
        if (heroSlider2.length) {
            heroSlider2.owlCarousel({
                items: 1,
                dots: false,
                loop: true,
                autoplay: true,
                autoplayHoverPause: true,
                smartSpeed: 3000,
            });
        }
        /*------------------
        Hamburger Menu Toggle
        ------------------*/
        let mobileMenu = $(".zol-menu-toggle");
        let menuIs = $(".zol-menu");
        let menuOpen = $(".zol-menu-open");
        let menuClose = $(".zol-menu-close");
        menuOpen.on("click", function () {
            $(this).addClass("d-none");
            menuClose.addClass("active");
            menuIs.slideToggle();
        });
        menuClose.on("click", function () {
            menuIs.slideToggle();
            $(this).removeClass("active");
            menuOpen.removeClass("d-none");
        });
    });

    /*------------------
        Menu
    ------------------*/
    let menuSub = $(".zol-menu__sub");
    let menuHasSub = $(".zol-menu__has-sub");
    let menuLing = $(".zol-menu__link");
    $(".zol-menu__has-sub > .zol-menu__link").on("click", function (e) {
        e.preventDefault();
    });
    $(".zol-menu__has-sub-2 > .zol-menu__sub-link").on("click", function (e) {
        e.preventDefault();
    });
    /*------------------
        back to top
    ------------------*/
    $(document).on("click", ".back-to-top", function () {
        $("html,body").animate(
            {
                scrollTop: 0,
            },
            2000
        );
    });
})(jQuery);

$(window).on("scroll", function () {
    var ScrollTop = $(".back-to-top");
    if ($(window).scrollTop() > 1200) {
        ScrollTop.fadeIn(1000);
    } else {
        ScrollTop.fadeOut(1000);
    }
});

$(window).on("load", function () {
    /*-----------------
        preloader
    ------------------*/
    var preLoder = $(".preloader");
    preLoder.fadeOut(1000);
});
