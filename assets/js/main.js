(function ($) {
"use strict";








// owlCarousel
$('.s_slider').owlCarousel({
    loop:true,
    margin:0,
	items:2,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        992:{
            items:2
        }
    }
})



// owlCarousel
$('.d_w_slider').owlCarousel({
	loop:true,
	margin:0,
	items:1,
	navText:['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
	nav:true,
	dots:false,
	responsive:{
		0:{
			items:1
		},
		767:{
			items:1
		},
		992:{
			items:1
		}
	}
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});




// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();

// niceSelect
$(document).ready(function() {
	$('select').niceSelect();
  });

})(jQuery);