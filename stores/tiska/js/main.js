(function ($) {
    "use strict";

    /*------------------------------------------
                   Video Player
      --------------------------------------------*/
    $(".player").mb_YTPlayer({
        containment: '#video-wrapper',
        mute: false,
        showControls: false,
        quality: 'hd720'
    });

    /*------------------------------------------      
            Open filter menu mobile
      --------------------------------------------*/
    $('.filter-collection-left > a').on('click', function () {
        $('.wrappage').addClass('show-filter');
    });

    $('.close-sidebar-collection').on('click', function () {
        $('.wrappage').removeClass('show-filter');
    });


    /*------------------------------------------
                     Tooltip
    --------------------------------------------*/
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    /*------------------------------------------
                      Scroll to top
    --------------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) { // If page is scrolled more than 50px
            $('#scrolltotop').fadeIn(500); // Fade in the arrow
        } else {
            $('#scrolltotop').fadeOut(500); // Else fade out the arrow
        }
    });
    $('#scrolltotop').click(function () { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 700);
    });
    /*------------------------------------------
                       Full Screen Search
    --------------------------------------------*/
    $('#searchBtn').on("click", function () {
        $('#search').addClass('open');
        $('#search_element').focus();

    });
    $('.close').on("click", function () {
        $('#search').removeClass('open');
    });
    /* -------------------------------------
        JS FOR MAP START
    -------------------------------------- */
    function map() {
        if ($('#mapid').length > 0) {
            var lat = $('#mapid').data('lat');
            var lang = $('#mapid').data('lang');
            var mymap = L.map('mapid').setView([lat, lang], 20);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery Â© <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox.streets'
            }).addTo(mymap);

            var marker = "<img src='images/others/map-marker.png'>";
            var popup = L.popup()
                .setLatLng([lat, lang])
                .setContent(marker)
                .openOn(mymap);
        }
    }
    map();


    jQuery(document).ready(function ($) {

        /*------------------------------------------
                      Responsive menu
        --------------------------------------------*/
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991"
        });



        /*--------------------------------------------------
              Parallax SideMenu ScrollSpy 
        -------------------------------------------------- */
        jQuery(function ($) {
            var dmSpyMenu = $('.droopmenu-navbar');
            var dmSpyLink = dmSpyMenu.find('.droopmenu-nav a');
            // Move to section on click
            dmSpyLink.on('click', function (e) {
                var dmSpyTarget = $($(this).attr('href'));
                $('html, body').animate({
                    scrollTop: dmSpyTarget.offset().top
                }, 600);
                $(this).parent('li').addClass('activeSection');
                e.preventDefault();
            });
            // Run function when scroll
            $(window).on('scroll', function () {
                dmSpyNav();
            });
            // Scroll function 
            function dmSpyNav() {
                var dmSpyTop = $(window).scrollTop();
                $('.single-parallax-item').each(function () {
                    var dmSpyId = $(this).attr('id'),
                        dmSpyOffset = $(this).offset().top - 10,
                        dmSpyHeight = $(this).height();
                    if (dmSpyTop >= dmSpyOffset && dmSpyTop < dmSpyOffset + dmSpyHeight) {
                        dmSpyLink.parent('li').removeClass('activeSection');
                        dmSpyMenu.find('[data-droopmenu-scroll="' + dmSpyId + '"]').parent('li').addClass('activeSection');
                    }
                });
            }
            dmSpyNav();

        });

        /*-----------------------------------
                  Magnific Popup            
         -------------------------------------*/
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        $('.mfp-img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true

            }

        });

        /*-----------------------------------
                  Off-canvas Menu            
        -------------------------------------*/
        // Close & Open Menu
        function openCloseMenuCart() {
            // Open & Close Menu 
            $(".menu-link").on('click', function (eventMenuOpen) {
                $('body').toggleClass("theme-menu-open");

                setTimeout(function () {
                    $('body').toggleClass("blocking");
                    $('html').toggleClass("blocking");
                }, 300);

                // Close menu if click outside menu
                $('.site, .menu-header-close-button-mobile').on('click', function () {
                    $('body').removeClass("theme-menu-open blocking");
                    $('html').removeClass("blocking");
                });
                eventMenuOpen.stopPropagation();
            });
        }
        openCloseMenuCart();

        // Open & Close submenu item
        function openAndCloseSubMenuItem() {
            $('.theme-menu .ham-menu li.menu-item-has-children > a.menu-icon').on('click', function () {
                var $thisPrent = $(this).parent('li');

                if ($thisPrent.hasClass('open')) {
                    $thisPrent.removeClass('open');
                    $thisPrent.find('li').removeClass('open');
                    $thisPrent.find('ul').slideUp(200);
                } else {
                    $thisPrent.addClass('open');
                    $thisPrent.children('ul').slideDown(200);
                    $thisPrent.siblings('li').children('ul').slideUp(200);
                    $thisPrent.siblings('li').removeClass('open');
                    $thisPrent.siblings('li').find('li').removeClass('open');
                    $thisPrent.siblings('li').find('ul').slideUp(200);
                }
            });
        }
        $(".menu-item-has-children .sub-menu li a").click(function () {
            var category = jQuery('.categories-list-nav li a').attr('data-category');
            if (category !== $(".menu-item-has-children .sub-menu li a").text()) {
                jQuery('.categories-list-nav li').removeClass('active-category');
                $('.categories-list-nav li ').addClass('active-category');
            }
        });

        openAndCloseSubMenuItem();
        /*------------------------------------    
             Shopping Cart 
        --------------------------------------*/

        $('.cart__menu').on('click', function () {
            $('.shopping__cart').addClass('shopping__cart__on');
            $('.body__overlay').addClass('is-visible');

        });
        $('.panel_setting').on('click', function () {
            $('.setting-panel').addClass('setting-panel-on');
            $('.body__overlay').addClass('is-visible');

        });
        $('.offsetmenu__close__btn').on('click', function () {
            $('.shopping__cart').removeClass('shopping__cart__on');
            $('.body__overlay').removeClass('is-visible');
        });
        $('.offsetmenu__close__btn').on('click', function () {
            $('.setting-panel').removeClass('setting-panel-on');
            $('.body__overlay').removeClass('is-visible');
        });


        //Close body Overlay 
        $('.body__overlay').on('click', function () {
            $(this).removeClass('is-visible');
            $('.offsetmenu').removeClass('offsetmenu__on');
            $('.shopping__cart').removeClass('shopping__cart__on');
            $('.filter__wrap').removeClass('filter__menu__on');
            $('.user__meta').removeClass('user__meta__on');
        });


        /*------------------------------------------
                        Carousel 
        --------------------------------------------*/
        //Banner carousel 1
        var swiper = new Swiper('.home-banner-slider.v1', {
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            loop: true,
            effect: 'fade',
            pagination: {
                el: '.banner-pagination.v1',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">0' + (index + 1) + '</span>';
                },
            },
        });
        
        //Banner carousel 2
        var swiper2 = new Swiper('.home-banner-slider.v2', {

            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            spaceBetween: 50,
            loop: true,
            navigation: {
                nextEl: '.banner-button-next.v1',
                prevEl: '.banner-button-prev.v1',
            },
        });

        // Banner carousel 3
        var swiper3 = new Swiper('.home-banner-slider.v5', {
            direction: 'vertical',
            slidesPerView: 1,
            mousewheel: true,
            loop: true,
            navigation: {
                nextEl: '.banner-button-next.v2',
                prevEl: '.banner-button-prev.v2',
            },
        });


        //Banner tab carousel
        var swiper4 = new Swiper('.tab-slider', {
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },

        });

        //Vertical carousel 
        var swiper5 = new Swiper('.home-banner-slider.v4', {
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },

        });
        //Single Product carousel
        var swiper = new Swiper('.single-product-slider', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        //Product carousel 1
        var swiper = new Swiper('.product-slider-wrapper.v1', {

            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
                nextEl: '.product-button-next.v1',
                prevEl: '.product-button-prev.v1',
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 675
                675: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },

                // when window width is <= 991
                991: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                // when window width is <= 1024px
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }

            }
        });
        //Product carousel 2
        var swiper = new Swiper('.product-slider-wrapper.v2', {

            slidesPerView: 3,
            spaceBetween: 15,
            navigation: {
                nextEl: '.product-button-next.v2',
                prevEl: '.product-button-prev.v2',
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 568px
                568: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },

                // when window width is <= 991
                991: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                // when window width is <= 1200px
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }

            }
        });
        //Product carousel 3
        var swiper = new Swiper('.product-slider-wrapper.v3', {

            slidesPerView: 3,
            spaceBetween: 15,
            navigation: {
                nextEl: '.product-button-next.v3',
                prevEl: '.product-button-prev.v3',
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 568px
                568: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                // when window width is <= 767
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },

                // when window width is <= 991
                991: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                // when window width is <= 1200px
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }

            }
        });
        //Product carousel 4
        var swiper = new Swiper('.product-slider-wrapper.v4', {

            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.product-button-next.v4',
                prevEl: '.product-button-prev.v4',
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 675px
                675: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },

                // when window width is <= 991px
                991: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                // when window width is <= 1200px
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }

            }
        });
        //Single Product carousel
        var swiper = new Swiper('.single-product-slider', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        var swiper = new Swiper('.single-product-slider', {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 20,
            navigation: {
                nextEl: '.single-product-button.swiper-button-next',
                prevEl: '.single-product-button.swiper-button-prev',
            },
        });
        //BLog Carousel 1
        var swiper = new Swiper('.blog-slider.style1', {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.blog-navigation .swiper-button-next',
                prevEl: '.blog-navigation .swiper-button-prev',
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 414px
                414: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },

                // when window width is <= 767px
                767: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }

            }
        });
        //BLog Carousel 2
        var swiper9 = new Swiper('.blog-slider.style2', {
            navigation: {
                nextEl: '.blog-navigation .swiper-button-next',
                prevEl: '.blog-navigation .swiper-button-prev',
            },
        });
        //Instagram Carousel
        var swiper10 = new Swiper('.instagram-wrapper.style1', {
            slidesPerView: 4,
            loop: true,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.insta-button .swiper-button-next',
                prevEl: '.insta-button .swiper-button-prev',
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 414px
                414: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                // when window width is <= 600px
                600: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                // when window width is <= 768px
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10
                }

            }
        });
        //Testimonial Carousel
        var swiper11 = new Swiper('.testimonial-slider-wrapper', {
            navigation: {
                clickable: true,
                nextEl: '.testimonial.swiper-button-next',
                prevEl: '.testimonial.swiper-button-prev',
            },
        });
        //Team Carousel
        var swiper = new Swiper('.team-wrapper', {
            slidesPerView: 4,
            loop: true,
            spaceBetween: 10,
            navigation: {
                nextEl: '.team-button .swiper-button-next',
                prevEl: '.team-button .swiper-button-prev',
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 414px
                414: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                // when window width is <= 600px
                600: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                // when window width is <= 768px
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10
                }

            }
        });

        /*------------------------------------------
                         Product quantity
        --------------------------------------------*/

        var quantitiy = 0;
        $('.quantity-right-plus').on("click", function (e) {
            e.preventDefault();
            var quantity = parseInt($(this).parent().siblings("input.input-number").val());
            $(this).parent().siblings("input.input-number").val(quantity + 1);
        });
        $('.quantity-left-minus').on("click", function (e) {
            e.preventDefault();
            var quantity = parseInt($(this).parent().siblings("input.input-number").val());
            if (quantity > 0) {
                $(this).parent().siblings("input.input-number").val(quantity - 1);
            }
        });


        /*------------------------
             price range slider
        --------------------------*/
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));



        /*------------------------
           Category menu Activation
        --------------------------*/
        $('.category-sub-menu li.has-sub > a').on('click', function () {
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp();
            } else {
                element.addClass('open');
                element.children('ul').slideDown();
                element.siblings('li').children('ul').slideUp();
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp();
            }
        });


        /*--------------------------
             Count Down Timer
         ----------------------------*/
        $('[data-countdown]').each(function () {
            var $this = $(this),
                finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function (event) {
                $this.html(event.strftime('<span class="cdown day"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hours</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>mins</p></span> <span class="cdown second"><span class="time-count">%S</span> <p>secs</p></span>'));
            });
        });


    });



    /*-----------------------------
         Popup Newsletter 
     -----------------------------*/
    var delay = 5000; // milliseconds
    var cookie_expire = 0; // days
    var cookie = localStorage.getItem("list-builder");
    if (cookie == undefined || cookie == null) {
        cookie = 0;
    }
    if (((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire) {
        $("#list-builder").delay(delay).fadeIn("fast", () => {
            $("#popup-box").fadeIn("fast", () => {});
        });

        $("button[name=subscribe]").click(() => {
            $.ajax({
                type: "POST",
                url: $("#popup-form").attr("action"),
                data: $("#popup-form").serialize(),
                success: (data) => {
                    $("#popup-box-content").html("<p style='text-align: center'>Thank you for subscribing to The Polyglot Developer newsletter!</p>");
                }
            });
        });

        $("#popup-close").click(() => {
            $("#list-builder, #popup-box").hide();
            localStorage.setItem("list-builder", (new Date()).getTime());
        });
    }

    /*---------------------------------------
        Slick slider with zoom
    -----------------------------------------*/
    // SLICK
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        nextArrow: '<i class="ion-ios-arrow-right slick-next"></i>',
        prevArrow: '<i class="ion-ios-arrow-left  slick-prev"></i>',

    });

    // ZOOM
    $('.ex1').zoom();

    // STYLE GRAB
    $('.ex2').zoom({
        on: 'grab'
    });

    // STYLE CLICK
    $('.ex3').zoom({
        on: 'click'
    });

    // STYLE TOGGLE
    $('.ex4').zoom({
        on: 'toggle'
    });

}(jQuery));
