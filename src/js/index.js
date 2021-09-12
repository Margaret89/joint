import {$} from './common';

// $(window).scroll(function(){
// 	if($(this).scrollTop()>300){
// 		$('.js-move-up').addClass('visible');
// 	}else{
// 		$('.js-move-up').removeClass('visible');
// 	}
// });
// $('.js-move-up').click(function(){$('body,html').animate({scrollTop:0},800);return false;});

// Слайдер партнеров
if($('.js-partners-slider').length){
	$('.js-partners-slider').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arrow-left" width="22" height="18"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arrow-right" width="22" height="18"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
		// // responsive: [
		// 	{
		// 		breakpoint: 992,
		// 		settings: {
		// 			slidesToShow: 2,
		// 			slidesToScroll: 1,
		// 			variableWidth: false,
		// 			dots: false,
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1,
		// 			variableWidth: false,
		// 			dots: true,
		// 		}
		// 	},
		// ]
	});
}

// offer slider
if($('.js-sect-slider').length){
	$('.js-sect-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		infinite: false,
		prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arrow-left" width="22" height="18"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arrow-right" width="22" height="18"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
		// responsive: [
		// 	{
		// 		breakpoint: 992,
		// 		settings: {
		// 			slidesToShow: 2,
		// 			slidesToScroll: 1,
		// 			variableWidth: false,
		// 			dots: false,
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1,
		// 			variableWidth: false,
		// 			dots: true,
		// 		}
		// 	},
		// ]
	});
}
