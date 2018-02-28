// .fashion-world scripts goes here 

$(function() {
	$(".js-fashion-world-slider").slick({
		// autoplay: true,
		appendArrows: $('.fashion-world-slider__nav'),
		prevArrow: $('.btn-slider--prev'),
    nextArrow: $('.btn-slider--next'),
		slidesToShow: 3,
		responsive: [{
			breakpoint: 1800,
	      settings: {
	        slidesToShow: 2
	      }
			}, {
			breakpoint: 992,
	      settings: {
	        slidesToShow: 1,
	        rows: 2
	      }
			}, {
			breakpoint: 768,
				settings: {
					arrows: false,
					variableWidth: true,
					rows: 1
				}
		}]
	})
	
});