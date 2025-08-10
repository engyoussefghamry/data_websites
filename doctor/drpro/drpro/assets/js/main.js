(function ($) {
"use strict";

// meanmenu
$('#dr-mobile-menu').meanmenu({
	meanMenuContainer: '.dr-mobile-menu',
	meanScreenWidth: "991"
});

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

//header menu hide show 
$('.dr-navbar-sign').on('click', function() {
	$('.dr-header-menu').slideToggle(300);
	$(this).toggleClass('active');
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
$('.dr-search').on('click', function () {
	$('.body-overlay').addClass('active');
	$('.td-search-popup').addClass('active');
})

$('.body-overlay').on('click', function () {
	$('.body-overlay').removeClass('active');
	$('.td-search-popup').removeClass('active');
})

// remove/add feature active class
$('.dr-banner-it').on('mouseenter', function () {
	$(this).addClass('item-active');
});


function sliderActive() {
	/*------------------------------------
	Slider
	--------------------------------------*/
	if (jQuery(".karx-slider-active").length > 0) {
		let sliderActive1 = '.karx-slider-active';
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			rtl: false,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			effect: 'fade',

			autoplay: {
				delay: 5000,
			},

			// If we need pagination
	        pagination: {
				el: ".karx-slider-dots",
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev',
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

	

	// Recent project slider
	if (jQuery(".dr-testimonial-active").length > 0) {
	let testimonialActive = new Swiper('.dr-testimonial-active', {
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: ".dr-testimonial-next",
			prevEl: ".dr-testimonial-prev",
		},

	});}

 	 // Recent project slider
	  if (jQuery(".dr-online-treatment-active").length > 0) {
		let onlineTreatment = new Swiper('.dr-online-treatment-active', {
			effect: "coverflow",
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 2,
			loop: true,
			coverflowEffect: {
			  rotate: 0,
			  stretch: 0,
			  depth: 100,
			  modifier: 8,
			  slideShadows: false,
			},
			pagination: {
			  el: ".dr-online-treatment-pagination",
			},

			breakpoints: {
				0: {
					slidesPerView: 2,
					coverflowEffect: {
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 5,
						slideShadows: false,
					  },
					},
				576: {
					slidesPerView: 2,
					coverflowEffect: {
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 5,
						slideShadows: false,
					  },
				},
				768: {
					slidesPerView: 2,
					coverflowEffect: {
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 8,
						slideShadows: false,
					  },
				},
				992: {
					slidesPerView: 2,
					coverflowEffect: {
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 8,
						slideShadows: false,
					  },
				},
				1200: {
					slidesPerView: 2,
					coverflowEffect: {
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 8,
						slideShadows: false,
					  },
				}
			}

	});}

// isotop
if (jQuery(".dr-portfolio-area").length > 0) {
$('.dr-portfolio-area .dr-portfolio-active').imagesLoaded(function () {
	let $grid = $('.dr-portfolio-area .dr-portfolio-active').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: 1
		}
	})
	$('.dr-portfolio-menu').on( 'click', 'button', function() {
		let filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
});


}





//for menu active class
$('.dr-portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

// Active Odometer Counter 
jQuery('.odometer').appear(function (e) {
	var odo = jQuery(".odometer");
	odo.each(function () {
		var countNumber = jQuery(this).attr("data-count");
		jQuery(this).html(countNumber);
	});
});


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});
/* hero video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

/* about video view */
$('.about-popup-video').magnificPopup({
	type: 'iframe'
});

$('.dr-contact-form select').niceSelect();
// data background
$("[data-background").each(function(){
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
//for menu active class
$('.portfolio_nav button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


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


// market-progress-bar acitve
// Jquery Appear raidal
if (typeof ($.fn.knob) != 'undefined') {
	$('.knob').each(function () {
	var $this = $(this),
	knobVal = $this.attr('data-rel');

	$this.knob({
	'draw': function () {
		$(this.i).val(this.cv + '%')
	}
	});

	$this.appear(function () {
	$({
		value: 0
	}).animate({
		value: knobVal
	}, {
		duration: 2000,
		easing: 'swing',
		step: function () {
		$this.val(Math.ceil(this.value)).trigger('change');
		}
	});
	}, {
	accX: 0,
	accY: -150
	});
});
}

// WOW active
new WOW().init();


})(jQuery);