$(document).ready(function(){
	$('.line').hover(function(){
		$(this).toggleClass('line').parents('li').next('li').find('a').toggleClass('line');
	});

	$('.nav ul li a.active').removeClass('line').parents('li').next('li').find('a').removeClass('line');

	$( function() {
	$( "#typeOfMotorcycles" ).selectmenu();
	$( "#productionYear" ).selectmenu();
	$( "#manufacturer" ).selectmenu();
	$( "#model" ).selectmenu();
	$( "#selMotorcycles" ).selectmenu();
	$( "#productionOil" ).selectmenu();
	});

	$('.btn-addFilter').click(function(){
		$('.filter-catalog').slideToggle("slow");
	});

	$('.toggleSlide').click(function(){
		$('.list-slide').slideToggle("slow");
	});

	$('.btn-menu-header').click(function(e){
		event.preventDefault();
		if ($(window).width() > 767) {
			$('.wr-header-nav').animate({width:"320px",right:"0"},400);
			$('body').addClass('b-fix');
		}else{
			$('.wr-header-nav').toggleClass('visited-menu');
			$('body').toggleClass('b-fix');
			$('.btn-menu-header .icn').toggleClass('close-menu');
		};
	});

	$('.btn-close').click(function(e){
		event.preventDefault();
		$('.wr-header-nav').animate({width:"0",right:"-33px"},400);
		$('body').removeClass('b-fix');
	 });

});