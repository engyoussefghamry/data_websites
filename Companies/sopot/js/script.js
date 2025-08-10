(function ($) {

	"use strict";

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if ($('.preloader').length) {
			$('.preloader').delay(200).fadeOut(500);
		}
	}

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if ($('.loader-wrap').length) {
			$('.loader-wrap').delay(1000).fadeOut(500);
		}
	}

	if ($(".preloader-close").length) {
		$(".preloader-close").on("click", function () {
			$('.loader-wrap').delay(200).fadeOut(500);
		})
	}

	if ($('.curved-circle-4').length) {
		$('.curved-circle-4').circleType({
			position: 'absolute',
			dir: 1,
			radius: 100,
			forceHeight: true,
			forceWidth: true
		});
	}


	//Scroll to Top
	function headerStyle() {
		if ($('.main-header').length) {
			var windowpos = $(window).scrollTop();
			var scrollLink = $('.scroll-top');
			if (windowpos >= 250) {
				scrollLink.addClass('open');
			} else {
				scrollLink.removeClass('open');
			}
		}
	}

	headerStyle();

	// Scroll to Target
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000);

		});
	}

	//Add One Page nav
	if ($('.scroll-nav').length) {
		$('.scroll-nav').onePageNav();
	}




	/* ==========================================================================
	   When document is scrolling, do
	   ========================================================================== */

	$(window).on('scroll', function () {
		headerStyle();
	});

	/* ==========================================================================
	   When document is loading, do
	   ========================================================================== */

	$(window).on('load', function () {
		handlePreloader();
	});

})(window.jQuery);