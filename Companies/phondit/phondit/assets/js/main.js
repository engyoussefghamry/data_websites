(function ($) {
"use strict";

// meanmenu
$('#pl-mobile-menu').meanmenu({
	meanMenuContainer: '.pl-mobile-menu',
	meanScreenWidth: "9999"
});

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

//mobile side menu
$('.side-toggle').on('click', function () {
	$('.side-info').addClass('info-open');
	$('.offcanvas-overlay').addClass('overlay-open');
})

$('.side-info-close,.offcanvas-overlay').on('click', function () {
	$('.side-info').removeClass('info-open');
	$('.offcanvas-overlay').removeClass('overlay-open');
})

//search form
$('.pl-header-action-search').on('click', function () {
	$('.body-overlay').addClass('active');
	$('.td-search-popup').addClass('active');
})

$('.body-overlay').on('click', function () {
	$('.body-overlay').removeClass('active');
	$('.td-search-popup').removeClass('active');
})

// remove/add feature active class
$('.pl-qualific-box').on('mouseenter', function () {
	$(this).addClass('item-active').parent().siblings().find('.pl-qualific-box').removeClass('item-active');
});


function sliderActive() {
	/*------------------------------------
	Slider
	--------------------------------------*/
	if (jQuery(".slider-active").length > 0) {
		let sliderActive1 = '.slider-active';
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			rtl: false,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,

			autoplay: {
				delay: 5000,
			},

			// If we need pagination
	        pagination: {
				el: ".pl-swiper-pagination",
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: '.pl-swiper-button-next',
				prevEl: '.pl-swiper-button-prev',
			},

			a11y: false
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + ' [data-animation]').each(function () {
					let anim = $(this).data('animation');
					let delay = $(this).data('delay');
					let duration = $(this).data('duration');

					$(this).removeClass('anim' + anim)
						.addClass(anim + ' animated')
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration
						})
						.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
							$(this).removeClass(anim + ' animated');
						});
				});
			};
			animated();
			// Make animated when slide change
			init.on('slideChange', function () {
				$(sliderActive1 + ' [data-animation]').removeClass('animated');
			});
			init.on('slideChange', animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}}

// portfolio start
if (jQuery(".pl-portfolio-wrapper").length > 0) { 
	$('.pl-portfolio-wrapper').imagesLoaded(function () {
		var $grid = $('.pl-portfolio-wrapper').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item',
			}
		});

		// filter items on button click
		$('.pl-portfolio-menu').on( 'click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

	});
}

//for menu active class
$('.pl-portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

// testimonial active 
const testimonialActive = new Swiper(".pl-testimonial-active", {
	slidesPerView: 1,
	spaceBetween: 70,
	loop: true,
	dots:true,
	autoplay: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	  },
		
		breakpoints: {
			0: {
				slidesPerView: 1,
				},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 1,
			},
			1200: {
				slidesPerView: 1
			}
		}
});

// brand active 1 
const bzBrandActive = new Swiper(".pl-brand-active", {
	slidesPerView: 4,
	spaceBetween: 100,
	loop: true,
	
		breakpoints: {
		0: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 4,
		},
		1199: {
			slidesPerView: 4
		}
	}
});


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});
/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

$('.has-nice-select, .contact-form select').niceSelect();

// data background
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})
// data width
$("[data-width]").each(function(){
	$(this).css("width",$(this).attr("data-width"))
})
// data background color
$("[data-bg-color]").each(function(){
	$(this).css("background-color",$(this).attr("data-bg-color"))
})

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

//   odometer
$('.odometer').appear(function (e) {
	var odo = $(".odometer");
	odo.each(function () {
		var countNumber = $(this).attr("data-count");
		$(this).html(countNumber);
	});
});
// WOW active
new WOW().init();

sliderActive();


})(jQuery);

// Mouse Custom Cursor
function itCursor() {
    var myCursor = jQuery(".mouseCursor");
    if (myCursor.length) {
        if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
                t = document.querySelector(".cursor-outer");
            let n,
                i = 0,
                o = !1;
            (window.onmousemove = function(s) {
                o ||
                    (t.style.transform =
                        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (e.style.transform =
                        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (n = s.clientY),
                    (i = s.clientX);
            }),
            $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                    e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                }),
                $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                    ($(this).is("a", "button") &&
                        $(this).closest(".cursor-pointer").length) ||
                    (e.classList.remove("cursor-hover"),
                        t.classList.remove("cursor-hover"));
                }),
                (e.style.visibility = "visible"),
                (t.style.visibility = "visible");
        }
    }
}
itCursor();