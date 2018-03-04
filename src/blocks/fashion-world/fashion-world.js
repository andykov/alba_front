// .fashion-world scripts goes here 

$(function() {
	$(".js-fashion-world-slider").slick({
		// autoplay: true,
		appendArrows: $('.fashion-world-slider__nav'),
		prevArrow: $('.fashion-world-slider--prev'),
    nextArrow: $('.fashion-world-slider--next'),
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