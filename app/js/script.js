$(document).ready(function () {

	$(".hamburger").click(function (event) {
		$(".hamburger").toggleClass("is-active"),
			$(".header__menu").toggleClass("active"),
			$(".topbar_img").toggleClass("active_topbar"),
			$("body").toggleClass("lock");
	});

});