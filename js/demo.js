$(function() {
	/*返回顶部*/
	$(window).scroll(function() {
		if($(window).scrollTop() > 200) {
			$("#top").fadeIn();
		} else {
			$("#top").fadeOut();
		}
	});
	$("#top").click(function() {
		$("html,body").animate({
			"scrollTop": "0px"
		}, 500);
	});
})