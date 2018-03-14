// .slider-sale scripts goes here 

$(function() {
    //
    if($('.js-slider-sale').length) {
        $('.js-slider-sale').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 4
                    }
                }
            ]
        });
    }

});