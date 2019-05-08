// sal js
sal();
// wow
new WOW().init();

AOS.init({
	duration: 800,
	easing: 'slide'
});

// nagnific poup
$(document).ready(function() {
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		
	});

	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('div');
			}
		}
		
	});
	$('.map-gal').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
	});
  });
// scollax
$.Scrollax();
