// .slider-round scripts goes here 
function slickMobile (slider, settings) {
  if ($(window).width() > 767) {
    if (slider.hasClass('slick-initialized')) {
      slider.slick('unslick');
    }
    return
  }
  if (!slider.hasClass('slick-initialized')) {
    return slider.slick(settings);
  }
};

var roundCommonSlider = $('.js-slider-round');
var roundCommonSettingsSlider = {
  variableWidth: true,
  arrows: true,
  nextArrow: $('.js-arrow-round-next'),
  prevArrow: $('.js-arrow-round-prev')
};

$(window).on('load resize', function () {
  slickMobile(roundCommonSlider, roundCommonSettingsSlider);
});
$(function () {
// включение слайдера на мобильном


	var $sliderRound_1 = $('.js-slider-round .slider-round__item--1'),
		$sliderRound_2 = $('.js-slider-round .slider-round__item--2'),
		$sliderRound_3 = $('.js-slider-round .slider-round__item--3'),
		$sliderRound_4 = $('.js-slider-round .slider-round__item--4'),
		$sliderRound_5 = $('.js-slider-round .slider-round__item--5'),
		$sliderRound_6 = $('.js-slider-round .slider-round__item--6');


	$sliderRound_1.slick({
		infinite: false,
		autoplaySpeed: 1000,
		speed: 800,
		asNavFor: '.slider-round__item',
		arrows: true,
		nextArrow: $('.js-arrow-round-next'),
		prevArrow: $('.js-arrow-round-prev'),
		swipe: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false
				}
			}
		]
	});
	$sliderRound_2.slick({
		infinite: false,
		autoplaySpeed: 1000,
		speed: 800,
		asNavFor: '.slider-round__item',
		vertical: true,
		verticalSwiping: true,
		arrows: true,
		nextArrow: $('.js-arrow-round-next'),
		prevArrow: $('.js-arrow-round-prev'),
		swipe: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false
				}
			}
		]
	});
	$sliderRound_3.slick({
		infinite: false,
		autoplaySpeed: 1000,
		speed: 800,
		asNavFor: '.slider-round__item',
		vertical: true,
		verticalSwiping: true,
		arrows: true,
		nextArrow: $('.js-arrow-round-next'),
		prevArrow: $('.js-arrow-round-prev'),
		swipe: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false
				}
			}
		]
	});
	$sliderRound_4.slick({
		infinite: false,
		autoplaySpeed: 1000,
		speed: 800,
		asNavFor: '.slider-round__item',
		arrows: true,
		nextArrow: $('.js-arrow-round-next'),
		prevArrow: $('.js-arrow-round-prev'),
		swipe: false,

		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false
				}
			}
		]
	});
	$sliderRound_5.slick({
		infinite: false,
		autoplaySpeed: 1000,
		speed: 800,
		asNavFor: '.slider-round__item',
		arrows: true,
		nextArrow: $('.js-arrow-round-next'),
		prevArrow: $('.js-arrow-round-prev'),
		swipe: false,

		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false
				}
			}
		]
	});
	$sliderRound_6.slick({
		infinite: false,
		autoplaySpeed: 1000,
		speed: 800,
		asNavFor: '.slider-round__item',
		arrows: true,
		nextArrow: $('.js-arrow-round-next'),
		prevArrow: $('.js-arrow-round-prev'),
		swipe: false,

		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false
				}
			}
		]
	});
});