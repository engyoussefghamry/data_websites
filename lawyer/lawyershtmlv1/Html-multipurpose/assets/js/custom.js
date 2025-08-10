/* ---------------------
	CUSTOM JS DOCUMENT 
--------------------- */

$(window).on("load", function() {

    "use strict";
	 
	 var preLoader= jQuery('.preloader');
	 var barChart= jQuery("#bar-chart");	
	 var countNumber= jQuery(".count-number");
	 var body= jQuery('body');	   
	 var clockdiv= jQuery("#clockdiv");
	 var chat_body= jQuery('#chat-body1');
	 var chat_head= jQuery('#chat-head1');
	 var msg_head= jQuery('#msg-head1');
	 var msg_wrap= jQuery('#msg-wrap1');
	 
	 var chat_body1= jQuery('#chat-body');
	 var chat_head1= jQuery('#chat-head');
	 var msg_head1= jQuery('#msg-head');
	 var msg_wrap1= jQuery('#msg-wrap');
	 var colors= jQuery("#colors");
	 var color= jQuery(".color" );
	 var color1= jQuery(".color1" );
	 var color2= jQuery(".color2" );
	 var color3= jQuery(".color3" );
	 var color4= jQuery(".color4" );
	 var color5= jQuery(".color5" );
	 var color6= jQuery(".color6" );
	 var color7= jQuery(".color7" );
	 var style_switcher_h2_a= jQuery('#style-switcher h2 a');
	 var style_Switcher= jQuery('#style-switcher');
	 var style_Color= jQuery('.colors li a');
	 var chartSource={
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
					color: "#f55e45"
				}
				};
	/* ---------------------	
    	PreLoader
    --------------------- */
	
    preLoader.fadeOut();
	
	/* ---------------------	
    	Simple Bar Chart
    --------------------- */    
    
	if(barChart.length){
		loadChart();
		/*barChart.appear(function() {
			$(this).dxChart(chartSource);
			
		});*/
	}
	
	/*==============================
		load chart
	==============================*/
	function loadChart(){
		barChart.appear(function() {
		$(this).dxChart(chartSource);
		});
	}
	/*==============================
	STYLE SWITCHER SCRIPT INSTALLATION
	===============================*/
    
    color.on('click',function(){		
		colors.attr("href", "assets/css/color.css" );	
		chartSource.series.color="#f55e45";	
		loadChart();		
		return false;
	});

	color1.on('click',function(){		
		colors.attr("href", "assets/css/color1.css" );
	    chartSource.series.color="#e4b855";  
		loadChart();		     
		return false;
	});

	color2.on('click',function(){
		colors.attr("href", "assets/css/color2.css" );
		chartSource.series.color="#f53d3d";	
		loadChart();			
		return false;
	});

	color3.on('click',function(){
		colors.attr("href", "assets/css/color3.css" );
		chartSource.series.color="#3598db";	
		loadChart();			
		return false;
	});

	color4.on('click',function(){
		colors.attr("href", "assets/css/color4.css" );
		chartSource.series.color="#23acb4";	
		loadChart();			
		return false;
	});

	color5.on('click',function(){
		colors.attr("href", "assets/css/color5.css" );
		chartSource.series.color="#685ab1";	
		loadChart();			
		return false;
	});

	color6.on('click',function(){
		colors.attr("href", "assets/css/color6.css" );
		chartSource.series.color="#b3ccb9";	
		loadChart();			
		return false;
	});

	color7.on('click',function(){
		colors.attr("href", "assets/css/color7.css" );
		chartSource.series.color="#b8a279";	
		loadChart();			
		return false;
	});
	
	// Style Switcher	
	style_Switcher.animate({
		left: '-220px'
	});

	style_switcher_h2_a.on('click',function(e){
		e.preventDefault();
		var div = $('#style-switcher');
		//console.log(div.css('left'));
		if (div.css('left') === '-220px') {
			style_Switcher.animate({
				left: '0px'
			}); 
		} else {
			style_Switcher.animate({
				left: '-220px'
			});
		}
	});

	style_Color.on('click',function(e){
		e.preventDefault();
		$(this).parent().parent().find('a').removeClass('active');
		$(this).addClass('active');
	});
    



  
    /* ---------------------	
		Fun Factor / Counter
    /* --------------------- */
    countNumber.appear(function() {
        $(this).each(function() {
            var datacount = $(this).attr('data-count');
            $(this).find('.counter').delay(6000).countTo({
                from: 10,
                to: datacount,
                speed: 3000,
                refreshInterval: 50,
            });
        });
    });

	/* ---------------------	
	Chat Popup
    /* --------------------- */	

    chat_body.hide();	 	 
	chat_head.click(function(){
		chat_body.slideToggle('slow');
	});
	
	msg_head.click(function(){
		msg_wrap.slideToggle('slow');
	});
	
	chat_body1.hide();	 	 
	chat_head1.click(function(){
		chat_body1.slideToggle('slow');
	});
	
	msg_head1.click(function(){
		msg_wrap1.slideToggle('slow');
	});
	
	
    /* ---------------------	
		Mac detection
    /* --------------------- */
 
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {		
		body.addClass('safari-mac'); 		
	}
	
	/* ---------------------	
			Main Slider Calling
    /* --------------------- */

    homePageSliderInit();

    /* ---------------------	
		All owl Carousels Calling
    /* --------------------- */

    owlCarouselInit();

	 /* ---------------------	
		Coming soon counter Setting
	/* --------------------- */
	
	if(clockdiv.length){
		var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
		initializeClock('clockdiv', deadline);
	}
	if(clockdiv.length){
		var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
		initializeClock('clockdiv1', deadline);
	}
	if(clockdiv.length){
		var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
		initializeClock('clockdiv2', deadline);
	}
	if(clockdiv.length){
		var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
		initializeClock('clockdiv3', deadline);
	}
	
});




/*******************************************
	Main Slider
*******************************************/

function homePageSliderInit() {
	
    "use strict";
	var tpBanner= jQuery('.tp-banner');
    tpBanner.show().revolution({
        dottedOverlay: "none",
        delay: 16000,
        startwidth: 1170,
        startheight: 870,
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
	
    var owlExample= jQuery("#owl-example");
	var owlExample1= jQuery("#owl-example1");
	var owlExample2= jQuery("#owl-example2");
	var owlExample3= jQuery("#owl-example3");
	var owlExample4= jQuery("#owl-example4");
	var owlExample6= jQuery("#owl-example6");
	var owlExample7= jQuery("#owl-example7");
	var owlExample8= jQuery("#owl-example8");
	var owlExample9= jQuery("#owl-example9");
	var owlAbout= jQuery("#owl-about");
	var owlSidebar= jQuery('.owl-sidebar')
	
	
	if(owlExample.length){
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
			items: 3,
			navigation: false, // Show next and prev buttons
			slideSpeed: 300,
			paginationSpeed: 400,
			singleItem: false,
			pagination: true
		});
	}
	if (owlExample3.length) {
		owlExample3.owlCarousel({
			items: 4,
			navigation: true, // Show next and prev buttons
			slideSpeed: 300,
			paginationSpeed: 400,
			singleItem: false,
			pagination: false
		});
	}
	if (owlExample4.length) {
		owlExample4.owlCarousel({
			items: 4,
			navigation: true, // Show next and prev buttons
			slideSpeed: 300,
			paginationSpeed: 400,
			singleItem: false,
			pagination: false
		});
	}
	if (owlAbout.length) {
		owlAbout.owlCarousel({
			items: 1,
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
	if (owlExample8.length) {
		owlExample8.owlCarousel({
			items: 2,
			navigation: true, // Show next and prev buttons
			slideSpeed: 300,
			paginationSpeed: 400,
			singleItem: false,
			pagination: false
		});
	}	
	if (owlExample9.length) {
		owlExample9.owlCarousel({
			items: 1,
			navigation: true, // Show next and prev buttons
			slideSpeed: 300,
			paginationSpeed: 400,
			singleItem: true,
			pagination: false
		});
	}

	
    /**********owl custom option*************/
    if (owlSidebar.length) {
        owlSidebar.each(function(index) {
            var effect_mode = $(this).data('effect');
            var autoplay = $(this).data('autoplay');
            var navigation = $(this).data('navigation');
            var pagination = $(this).data('pagination');
            var singleitem = $(this).data('singleitem');
            var items = $(this).data('items');
            $(this).owlCarousel({
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

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}


