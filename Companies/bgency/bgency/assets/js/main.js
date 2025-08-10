(function ($) {
"use strict";

/*------------------------------------
		Preloader
--------------------------------------*/
$(window).on('load', function () {
	$('#preloader').delay(400).fadeOut('slow');
	$('body').delay(400).css({'overflow': 'visible'});
});



// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
});
$('#bn-mobile-menu').meanmenu({
	meanMenuContainer: '.bn-mobile-menu',
	meanScreenWidth: "1199"
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
$('.bn-header-action-search').on('click', function () {
	$('.body-overlay').addClass('active');
	$('.bn-search-popup').addClass('active');
})

$('.body-overlay').on('click', function () {
	$('.body-overlay').removeClass('active');
	$('.bn-search-popup').removeClass('active');
})



function sliderActive() {
	/*------------------------------------
	Slider
	--------------------------------------*/
	if (jQuery(".bn-slider-active").length > 0) {
		let sliderActive1 = '.bn-slider-active';
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			pagination: true,
			autoplay: {
				delay: 5000,
			},
			// If we need pagination
	        pagination: {
				el: ".slider-swiper-pagination",
				clickable: true,
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


	// portfolio active 
	const sgPortfolioActiveOne = new Swiper(".bn-portfolio-carousel-active", {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		grabCursor: true,
		observer: true,
		observeParents: true,
			breakpoints: {
			0: {
				slidesPerView: 1,
				},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3
			}
		}
	});


	// team active 
	const bnTeamActive = new Swiper(".bn-team-active", {
		slidesPerView: 4,
		centeredSlides: true,
		spaceBetween: 30,
		grabCursor: true,
		observer: true,
		observeParents: true,
		loop: true,
		pagination: {
			el: ".team-swiper-pagination",
			clickable: true,
			},
			breakpoints: {
			0: {
				slidesPerView: 1,
				},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4
			}
		}
	});

	// testimonial active 1
	const testimonialActiveOne = new Swiper(".bn-testimonial-active", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		centeredSlides: true,
		autoplay: true,
		pagination: {
			el: '.testimonial-swiper-pagination',
			clickable: true,
			},
		navigation: {
			nextEl: '.testimonial-swiper-button-next',
			prevEl: '.testimonial-swiper-button-prev',
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
			1199: {
				slidesPerView: 1
			}
		}
	});
	// testimonial active 2
	const testimonialActiveTwo = new Swiper(".bn-testimonial-active-2", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		// direction: 'vertical',
		autoplay: false,
		navigation: {
			nextEl: '.testimonial-2-swiper-button-next',
			prevEl: '.testimonial-2-swiper-button-prev',
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
			1199: {
				slidesPerView: 1
			}
		}
	});

	// brand active 
	const BrandActive = new Swiper(".bn-brand-active", {
		slidesPerView: 5,
		spaceBetween: 30,
		autoplay: true,
		loop: true,
			breakpoints: {
			0: {
				slidesPerView: 2,
				},
			576: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 4,
			},
			1199: {
				slidesPerView: 5
			}
		}
	});
	// brand active 2
	const BrandActiveTwo = new Swiper(".bn-brand-active-2", {
		slidesPerView: 5,
		spaceBetween: 30,
		autoplay: true,
		loop: true,
			breakpoints: {
			0: {
				slidesPerView: 2,
				},
			576: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1199: {
				slidesPerView: 5
			}
		}
	});
	// brand active 3
	const BrandActiveThree = new Swiper(".bn-brand-active-3", {
		slidesPerView: 5,
		spaceBetween: 30,
		autoplay: true,
		loop: true,
			breakpoints: {
			0: {
				slidesPerView: 2,
				},
			576: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 4,
			},
			1199: {
				slidesPerView: 5
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

// niceSelect
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




// portfolio start

if (jQuery(".bn-portfolio-wrapper").length > 0) {
    $('.bn-portfolio-wrapper').imagesLoaded(function () {
        let $grid = $('.bn-portfolio-wrapper').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item' // columnWidth: 1
            }
        });

    	
		// filter items on button click
		$('.bn-portfolio-menu').on( 'click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
    });
}



//for menu active class
$('.bn-portfolio-menu button').on('click', function(event) {
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



//   odometer for counter area
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