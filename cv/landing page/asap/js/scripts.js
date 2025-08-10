/**
*
* -------------------------------------------------

*
* --------------------------------------------------
*
**/

(function ($) {
    'use strict';
    jQuery(document).ready(function () {
		// Counter
		$('.counter').countTo();

		// Slick Carousel
		$('.slick-slide-wrap').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			adaptiveHeight: true
		});
    });
})(jQuery);