$(function() {
	
	"use strict";

	// Home page
	$('#header .icon-settings').click(function() {
		$('#header .settings').toggleClass('open-settings');
		$('#header .wrap-settings img').toggleClass('rotate');
	});
	$('#menu1, #designer').addClass('active');
	$('#menu1').click(function() {
		$('#menu1').addClass('active');
		$('#menu2, .index-classic-portfolio-demo #parallax').removeClass();

		$('.index-classic-portfolio-demo').removeClass('index-classic-portfolio-image-parallax');
		$('.index-classic-portfolio-demo .overlay, .index-classic-portfolio-demo .girl-with-an-umbrella').removeClass('show-parallax');

		$('.index-classic-portfolio-demo #title-slide-1').addClass('video-number');
		$('.index-classic-portfolio-demo #title-slide-2, .index-classic-portfolio-demo #title-slide-3').removeClass('video-number');
		
		$('.blog-demo #topmenu, .blog-demo .horizontal-navbar .navbar-toggler, .index-creative-portfolio-demo #topmenu, .index-creative-portfolio-demo .horizontal-navbar .navbar-toggler, .index-classic-portfolio-demo .horizontal-navbar .navbar-toggler, .index-classic-portfolio-demo .horizontal-navbar #topmenu').addClass('show-menu');
		$('.index-creative-portfolio-demo .bgTune, .index-classic-portfolio-demo .bgTune').removeClass('vertical-show-menu');
		$('.blog-demo .wrap-vertical-menu, .index-creative-portfolio-demo .wrap-vertical-menu, .index-classic-portfolio-demo .wrap-vertical-menu').removeClass('show-menu');
	});
	$('#menu2').click(function() {
		$('#menu2').addClass('active');
		$('#menu1, .index-classic-portfolio-demo #parallax').removeClass('active');

		$('.index-classic-portfolio-demo').removeClass('index-classic-portfolio-image-parallax');
		$('.index-classic-portfolio-demo .overlay, .index-classic-portfolio-demo .girl-with-an-umbrella').removeClass('show-parallax');

		$('.index-classic-portfolio-demo #title-slide-1').addClass('video-number');
		$('.index-classic-portfolio-demo #title-slide-2, .index-classic-portfolio-demo #title-slide-3').removeClass('video-number');
		
		$('.blog-demo .wrap-vertical-menu, .index-creative-portfolio-demo .wrap-vertical-menu, .index-classic-portfolio-demo .wrap-vertical-menu').addClass('show-menu');
		$('.index-creative-portfolio-demo .bgTune, .index-classic-portfolio-demo .bgTune').addClass('vertical-show-menu');
		$('.blog-demo #topmenu, .blog-demo .horizontal-navbar .navbar-toggler, .index-creative-portfolio-demo #topmenu, .index-creative-portfolio-demo .horizontal-navbar .navbar-toggler, .index-classic-portfolio-demo .horizontal-navbar .navbar-toggler, .index-classic-portfolio-demo .horizontal-navbar #topmenu').removeClass('show-menu');
	});

	var demo = {
        audio: $("#bgTune"),
        demoStop: $(".demoStopAudio")                 
    };      
    var audio = demo.audio[0];
    demo.demoStop.click(function() {
        audio.pause();
        $('.sound_off').addClass('play-audio');
        $('.sound_on').removeClass('play-audio');
    });

	/* Index creative portfolio demo */
	//$('.index-creative-portfolio-demo #carouselTop .carousel-item:nth-child(1)').addClass('active');
	$('.index-creative-portfolio-demo #designer').click(function() {
		$('.index-creative-portfolio-demo #designer, .index-creative-portfolio-demo #carouselTop .carousel-item:nth-child(1), .index-creative-portfolio-demo #carouselTop .top-carousel-indicator:nth-child(1)').addClass('active');
		$('.index-creative-portfolio-demo #photographer, .index-creative-portfolio-demo #photographer-content-center, .index-creative-portfolio-demo #freelancer, .index-creative-portfolio-demo #slider, .index-creative-portfolio-demo #audio, .index-creative-portfolio-demo #carouselTop .carousel-item:nth-child(2), .index-creative-portfolio-demo #carouselTop .carousel-item:nth-child(3), .index-creative-portfolio-demo #carouselTop .top-carousel-indicator:nth-child(2), .index-creative-portfolio-demo #carouselTop .top-carousel-indicator:nth-child(3)').removeClass('active');
		$('.index-creative-portfolio-demo #carouselTop .container-indicators').addClass('indicators-hidden');
	
		$('.index-creative-portfolio-demo .carouselTop__content').removeClass('text-center');
		$('.index-creative-portfolio-demo .demo-col').addClass('col-sm-10 col-11');
		$('.index-creative-portfolio-demo .demo-col').removeClass('col');

		$('.index-creative-portfolio-demo .bgTune').removeClass('show-audio');
	});

	$('.index-creative-portfolio-demo #photographer').click(function() {
		$('.index-creative-portfolio-demo #photographer, .index-creative-portfolio-demo #carouselTop .carousel-item:nth-child(2), .index-creative-portfolio-demo #carouselTop .top-carousel-indicator:nth-child(1)').addClass('active');
		$('.index-creative-portfolio-demo #designer, .index-creative-portfolio-demo #photographer-content-center, .index-creative-portfolio-demo #freelancer, .index-creative-portfolio-demo #slider, .index-creative-portfolio-demo #audio, .index-creative-portfolio-demo #carouselTop .carousel-item:nth-child(1), .index-creative-portfolio-demo #carouselTop .carousel-item:nth-child(3), .index-creative-portfolio-demo #carouselTop .top-carousel-indicator:nth-child(1), .index-creative-portfolio-demo #carouselTop .top-carousel-indicator:nth-child(3)').removeClass('active');
		$('.index-creative-portfolio-demo #carouselTop .container-indicators').addClass('indicators-hidden');
	
		$('.index-creative-portfolio-demo .carouselTop__content').removeClass('text-center');
		$('.index-creative-portfolio-demo .demo-col').addClass('col-sm-10 col-11');
		$('.index-creative-portfolio-demo .demo-col').removeClass('col');

		$('.index-creative-portfolio-demo .bgTune').removeClass('show-audio');
	});

	$('.index-creative-portfolio-demo #photographer-content-center').click(function() {
		$('.index-creative-portfolio-demo #photographer-content-center, .index-creative-portfolio-demo #carouselTop .carousel-item:nth-child(2), .index-creative-portfolio-demo #carouselTop .top-carousel-indicator:nth-child(1)').addClass('active');
		$('.index-creative-portfolio-demo #designer, .index-creative-portfolio-demo #photographer, .index-creative-portfolio-demo #freelancer, .index-creative-portfolio-demo #slider, .index-creative-portfolio-demo #audio, .index-creative-portfolio-demo #carouselTop .carousel-item:nth-child(1), .index-creative-portfolio-demo #carouselTop .carousel-item:nth-child(3), .index-creative-portfolio-demo #carouselTop .top-carousel-indicator:nth-child(1), .index-creative-portfolio-demo #carouselTop .top-carousel-indicator:nth-child(3)').removeClass('active');
		$('.index-creative-portfolio-demo #carouselTop .container-indicators').addClass('indicators-hidden');
	
		$('.index-creative-portfolio-demo .carouselTop__content').addClass('text-center');
		$('.index-creative-portfolio-demo .demo-col').removeClass('col-sm-10 col-11');
		$('.index-creative-portfolio-demo .demo-col').addClass('col');
		
		$('.index-creative-portfolio-demo .bgTune').removeClass('show-audio');
	});

	$('.index-creative-portfolio-demo #freelancer').click(function() {
		$('.index-creative-portfolio-demo #freelancer, .index-creative-portfolio-demo #carouselTop .carousel-item:nth-child(3), .index-creative-portfolio-demo #carouselTop .top-carousel-indicator:nth-child(1)').addClass('active');
		$('.index-creative-portfolio-demo #designer, .index-creative-portfolio-demo #photographer, .index-creative-portfolio-demo #photographer-content-center, .index-creative-portfolio-demo #slider, .index-creative-portfolio-demo #audio, .index-creative-portfolio-demo #carouselTop .carousel-item:nth-child(1), .index-creative-portfolio-demo #carouselTop .carousel-item:nth-child(2), .index-creative-portfolio-demo #carouselTop .top-carousel-indicator:nth-child(1), .index-creative-portfolio-demo #carouselTop .top-carousel-indicator:nth-child(2)').removeClass('active');
		$('.index-creative-portfolio-demo #carouselTop .container-indicators').addClass('indicators-hidden');
	
		$('.index-creative-portfolio-demo .carouselTop__content').removeClass('text-center');
		$('.index-creative-portfolio-demo .demo-col').addClass('col-sm-10 col-11');
		$('.index-creative-portfolio-demo .demo-col').removeClass('col');

		$('.index-creative-portfolio-demo .bgTune').removeClass('show-audio');
	});

	$('.index-creative-portfolio-demo #slider').click(function() {
		$('.index-creative-portfolio-demo #slider, .index-creative-portfolio-demo #carouselTop .carousel-item:nth-child(1), .index-creative-portfolio-demo #carouselTop .top-carousel-indicator:nth-child(1)').addClass('active');
		$('.index-creative-portfolio-demo #designer, .index-creative-portfolio-demo #photographer, .index-creative-portfolio-demo #photographer-content-center, .index-creative-portfolio-demo #freelancer, .index-creative-portfolio-demo #audio, .index-creative-portfolio-demo #carouselTop .carousel-item:nth-child(2), .index-creative-portfolio-demo #carouselTop .carousel-item:nth-child(3), .index-creative-portfolio-demo #carouselTop .top-carousel-indicator:nth-child(2), .index-creative-portfolio-demo #carouselTop .top-carousel-indicator:nth-child(3)').removeClass('active');
		$('.index-creative-portfolio-demo #carouselTop .container-indicators').removeClass('indicators-hidden');
		$('.index-creative-portfolio-demo #carouselTop').addClass('carousel slide carousel-fade');
	
		$('.index-creative-portfolio-demo .carouselTop__content').removeClass('text-center');
		$('.index-creative-portfolio-demo .demo-col').addClass('col-sm-10 col-11');
		$('.index-creative-portfolio-demo .demo-col').removeClass('col');

		$('.index-creative-portfolio-demo .bgTune').removeClass('show-audio');
	});

	$('.index-creative-portfolio-demo #audio').click(function() {
		$('.index-creative-portfolio-demo #audio').addClass('active');
		$('.index-creative-portfolio-demo #designer, .index-creative-portfolio-demo #photographer, .index-creative-portfolio-demo #photographer-content-center, .index-creative-portfolio-demo #freelancer, .index-creative-portfolio-demo #slider').removeClass('active');
		$('.index-creative-portfolio-demo #carouselTop .container-indicators').addClass('indicators-hidden');
		
		$('.index-creative-portfolio-demo .carouselTop__content').removeClass('text-center');
		$('.index-creative-portfolio-demo .demo-col').addClass('col-sm-10 col-11');
		$('.index-creative-portfolio-demo .demo-col').removeClass('col');

		$('.index-creative-portfolio-demo .bgTune').addClass('show-audio');
	});


	// Blog
	$('#blog .icon-settings').click(function() {
		$('#blog .settings').toggleClass('open-settings');
		$('#blog .wrap-settings img').toggleClass('rotate');
	});
	$('#initially-displayed').click(function() {
		$('#initially-displayed').addClass('active');
		$('#hidden-on-hover').removeClass('active');
		$('#blog').removeClass('opens-on-hover');
		$('#blog .blog__news > div').addClass('align-items-md-end d-flex');
		$('#blog .blog__wrapTagsComments').css({"height": "auto", "overflow": "visible"});
	});
	$('#hidden-on-hover').click(function() {
		$('#hidden-on-hover').addClass('active');
		$('#initially-displayed').removeClass('active');
		$('#blog').addClass('opens-on-hover');
		$('#blog .blog__news > div').removeClass('align-items-md-end d-flex');
		$('#blog .blog__wrapTagsComments').css({"height": "0", "overflow": "hidden"});
	});


	/* Index classic portfolio demo */
	$('.index-classic-portfolio-demo #image').addClass('active');
	$('.index-classic-portfolio-demo .header__socialIcons').css({"display": "flex"});
	$('.index-classic-portfolio-demo #image').click(function() {
		$('.index-classic-portfolio-demo #image').addClass('active');
		$('.index-classic-portfolio-demo #image-2, .index-classic-portfolio-demo #parallax, .index-classic-portfolio-demo #audio, .index-classic-portfolio-demo #video-1, .index-classic-portfolio-demo #video-2, .index-classic-portfolio-demo #video-3').removeClass('active');

		$('.index-classic-portfolio-demo').removeClass('index-classic-portfolio-image-parallax');
		$('.index-classic-portfolio-demo .overlay, .index-classic-portfolio-demo .girl-with-an-umbrella').removeClass('show-parallax');

		$('.index-classic-portfolio-demo #title-slide-1').addClass('video-number');
		$('.index-classic-portfolio-demo #title-slide-2, .index-classic-portfolio-demo #title-slide-3').removeClass('video-number');
		
		$('.index-classic-portfolio-demo .bgTune').removeClass('hidden');
		$('.index-classic-portfolio-demo .header .content').css({"align-items": "start"});
		$('.index-classic-portfolio-demo #video1, .index-classic-portfolio-demo #video2, .index-classic-portfolio-demo #video3').removeClass('show-video');
		$('.index-classic-portfolio-demo .carouselTop__title span:nth-child(1)').css({"color": "#211C1C"});
		$('.index-classic-portfolio-demo .header__socialIcons').css({"display": "flex"});

		$('.index-classic-portfolio-demo .demo-alex, .index-classic-portfolio-demo .demo-alexF').removeClass('show-name');
		$('.index-classic-portfolio-demo .demo-milla').addClass('show-name');

		$('.index-classic-portfolio-demo .bgTune').removeClass('show-audio');
	});
	$('.index-classic-portfolio-demo #image-2').click(function() {
		$('.index-classic-portfolio-demo #image, .index-classic-portfolio-demo #parallax, .index-classic-portfolio-demo #audio, .index-classic-portfolio-demo #video-1, .index-classic-portfolio-demo #video-2, .index-classic-portfolio-demo #video-3').removeClass('active');
		$('.index-classic-portfolio-demo #image-2').addClass('active');

		$('.index-classic-portfolio-demo').removeClass('index-classic-portfolio-image-parallax');
		$('.index-classic-portfolio-demo .overlay, .index-classic-portfolio-demo .girl-with-an-umbrella').removeClass('show-parallax');

		$('.index-classic-portfolio-demo #title-slide-1').addClass('video-number');
		$('.index-classic-portfolio-demo #title-slide-2, .index-classic-portfolio-demo #title-slide-3').removeClass('video-number');
		
		$('.index-classic-portfolio-demo .bgTune').removeClass('hidden');
		$('.index-classic-portfolio-demo .header .content').css({"align-items": "center"});
		$('.index-classic-portfolio-demo #video1, .index-classic-portfolio-demo #video2, .index-classic-portfolio-demo #video3').removeClass('show-video');
		$('.index-classic-portfolio-demo .carouselTop__title span:nth-child(1)').css({"color": "#211C1C"});
		$('.index-classic-portfolio-demo .header__socialIcons').css({"display": "none"});

		$('.index-classic-portfolio-demo .demo-alex, .index-classic-portfolio-demo .demo-alexF').removeClass('show-name');
		$('.index-classic-portfolio-demo .demo-milla').addClass('show-name');

		$('.index-classic-portfolio-demo .bgTune').removeClass('show-audio');
	});
	$('.index-classic-portfolio-demo #parallax').click(function() {
		$('.index-classic-portfolio-demo #image, .index-classic-portfolio-demo #image-2, .index-classic-portfolio-demo #parallax, .index-classic-portfolio-demo #audio, .index-classic-portfolio-demo #video-1, .index-classic-portfolio-demo #video-2, .index-classic-portfolio-demo #video-3').removeClass('active');
		$('.index-classic-portfolio-demo #parallax').addClass('active');
		
		$('.index-classic-portfolio-demo').addClass('index-classic-portfolio-image-parallax');
		$('.index-classic-portfolio-demo .overlay, .index-classic-portfolio-demo .girl-with-an-umbrella').addClass('show-parallax');
		$('.index-classic-portfolio-demo #title-slide-1').addClass('video-number');
		$('.index-classic-portfolio-demo #title-slide-2, .index-classic-portfolio-demo #title-slide-3').removeClass('video-number');
		
		$('.index-classic-portfolio-demo .bgTune').removeClass('hidden');
		$('.index-classic-portfolio-demo .header .content').css({"align-items": "left"});
		$('.index-classic-portfolio-demo #video1, .index-classic-portfolio-demo #video2, .index-classic-portfolio-demo #video3').removeClass('show-video');
		$('.index-classic-portfolio-demo .carouselTop__title span:nth-child(1)').css({"color": "#211C1C"});
		$('.index-classic-portfolio-demo .header__socialIcons').css({"display": "none"});

		$('.index-classic-portfolio-demo .demo-alex, .index-classic-portfolio-demo .demo-alexF').removeClass('show-name');
		$('.index-classic-portfolio-demo .demo-milla').addClass('show-name');

		$('.index-classic-portfolio-demo .bgTune').removeClass('show-audio');
	});

	$('.index-classic-portfolio-demo #audio').click(function() {
		$('.index-classic-portfolio-demo #image, .index-classic-portfolio-demo #image-2, .index-classic-portfolio-demo #parallax, .index-classic-portfolio-demo #video-1, .index-classic-portfolio-demo #video-2, .index-classic-portfolio-demo #video-3').removeClass('active');
		$('.index-classic-portfolio-demo #audio').addClass('active');
		$('.index-classic-portfolio-demo .bgTune').addClass('show-audio');

		$('.index-classic-portfolio-demo').removeClass('index-classic-portfolio-image-parallax');
		$('.index-classic-portfolio-demo .overlay, .index-classic-portfolio-demo .girl-with-an-umbrella').removeClass('show-parallax');

		$('.index-classic-portfolio-demo #title-slide-1').addClass('video-number');
		$('.index-classic-portfolio-demo #title-slide-2, .index-classic-portfolio-demo #title-slide-3').removeClass('video-number');
		
		$('.index-classic-portfolio-demo .bgTune').removeClass('hidden');
		$('.index-classic-portfolio-demo .header .content').css({"align-items": "left"});
		$('.index-classic-portfolio-demo #video1, .index-classic-portfolio-demo #video2, .index-classic-portfolio-demo #video3').removeClass('show-video');
		$('.index-classic-portfolio-demo .carouselTop__title span:nth-child(1)').css({"color": "#211C1C"});
		$('.index-classic-portfolio-demo .header__socialIcons').css({"display": "none"});

		$('.index-classic-portfolio-demo .demo-alex, .index-classic-portfolio-demo .demo-alexF').removeClass('show-name');
		$('.index-classic-portfolio-demo .demo-milla').addClass('show-name');
	});
	$('.index-classic-portfolio-demo #video-1').click(function() {
		$('.index-classic-portfolio-demo #image, .index-classic-portfolio-demo #image-2, .index-classic-portfolio-demo #parallax, .index-classic-portfolio-demo #audio, .index-classic-portfolio-demo #video-2, .index-classic-portfolio-demo #video-3').removeClass('active');
		$('.index-classic-portfolio-demo #video-1').addClass('active');

		$('.index-classic-portfolio-demo').removeClass('index-classic-portfolio-image-parallax');
		$('.index-classic-portfolio-demo .overlay, .index-classic-portfolio-demo .girl-with-an-umbrella').removeClass('show-parallax');

		$('.index-classic-portfolio-demo #title-slide-1').addClass('video-number');
		$('.index-classic-portfolio-demo #title-slide-2, .index-classic-portfolio-demo #title-slide-3').removeClass('video-number');

		$('.index-classic-portfolio-demo .header .content').css({"align-items": "start"});
		$('.index-classic-portfolio-demo #video2, .index-classic-portfolio-demo #video3').removeClass('show-video');
		$('.index-classic-portfolio-demo #video1').addClass('show-video');
		$('.index-classic-portfolio-demo .carouselTop__title span:nth-child(1)').css({"color": "#F19000"});
		$('.index-classic-portfolio-demo .header__socialIcons').css({"display": "none"});

		$('.index-classic-portfolio-demo .demo-alex, .index-classic-portfolio-demo .demo-alexF').removeClass('show-name');
		$('.index-classic-portfolio-demo .demo-milla').addClass('show-name');

		$('.index-classic-portfolio-demo .bgTune').removeClass('show-audio');
	});
	$('.index-classic-portfolio-demo #video-2').click(function() {
		$('.index-classic-portfolio-demo #image, .index-classic-portfolio-demo #image-2, .index-classic-portfolio-demo #parallax, .index-classic-portfolio-demo #audio, .index-classic-portfolio-demo #video-1, .index-classic-portfolio-demo #video-3').removeClass('active');
		$('.index-classic-portfolio-demo #video-2').addClass('active');

		$('.index-classic-portfolio-demo').removeClass('index-classic-portfolio-image-parallax');
		$('.index-classic-portfolio-demo .overlay, .index-classic-portfolio-demo .girl-with-an-umbrella').removeClass('show-parallax');

		$('.index-classic-portfolio-demo #title-slide-2').addClass('video-number');
		$('.index-classic-portfolio-demo #title-slide-1, .index-classic-portfolio-demo #title-slide-3').removeClass('video-number');

		$('.index-classic-portfolio-demo .header .content').css({"align-items": "start"});
		$('.index-classic-portfolio-demo #video1, .index-classic-portfolio-demo #video3').removeClass('show-video');
		$('.index-classic-portfolio-demo #video2').addClass('show-video');
		$('.index-classic-portfolio-demo .carouselTop__title span:nth-child(1)').css({"color": "#F19000"});
		$('.index-classic-portfolio-demo .header__socialIcons').css({"display": "none"});

		$('.index-classic-portfolio-demo .demo-milla, .index-classic-portfolio-demo .demo-alexF').removeClass('show-name');
		$('.index-classic-portfolio-demo .demo-alex').addClass('show-name');

		$('.index-classic-portfolio-demo .bgTune').removeClass('show-audio');
	});
	$('.index-classic-portfolio-demo #video-3').click(function() {
		$('.index-classic-portfolio-demo #image, .index-classic-portfolio-demo #image-2, .index-classic-portfolio-demo #parallax, .index-classic-portfolio-demo #audio, .index-classic-portfolio-demo #video-1, .index-classic-portfolio-demo #video-2').removeClass('active');
		$('.index-classic-portfolio-demo #video-3').addClass('active');

		$('.index-classic-portfolio-demo').removeClass('index-classic-portfolio-image-parallax');
		$('.index-classic-portfolio-demo .overlay, .index-classic-portfolio-demo .girl-with-an-umbrella').removeClass('show-parallax');

		$('.index-classic-portfolio-demo #title-slide-3').addClass('video-number');
		$('.index-classic-portfolio-demo #title-slide-1, .index-classic-portfolio-demo #title-slide-2').removeClass('video-number');
		
		$('.index-classic-portfolio-demo .header .content').css({"align-items": "start"});
		$('.index-classic-portfolio-demo #video1, .index-classic-portfolio-demo #video2').removeClass('show-video');
		$('.index-classic-portfolio-demo #video3').addClass('show-video');
		$('.index-classic-portfolio-demo .carouselTop__title span:nth-child(1)').css({"color": "#F19000"});
		$('.index-classic-portfolio-demo .header__socialIcons').css({"display": "none"});

		$('.index-classic-portfolio-demo .demo-milla, .index-classic-portfolio-demo .demo-alex').removeClass('show-name');
		$('.index-classic-portfolio-demo .demo-alexF').addClass('show-name');

		$('.index-classic-portfolio-demo .bgTune').removeClass('show-audio');
	});
});