// .slider-product scripts goes here 

$(function() {
    if($('.js-slider-product').length) {
        $('.js-slider-product').slick({
            mobileFirst: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            centerPadding: '20px',
            centerMode: true,
            // variableWidth: true,
            responsive: [
                {
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 5,
                        centerPadding: '0'
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                        centerPadding: '0'
                    }
                }
            ]
        });
    }
});