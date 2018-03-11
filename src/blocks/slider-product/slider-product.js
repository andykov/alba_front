$(function () {
	if ($('.js-slider-product').length) {
		$('.js-slider-product').slick({
			arrows: true,
			centerPadding: '120px', // ширина выступающей картинки (100px) + половина отступа между слайдами (20px)
			dots: false,
			speed: 300,
			slidesToShow: 5,
			centerMode: true,

			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						variableWidth: true,
						centerMode: false,
						rows: 1,
						arrows: false
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						rows: 2,
						centerPadding: '0',
						arrows: false
					}
				},
				{
					breakpoint: 1199,
					settings: {
						centerPadding: '32px', // ширина выступающей картинки (20px) + половина отступа между слайдами (12px)
						slidesToShow: 4

					}
				},
				{
					breakpoint: 1799,
					settings: {
						slidesToShow: 5,
						centerPadding: '59px'
					}
				}

			]
		});
	}

})