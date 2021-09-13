import {$, Inputmask} from './common';

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
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					infinite: false,
					slidesToShow: 4.5,
					slidesToScroll: 4,
					arrows: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					infinite: false,
					slidesToShow: 3.5,
					slidesToScroll: 3,
					arrows: false,
				}
			},
		]
	});
}

// Слайдер разделов
if($('.js-sect-slider').length){
	$('.js-sect-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		infinite: false,
		prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arrow-left" width="22" height="18"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arrow-right" width="22" height="18"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			},
		]
	});
}

// Маска для телефона 
Inputmask('+3 (999) 999-9999').mask('.js-phone');

// Валидация форм
function errorField(form, event) {
	form.find('.js-form-site-item').removeClass('error');
	
	form.find('input[type=email]').each(function(){
		var email = $(this).val();
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/i;

		if (!pattern.test(email) && (email.length > 1)) {
			$(this).closest('.js-form-site-item').addClass('error');
		}
	});


	form.find('input,textarea,select').filter('[required]').each(function(){
		if($(this).val().length < 1){
			$(this).closest('.js-form-site-item').addClass('error');
		}
	});
	
	if(form.find('.js-form-site-item.error').length){
		event.preventDefault();
	}
}

if($('.js-valid-form').length){
	$('.js-valid-form').on('click', '.js-btn-submit', function(e){
		var $form = $(this).closest('form');
		errorField($form, e);
	});
}