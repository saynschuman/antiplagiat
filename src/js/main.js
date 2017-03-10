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
		$('.look').fadeOut(300);
		$('.question').fadeOut(300);
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