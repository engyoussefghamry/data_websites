/* ---------------------
CUSTOM JS DOCUMENT 
--------------------- */
/*******************************************
PreLoader On window Load
*******************************************/
$(window).on("load", function() {

    "use strict";
    var preLoader = jQuery('.preloader');
    var barChart = jQuery("#bar-chart");
    var countNumber = jQuery(".count-number");
    var body = jQuery('body,html');
    var doc = jQuery(document);


    /* ---------------------	
    Preloader
    /* --------------------- */

    preLoader.fadeOut();


    /*******************************************
    Simple Bar Chart
    *******************************************/
    if (barChart.length) {
        barChart.appear(function() {
            jQuery(this).dxChart({
                dataSource: [{
                    day: "2009",
                    oranges: 100
                }, {
                    day: "2010",
                    oranges: 300
                }, {
                    day: "2011",
                    oranges: 200
                }, {
                    day: "2012",
                    oranges: 400
                }, {
                    day: "2013",
                    oranges: 600
                }, {
                    day: "2014",
                    oranges: 200
                }, {
                    day: "2015",
                    oranges: 300
                }],
                valueAxis: {
                    grid: {
                        color: '#9D9EA5',
                        width: 0.1
                    }
                },
                legend: {
                    visible: false,
                },
                series: {
                    argumentField: "day",
                    valueField: "oranges",
                    name: "My oranges",
                    visible: false,
                    type: "bar",
                    color: '#f55e45'
                }
            });
        });
    }
    /* ---------------------	
    Fun Factor / Counter
    /* --------------------- */
    if (countNumber.length) {
        countNumber.appear(function() {
            jQuery(this).each(function() {
                var datacount = jQuery(this).attr('data-count');
                jQuery(this).find('.counter').delay(6000).countTo({
                    from: 10,
                    to: datacount,
                    speed: 3000,
                    refreshInterval: 50,
                });
            });
        });
    }

    doc.on('click', 'a[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $id.offset().top;

        // animated top scrolling
        body.animate({
            scrollTop: pos
        }, 800);
    });
    /* ---------------------	
    Mac detection
    /* --------------------- */

    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {

        body.addClass('safari-mac');

    }

    /*******************************************
    Main Slider Calling
    *******************************************/
    homePageSliderInit();


    /* ---------------------	
    All owl Carousels Calling
    /* --------------------- */

    owlCarouselInit();


});
/**** fixed header js ****/

/*/var stickyTop = $('#history').offset().top;
    /*START CHANGE MENU BACKGROUND JS*/
   /*$(window).on('scroll', function() {
        if ($(window).scrollTop() > stickyTop) {
            $('#sticky_header').addClass('menu-bg');
        } else {
            $('#sticky_header').removeClass('menu-bg');
        }
    });*/
	
	var stickyTop =$('#sticky_header'); 
    var stickyTopOffset= $('#history').offset().top;
    
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > stickyTopOffset) {
            stickyTop.addClass('menu-bg');
        } else {
            stickyTop.removeClass('menu-bg');
        }
    });

/*******************************************
Main Slider
*******************************************/

function homePageSliderInit() {
    "use strict";
    var tpBanner = $('.tp-banner');
    tpBanner.show().revolution({
        dottedOverlay: "none",
        delay: 16000,
        startwidth: 1170,
        startheight: 818,
        hideThumbs: 200,

        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 5,

        navigationType: "none",
        navigationArrows: "solo",
        navigationStyle: "preview2",

        touchenabled: "on",
        onHoverStop: "on",

        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,

        parallax: "mouse",
        parallaxBgFreeze: "on",
        parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

        keyboardNavigation: "on",

        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,

        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,

        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,

        shadow: 0,
        fullWidth: "on",
        fullScreen: "off",

        spinner: "spinner4",

        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,

        shuffle: "off",

        autoHeight: "off",
        forceFullWidth: "off",



        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResolution: 0,

        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        startWithSlide: 0,
        videoJsPath: "revslider/videojs/",
        fullScreenOffsetContainer: ""
    });

}

/* ---------------------	
All owl Carousels 
/* --------------------- */

function owlCarouselInit() {
    "use strict";
    var owlExample = jQuery("#owl-example");
    var owlExample1 = jQuery("#owl-example1");
    var owlExample2 = jQuery("#owl-example2");
    var owlExample3 = jQuery("#owl-example3");
    var owlExample4 = jQuery("#owl-example4");
    var owlAbout = jQuery("#owl-about");
    var owlExample6 = jQuery("#owl-example6");
    var owlExample7 = jQuery("#owl-example7");

    var owlSidebar = jQuery('.owl-sidebar');

    /**********owl fixed option*************/
    if (owlExample.length) {
        owlExample.owlCarousel({
            items: 1,
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            pagination: false
        });
    }

    if (owlExample1.length) {
        owlExample1.owlCarousel({
            items: 2,
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: false,
            pagination: false
        });
    }

    if (owlExample2.length) {
        owlExample2.owlCarousel({
            items: 2,
            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: false,
            pagination: false
        });
    }

    if (owlExample3.length) {
        owlExample3.owlCarousel({
            items: 2,
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: false,
            pagination: false
        });
    }

    if (owlExample4.length) {
        owlExample4.owlCarousel({
            items: 3,
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: false,
            pagination: false
        });
    }
    if (owlAbout.length) {
        owlAbout.owlCarousel({
            items: 2,
            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            pagination: true
        });
    }

    if (owlExample6.length) {
        owlExample6.owlCarousel({
            items: 4,
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: false,
            pagination: false
        });
    }

    if (owlExample7.length) {
        owlExample7.owlCarousel({
            items: 4,
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: false,
            pagination: false
        });
    }

    /**********owl custom option*************/


    if (owlSidebar.length) {
        owlSidebar.each(function(index) {
            var effect_mode = jQuery(this).data('effect');
            var autoplay = jQuery(this).data('autoplay');
            var navigation = jQuery(this).data('navigation');
            var pagination = jQuery(this).data('pagination');
            var singleitem = jQuery(this).data('singleitem');
            var items = jQuery(this).data('items');
            jQuery(this).owlCarousel({
                transitionStyle: effect_mode,
                autoplay: autoplay,
                navigation: navigation,
                pagination: pagination,
                singleItem: singleitem,
                items: items,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            });
        });
    }

}