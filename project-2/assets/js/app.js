var scroll_position = 0;
var window_height   = $(window).height();
var max_morning     = window_height;
var max_afternoon   = window_height * 2;
var max_evening     = window_height * 3;


$(window).scroll(function() {
 var percentScrolled = $(window).scrollTop()/$(window).height();
 var percentScrolled2 = ($(window).scrollTop()-($(window).height()*2))/$(window).height();
 var percentScrolled3 = ($(window).scrollTop()-($(window).height()*3))/$(window).height();
 var percentScrolled4 = ($(window).scrollTop()-($(window).height()*4))/$(window).height();
	$(".morning").css("opacity",percentScrolled)
	$(".mid-day").css("opacity",percentScrolled2)
	$(".mid-noon").css("opacity",percentScrolled3)
	$(".night").css("opacity",percentScrolled4)

	scroll_position = $(window).scrollTop();

if(percentScrolled2 > 0) {
	$(".morning").hide()
} else {
	$(".morning").show()
}

if(percentScrolled3 > 0) {
	$(".mid-day").hide()
} else {
	$(".mid-day").show()
}

if(percentScrolled4 > 0) {
	$(".mid-noon").hide()
} else {
	$(".mid-noon").show()
}

	if (scroll_position >= max_morning) {
		console.log('it is morning');
	} else if (scroll_position > max_morning && scroll_position <= max_afternoon) {
		console.log('it is afternoon');
	}
});