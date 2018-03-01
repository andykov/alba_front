$(function () {
	if ($('.js-slider-checkout').length) {
		$('.js-slider-checkout').slick({
			slidesToShow: 5,
			arrows: true,
			centerPadding: '113px', // ширина выступающей картинки (100px) + половина отступа между слайдами (20px)
			prevArrow: $('.js-slider-product-prev'),
			nextArrow: $('.js-slider-product-next'),
			dots: false,
			speed: 300,
			centerMode: true,

			responsive: [
				{
					breakpoint: 767,
					settings: {
						arrows: false,
						slidesToShow: 2,
						variableWidth: true,
						centerMode: false,
						rows: 1
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						rows: 2,
						centerPadding: '0'
					}
				},
				{
					breakpoint: 1199,
					settings: {
						slidesToShow: 4,
						centerPadding: '32px' // ширина выступающей картинки (20px) + половина отступа между слайдами (12px)
					}
				},
				{
					breakpoint: 1799,
					settings: {
						centerPadding: '59px'
					}
				}

			]
		});
	}

});
