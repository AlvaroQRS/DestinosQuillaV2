(function() {
	'use strict';
  
	var btnScrollDown = document.querySelector('#scroll_down');
  
	function scrollDown() {
	  var windowCoords = document.documentElement.clientHeight;
	  (function scroll() {
		if (window.pageYOffset < windowCoords) {
		  window.scrollBy(0, 10);
		  setTimeout(scroll, 0);
		}
		if (window.pageYOffset > windowCoords) {
		  window.scrollTo(0, windowCoords);
		}
	  })();
	}
  
	btnScrollDown.addEventListener('click', scrollDown);
  })();
  // validate form
function validateForm() {
    document.getElementById('status').innerHTML = "Sending...";
    formData = {
        'name'     : $('input[name=name]').val(),
        'email'    : $('input[name=email]').val(),
        'subject'  : $('input[name=subject]').val(),
        'message'  : $('textarea[name=message]').val(),
    };
   $.ajax({
    url : "../config/enviar.php",
    type: "POST",
    data : formData,
    success: function(data)
    {
        $('#status').text(data.message);
        if (data.code) //If mail was sent successfully, reset the form.
        $('#contact-form').closest('form').find("input[type=text], textarea").val("");
    },
    error: function (jqXHR)
    {
        $('#status').text(jqXHR);
    }
});
}
// 
function validateForm2() {
    document.getElementById('status').innerHTML = "Sending...";
    formData = {
        'name'     : $('input[name=name]').val(),
        'email'    : $('input[name=email]').val(),
        'subject'  : $('input[name=subject]').val(),
        'message'  : $('textarea[name=message]').val(),
        'cmethod'  : $('input:radio[name=cmethod]:checked').val()
    };
   $.ajax({
    url : "../config/paquetes.php",
    type: "POST",
    data : formData,
    success: function(data)
    {
        $('#status').text(data.message);
        if (data.code) //If mail was sent successfully, reset the form.
        $('#contact-form').closest('form').find("input[type=text], textarea").val("");
    },
    error: function (jqXHR)
    {
        $('#status').text(jqXHR);
    }
});
}
// social Share
$(function() {
	/*Define some constants */
	const ARTICLE_TITLE =  document.title;
	const ARTICLE_URL = encodeURIComponent(window.location.href);
	const MAIN_IMAGE_URL = encodeURIComponent($('meta[property="og:image"]').attr('content'));

	$('.share-facebook').click(function(){
		open_window('http://www.facebook.com/sharer/sharer.php?u='+ARTICLE_URL, 'facebook_share');
	});

	$('.share-twitter').click(function(){
		open_window('http://twitter.com/share?url='+ARTICLE_URL, 'twitter_share');
	});

	function open_window(url, name){
		window.open(url, name, 'height=320, width=640, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, directories=no, status=no');
	}
});
