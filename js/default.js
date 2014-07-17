
var menu = false;

function resize() {
	$('body').css('font-size', Math.max($(window).width(), $(window).height()) / (50 + Math.max($(window).width(), $(window).height()) / 20));
}

$(document).ready(resize);

$(window).resize(resize);

$('nav span:last-child').click(function() {
	menu = !menu;
	if (menu) {
		$(this).css('color', '#2980b9');
		$('div#container').css('right', '50%');
		$('div#menu').css('right', '0');
	}
	else {
		$(this).css('color', '');
		$('div#container').css('right', '0');
		$('div#menu').css('right', '-50%');
	}
});
