$(document).ready(function () {
	$("#appylynow").submit(function (event) {
		event.preventDefault();
		var frmmsg = true;
		var formData = new FormData($(this)[0]);
		var txtname = $("#txtname").val();
		var txtmobile = $("#txtmobile").val();
		var txtemail = $("#txtemail").val();
		var services = $("#services").val();
		var captcha = $("#captcha").val();
		if (txtname === '' || txtname == 'forgotten your name?' || txtemail == 'Invalid name') {
			$('#txtname').addClass('error');
			$("#txtname").val('forgotten your name?');
			frmmsg = false;
		} else if (!(CheckAlphabet(txtname))) {
			$("#txtname").val('Invalid name');
			frmmsg = false;
		} else {
			$('#txtname').removeClass('error');
		}
		if (txtmobile == '' || txtmobile == 'Don\'t have Email id ?' || txtmobile == 'Invalid Email id') {
			$('#txtmobile').addClass('error');
			$("#txtmobile").val('forgotten your mobile number?');
			frmmsg = false;
		} else if (!(CheckDigits(txtmobile))) {
			$("#txtmobile").val('Invalid mobile number?');
			frmmsg = false;
		} else {
			$('#txtmobile').removeClass('error');
		}
		if (txtemail === '' || txtemail == 'Don\'t have Email id ?' || txtemail == 'Invalid Email id') {
			$('#txtemail').addClass('error');
			$("#txtemail").val('Don\'t have Email id ?');
			frmmsg = false;
		} else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(txtemail))) {
			$('#txtemail').addClass('error');
			$("#txtemail").val('Invalid Email id');
			frmmsg = false;
		} else {
			$('#txtname').removeClass('error');
		}
		if (services == '') {
			$("#serviceserr").html('Please select services');
			frmmsg = false;
		} else {
			$("#serviceserr").css('display', 'none');
		}
		var fileName = $("#uploadfile").val();
		var exts = ['doc', 'docx', 'pdf'];
		if (fileName != '') {
			var get_ext = fileName.split('.');
			get_ext = get_ext.reverse();
			var fsize = $('#uploadfile')[0].files[0].size;
			if (fsize / 1024 > 300) {
				$("#uploadfileerr").html('Oh no, you want to check it again');
				$("#uploadfileerr").css('display', 'block');
				frmmsg = false;
			} else if ($.inArray(get_ext[0].toLowerCase(), exts) >= 0 && $.inArray(get_ext[0].toLowerCase(), exts) < 3) {
				$("#uploadfileerr").css('display', 'none');
			} else {
				$("#uploadfileerr").html('Please upload pdf,doc,docx file only');
				$("#uploadfileerr").css('display', 'block');
				frmmsg = false;
			}

		} else {
			$("#uploadfileerr").html('Please select file');
			frmmsg = false;
		}
		// if (captcha.trim() == '') {
		// 	$('#captcha').addClass('error');
		// 	$("#captcha").val('Enter Captcha');
		// 	frmmsg = false;
		// } else if (!CheckDigits(captcha)) {
		// 	$('#captcha').html('Enter numeric value only');
		// 	$('#captcha').addClass('error');
		// 	frmmsg = false;
		// } else {
		// 	$('#captcha').removeClass('error');
		// }
		if (frmmsg) {
			$("#preview").html('<img src="images/loading.gif" alt="">');
			$.ajax({
				url: 'applynow',
				type: 'POST',
				data: formData,
				async: false,
				cache: false,
				contentType: false,
				processData: false,
				success: function (data) {
					if (data == 'Mail sent') {
						window.location.href = 'thank-you';
					} else if (data == 'Captcha') {
						$("#preview").html(' ');
						$('#captcha').addClass('error');
						$('#captcha').val('Invalid Captcha');
						return false;
					} else if (data == 'form error') {
						$('#preview').html('Please fill the form correctly');
						return false;
					} else {
						('#preview').html('Oops! mail not sended');
						return false;
					}
				},
				error: function () {
					alert("error in ajax form submission");
				}
			});
			return false;
		}
	});
});

function CheckAlphabet(character) {
	var valid = 1
	character = character.toUpperCase();
	var GoodChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ "
	var GoodChars1 = " "
	var i = 0
	if (character == "") {
		valid = 0
	}
	for (i = 0; i <= character.length - 1; i++) {
		if (GoodChars.indexOf(character.charAt(i)) == -1) {
			valid = 0
		}
	}
	return valid

}

function CheckDigits(TheNumber) {
	var valid = 1
	var GoodChars = "0123456789-+() "
	var i = 0
	if (TheNumber == "") {
		valid = 0
	}
	for (i = 0; i <= TheNumber.length - 1; i++) {
		if (GoodChars.indexOf(TheNumber.charAt(i)) == -1) {
			valid = 0
		}
	}
	return valid
}

$(document).ready(function () {
	$('.popupForm input[type=text], .popupForm input[type=email], .fileDiv textarea').click(function () {
		var $id = $('#' + $(this).attr("id")).hasClass('error');
		if ($id) {
			$('#' + $(this).attr("id")).removeClass('error');
			$('#' + $(this).attr("id")).val('');
		}
	});
});