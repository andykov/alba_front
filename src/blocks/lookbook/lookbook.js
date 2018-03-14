// .lookbook scripts goes here

$(function() {
	$(".js-slider-lookbook").slick({
		arrows: false,
		variableWidth: true,
		autoplay: true
	})


	var sliderMargin;

	$(window).on('resize load', function () {
		sliderMargin = 0;

		if (window.matchMedia('(min-width: 768px)').matches) {
			sliderMargin = -($(window).width() - 720) / 2;
		}

		if (window.matchMedia('(min-width: 992px)').matches) {
			sliderMargin = -($(window).width() - 960) / 2;
			if (sliderMargin < -32) {
				sliderMargin = -32;
			}
		}

		if (window.matchMedia('(min-width: 1366px)').matches) {
			sliderMargin = -($(window).width() - 1248) / 2;
			if (sliderMargin < -59) {
				sliderMargin = -59;
			}
		}

		if (window.matchMedia('(min-width: 1800px)').matches) {
			sliderMargin = -($(window).width() - 1680) / 2;
			if (sliderMargin < -120) {
				sliderMargin = -120;
			}
		}

		$(".js-slider-lookbook").css({'margin-right': sliderMargin + 'px'})
	})
});