(function ($) {
    "use strict";

    // ------------------------------------------------------------------------------ //
    // Preloader
    // ------------------------------------------------------------------------------ //

    $("#status").fadeOut();
    $("#preloader")
        .delay(550)
        .fadeOut("slow");
    $("body")
        .delay(550)
        .css({
            overflow: "visible"
        });

    // ------------------------------------------------------------------------------ //
    // ScrollTop
    // ------------------------------------------------------------------------------ //

    $(document).ready(function () {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 800) {
                $('#scroll').fadeIn();
            } else {
                $('#scroll').fadeOut();
            }
        });
        $('#scroll').on('click', function () {
            $("html, body").animate({
                scrollTop: 0
            });
            return false;
        });
    });


    // ------------------------------------------------------------------------------ //
    // Main Menu
    // ------------------------------------------------------------------------------ //

    const openedMenu = document.querySelector('.opened-menu');
    const closedMenu = document.querySelector('.closed-menu');
    const navbarMenu = document.querySelector('.navbar');
    const menuOverlay = document.querySelector('.overlay');

    // Opened navbarMenu
    // Closed navbarMenu
    // Closed navbarMenu by Click Outside
    openedMenu.addEventListener('click', toggleMenu);
    closedMenu.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    // Toggle Menu Function
    function toggleMenu() {
        navbarMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.classList.toggle('scrolling');
    }

    navbarMenu.addEventListener('click', (event) => {
        if (event.target.hasAttribute('data-toggle') && window.innerWidth <= 992) {
            // Prevent Default Anchor Click Behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement.parentElement;

            // If menuItemHasChildren is Expanded, Collapse It
            if (menuItemHasChildren.classList.contains('active')) {
                collapseSubMenu();
            } else {
                // Collapse Existing Expanded menuItemHasChildren
                if (navbarMenu.querySelector('.menu-item-has-children.active')) {
                    collapseSubMenu();
                }
                // Expand New menuItemHasChildren
                menuItemHasChildren.classList.add('active');
                const subMenu = menuItemHasChildren.querySelector('.sub-menu');
                subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
            }
        }
    });

    // Collapse Sub Menu Function
    function collapseSubMenu() {
        navbarMenu.querySelector('.menu-item-has-children.active .sub-menu').removeAttribute('style');
        navbarMenu.querySelector('.menu-item-has-children.active').classList.remove('active');
    }

    // Fixed Resize Screen Function
    function resizeScreen() {
        // If navbarMenu is Open, Close It
        if (navbarMenu.classList.contains('active')) {
            toggleMenu();
        }

        // If menuItemHasChildren is Expanded, Collapse It
        if (navbarMenu.querySelector('.menu-item-has-children.active')) {
            collapseSubMenu();
        }
    }

    $(window).on('resize', function () {
        window.addEventListener('resize', () => {
            if (this.innerWidth > 992) {
                resizeScreen();
            }
        });
    });


    //    Sticky Menu
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 200) {
            $('.header-wrapper').addClass('fixed-header');
        } else {
            $('.header-wrapper').removeClass('fixed-header');
        }
    });


    // ------------------------------------------------------------------------------ //
    // Logo Carousel
    // ------------------------------------------------------------------------------ //

    $('.logo-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 15,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    // ------------------------------------------------------------------------------ //
    // Teatimonial Carousel
    // ------------------------------------------------------------------------------ //

    $('.testmonial-carousel-wrapper').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 15,
        dots: true,
        nav: true,
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
    })


    // ------------------------------------------------------------------------------ //
    // Project Details Carousel
    // ------------------------------------------------------------------------------ //

    $('.project-details-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 15,
        dots: true,
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
    })


    // ------------------------------------------------------------------------------ //
    // project Filter
    // ------------------------------------------------------------------------------ //

    $(document).ready(function () {
        $(".filter-button").on('click', function () {
            var value = $(this).attr('data-filter');
            if (value == "all") {
                $('.filter').show('1000');
            } else {
                $(".filter").not('.' + value).hide('3000');
                $('.filter').filter('.' + value).show('3000');
            }
        });

        $('.filter-list li').on('click', function () {
            $(this).addClass('activated');
            $(this).siblings().removeClass('activated');
        });
    });


    // ------------------------------------------------------------------------------ //
    // Counter 
    // ------------------------------------------------------------------------------ //


    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('resize scroll', function () {
        $('.odometer').each(function () {
            if ($(this).isInViewport()) {
                setTimeout(function () {
                    $('.odometer_number_one').html($('.odometer_number_one').data('odo'));
                    $('.odometer_number_two').html($('.odometer_number_two').data('odo'));
                    $('.odometer_number_three').html($('.odometer_number_three').data('odo'));
                    $('.odometer_number_four').html($('.odometer_number_four').data('odo'));
                }, 5);
            } else {}
        });
    });

    // ------------------------------------------------------------------------------ //
    // Contact Form
    // ------------------------------------------------------------------------------ //

    var submitContact = $("#submit-message"),
        message = $("#msg");

    submitContact.on("click", function (e) {
        e.preventDefault();

        var $this = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php",
            dataType: "json",
            cache: false,
            data: $("#contact-form").serialize(),
            success: function (data) {
                if (data.info !== "error") {
                    $this
                        .parents("form")
                        .find("input[type=text],input[type=email],textarea,select")
                        .filter(":visible")
                        .val("");
                    message
                        .hide()
                        .removeClass("success")
                        .removeClass("error")
                        .addClass("success")
                        .html(data.msg)
                        .fadeIn("slow")
                        .delay(1000)
                        .fadeOut("slow");
                } else {
                    message
                        .hide()
                        .removeClass("success")
                        .removeClass("error")
                        .addClass("error")
                        .html(data.msg)
                        .fadeIn("slow")
                        .delay(1000)
                        .fadeOut("slow");
                }
            }
        });
    });

})(jQuery);