$(function() {
	
	"use strict";

	// Open a vertical menu by clicking on a burger (and hide the logo)
	$("#vertical-navbar-toggle").click(function() {
		$(".vertical-navbar").toggleClass("show-vertical-navbar");
		$(".horizontal-navbar .navbar-brand").toggleClass('hidden');
    });

	// Adds a class scroll-menu when scrolling.
	$(window).scroll(function() {
		if ($(this).scrollTop() > 0) {
			$('.horizontal-navbar, #open-burger-menu').addClass('scroll-menu');
			$('.wrap-vertical-menu').addClass('scroll-menu-vertical');
		} else {
			$('.horizontal-navbar, #open-burger-menu').removeClass('scroll-menu');
			$('.wrap-vertical-menu').removeClass('scroll-menu-vertical');
		}
	});

	// Add background color when clicking on burger menu in horizontal menu
	$(".horizontal-navbar .navbar-toggler").click(function() {
		$(".horizontal-navbar").toggleClass("bgColor");
    });

    // Open burger menu left
    $('#open-burger-menu').click(function() {
		$('#open-burger-menu, .wrap-burger-menu').toggleClass('open-burger-menu');
	});
});