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

	$('.mobile-button').click(function(){
		$('header nav ul').toggleClass('top0');
	})
	$('.close').click(function(){
		$('header nav ul').toggleClass('top0');
	})

	new WOW().init();

}(jQuery));