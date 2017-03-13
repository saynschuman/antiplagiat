(function ($) {

      // Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {};

    $('.adv').masonry({
	  itemSelector: '.col'
	});

	$('video').on('play', function(){
		setTimeout(function(){
			$('.look').animate({
				'opacity': 0,
				left: -200
			});
			$('.question').animate({
				'opacity': 0,
				left: -200
			});		
		}, 200);
	})

	// $( "main .advantages .adv img" ).hover(
	//   function() {
	//     $(this).addClass('animated pulse');	       
	//   }, function() {
	//     $(this).removeClass('pulse');	       
	//   }
	// );	

	new WOW().init();

}(jQuery));