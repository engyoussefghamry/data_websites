(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]


/*-------------------------------------------
  js wow
--------------------------------------------- */
 new WOW().init();
/*-------------------------------------------
  js scrollup
--------------------------------------------- */
$.scrollUp({
	scrollText: '<i class="fa fa-angle-up"></i>',
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade'
}); 
/*-------------------------------------------
  jQuery MeanMenu
--------------------------------------------- */
jQuery(".main-menu").meanmenu();
	
/*-------------------------------------------
    isotope activation 
--------------------------------------------- */
//=================
$('container').imagesLoaded(function () {
	// filter items on button click
	$('.filtering-button').on('click', 'a', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
    });
    $('.filtering-button').on('click', 'a', function () {
        $('.filtering-button a').removeClass('active');
        $(this).addClass('active');
    });
	var $grid = $('.grid').isotope({
		// set itemSelector so .grid-sizer is not used in layout
		itemSelector: '.grid-item',
		percentPosition: true,
		animationOptions: {
			duration: 500,
			easing: 'zoom-in'
		},
		masonry: {
			// use element for option
			columnWidth: '.grid-item'
		},
		transitionDuration: '.9s'
	})
});

/*-------------------------------------------
slider-proimg
--------------------------------------------- */
$(".slider-proimg.owl-carousel").owlCarousel({
	loop:true,
	autoplay:true,
	autoplayTimeout:1000,
	autoplayHoverPause:true,
	smartSpeed:3000,
	autoplaySpeed:true,
	dots:false,
	nav:true,	  
	items : 1,
	navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
}); 

/*-------------------------------------------
magnificPopup
--------------------------------------------- */
$('.image-gallary').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
    });
});

/*-------------------------------------------
progress-bar
--------------------------------------------- */
$('.progress-bar').each(function() {

  var valueNow = $(this).attr('aria-valuenow');

  $(this).animate({
    
    width: valueNow + '%',

    percent: 100

  }, {

    progress: function(a, p, n) {

      $(this)
        .css('width', (valueNow * p + '%'))
        .html(Math.round(valueNow * p) + '%');

    }

  });

});

/*-------------------------------------------
google  map
--------------------------------------------- */
if ($('#gmap').length > 0) {
	new GMaps({
		div: '#gmap',
		lat: 23.7947172, // 23.7947172,90.3971412
		lng: 90.3971412,
		scrollwheel: false,				
		styles: [
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dddddd"
					},
					{
						"lightness": 20
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 17
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 29
					},
					{
						"weight": 0.2
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 18
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dddddd"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 21
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 21
					}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#ffffff"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			}
		]
	}).addMarker({
		lat: 23.792930, //23.792930, 90.403798
		lng: 90.403798,
		infoWindow: {
			content: '<p> loaction</p>'
		}
		});

}

})(jQuery);

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Photoshop',    20],
    ['Illustrator',      10],
    ['Corel Draw ',  20],
    ['3D Max', 10],
    ['Indesign',    10]
  ]);

  var chart = new google.visualization.PieChart(document.getElementById('pie'));
  chart.draw(data, {
    //title: '2D pie chart',
    is3D: false,
    legend: 'none',
    backgroundColor: 'transparent',
    pieSliceBorderColor: 'transparent',
    pieSliceText: 'none',
    colors: ['#ed1c24', '#f26522', '#f7941d', '#00a651', '#0054a6'],
    chartArea:{left:"5%",top:50,width:"100%"},
    tooltip: {textStyle: {color: 'black'}, showColorCode: true}
  });
}