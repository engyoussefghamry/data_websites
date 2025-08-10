$(document).ready(function() {
	
	"use strict";

	$("#contactPopupForm").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			url: "feedback-popup.php",
			cache: false,
			type: "POST",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					$('#contactFormPopup .good-send').fadeIn();
					setTimeout(function() {
						$('.resetPopupForm').val('');
					}, 2000);
					setTimeout(function() {
						$('#contactFormPopup .good-send').fadeOut();
					}, 4000);
				}
				else {result = msg;}
			}
		});
		return false;
	});

	$("#contactForm").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			url: "feedback.php",
			cache: false,
			type: "POST",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					$('#sent').fadeIn(); // Smooth message with identifier #sent after sending
					setTimeout(function() {
						$('.reset').val(''); // Clearing form fields with class reset after submit
						$('#sent').fadeOut(); // Smooth message with identifier #sent after sending
					}, 3000); // after 3 seconds
				}
				else {result = msg;}
			}
		});
		return false;
	});
});