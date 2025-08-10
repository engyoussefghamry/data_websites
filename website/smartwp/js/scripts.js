$(document).ready(function(){

	"use strict";

    // fixed header
    if($(window).width()>974)
    {
        var stk_header = $('.header');
        var winSelector = $(window);
        $(window).on('scroll', function() {
            if (winSelector.scrollTop() > 70) {
                stk_header.addClass('is-sticky');
            } else {
                stk_header.removeClass('is-sticky');
            }
        });
        if (winSelector.scrollTop() > 70) {
            stk_header.addClass('is-sticky');
        } else {
            stk_header.removeClass('is-sticky');
        }
    }
    
    if($(window).width()<974)
    {
        $('.arrow').on('click', function(){
            $(this).next().slideToggle('active');
        })
    }
    $('.btn-search').on('click', function(e) {
        e.preventDefault();
        $('.search_form').toggleClass('visible');
    });




	// page-loader
	$(window).on('load', function() {
	    $('#page-loader').delay(350).fadeOut('slow', function() {
	        $(this).remove();
	    });
	});





    // magnificPopup

    // Initialize popup as usual

    $('.image-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        callbacks: {
            beforeOpen: function() {
               this.st.mainClass = this.st.el.attr('data-effect');
            }
        }
    });

    $('.gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
              enabled:true
            }
        });
    });
    
    

	/// Scroll to top
	$(window).on('scroll', function() {
	    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
	        $('.scroll-top.active').removeClass('active');
	        $('.scroll-top').addClass('active');    // Fade in the arrow
	    } else {
	        $('.scroll-top').removeClass('active');   // Else fade out the arrow
	    }
	});
	$('.scroll-top').on('click', function() {      // When arrow is clicked
	    $('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 2000);
	});


    // slider pro
    if ($.fn.sliderPro) {
        if ($('#index-slider2').length >= 0) {
          $('#index-slider2').sliderPro({
            width: 1920,
            height: 830,
            visibleSize: '100%',
            forceSize: 'fullWidth',
            arrows: true,
            buttons: false,
            autoplayDelay: 8500,
            autoplayOnHover: 'none',
            waitForLayers: true,
            thumbnailWidth: 292,
            thumbnailHeight: 120,
            thumbnailPointer: true,
            autoScaleLayers: false,
            breakpoints: {
              1200: {
                thumbnailWidth: 252,
                thumbnailHeight: 120
              },
              1024: {
                thumbnailWidth: 212,
                thumbnailHeight: 120
              },
              500: {
                thumbnailWidth: 120,
                thumbnailHeight: 120
              }
            }
          });
        };
    }






    var Core = {

        initialized: false,

        initialize: function() {

            if (this.initialized) return;
            this.initialized = true;

            this.build();

        },

        build: function() {

            // Owl Carousel

            this.initOwlCarousel();
        },
        initOwlCarousel: function(options) {

            $(".carousel-slider").each(function(i) {
                var $owl = $(this);

                var itemsData = $owl.data('items');
                var navigationData = $owl.data('navigation');
                var paginationData = $owl.data('pagination');
                var singleItemData = $owl.data('single-item');
                var autoPlayData = $owl.data('auto-play');
                var transitionStyleData = $owl.data('transition-style');
                var mainSliderData = $owl.data('main-text-animation');
                var afterInitDelay = $owl.data('after-init-delay');
                var stopOnHoverData = $owl.data('stop-on-hover');
                var margingap = $owl.data('margin');
                var loop = $owl.data('loop');
                var video = $owl.data('video');
                var autoplayTimeout = $owl.data('autoplay-Timeout');
                var centeritem = $owl.data('center');
                var man480 = $owl.data('man480');
                var min480 = $owl.data('min480');
                var min768 = $owl.data('min768');
                var min992 = $owl.data('min992');
                var min1200 = $owl.data('min1200');

                $owl.owlCarousel({
                    loop: loop,
                    video: video,
                    items: itemsData,
                    margin: margingap,
                    center: centeritem,
                    autoplay: autoPlayData,
                    autoplayTimeout: autoplayTimeout,
                    dots: paginationData,
                    nav: navigationData,
                    navText: ['<i class="eb-icon flaticon-arrows-1"></i>','<i class="eb-icon flaticon-arrows"></i>'],
                    smartSpeed: 450,
                    responsive: {
                      0: {
                        items: man480
                      },
                      480: {
                        items: min480
                      },
                      768: {
                        items: min768
                      },
                      975: {
                        items: min992
                      },
                      1170: {
                        items: min1200
                      }
                    }
                });
                // custom pagination
                // var $owlCustom = $('.owl-carousel');
                // $(".sliderprev").click(function () {
                //     $owlCustom.trigger('prev.owl.carousel');
                // });

                // $(".slidernext").click(function () {
                //     $owlCustom.trigger('next.owl.carousel');
                // });
            });
        },

    };

    Core.initialize();



    if ($("header").hasClass("home2")) {
      var offsetHeight = document.getElementById('main-footer').offsetHeight;
      $('.content-wrap').css('margin-bottom', offsetHeight);
      $('#main-footer').addClass('sticky-footer');
    }





    /* ==================================================================
     Parallax Stellar
     ================================================================== */




    // var isMobile = {
    //     Android: function () {
    //         return navigator.userAgent.match(/Android/i);
    //     },
    //     BlackBerry: function () {
    //         return navigator.userAgent.match(/BlackBerry/i);
    //     },
    //     iOS: function () {
    //         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    //     },
    //     Opera: function () {
    //         return navigator.userAgent.match(/Opera Mini/i);
    //     },
    //     Windows: function () {
    //         return navigator.userAgent.match(/IEMobile/i);
    //     },
    //     any: function () {
    //         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    //     }
    // };

    // jQuery(window).stellar({
    //     horizontalScrolling: false,
    //     hideDistantElements: true,
    //     verticalScrolling: !isMobile.any(),
    //     scrollProperty: 'scroll',
    //     responsive: true
    // });


    // carousel 3d slider
    
    new Vue({
        el: '#carousel3d',
        data: {
            slides: 7
        },
        components: {
            'carousel-3d': Carousel3d.Carousel3d,
            'slide': Carousel3d.Slide
        }
    })


    if ($('#eb-portfolio-grid').length > 0) {
        /* initialize shuffle plugin */
        var $grid = $('#eb-portfolio-grid');

        $grid.shuffle({
            itemSelector: '.eb-portfolio-item' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('#eb-portfolio-filter li').on('click', function (e) {
            e.preventDefault();

            // set active class
            $('#eb-portfolio-filter li').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName );
        });
    }

   

});

jQuery(document).ready(function(){
  
  jQuery('.skill-progress-bar').each(function() {
    jQuery(this).find('.progress-content').animate({
      width:jQuery(this).attr('data-percentage')
    },2000);
    
    jQuery(this).find('.progress-number-mark').animate(
      {text:jQuery(this).attr('data-percentage')},
      {
       duration: 2000,
       step: function(now, fx) {
         var data = Math.round(now);
         jQuery(this).find('.percent').html(data + '%');
       }
    });  
  });
});



jQuery(document).ready(function(){
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },6000);
    });
});