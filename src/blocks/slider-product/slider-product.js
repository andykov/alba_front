// .slider-product scripts goes here 

$(function() {
    if($('.js-slider-product-recommended').length) {
        $('.js-slider-product-recommended').slick({
            mobileFirst: true,
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            centerPadding: '0',
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1920,
                    settings: {
                        centerPadding: '336px',
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: '97px',
                        arrows: true

                    }
                }
                ,
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        centerPadding: '150px'
                    }
                }
            ]
        });
      $('.js-slider-product-related').slick({
        mobileFirst: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        centerPadding: '0',
        centerMode: true,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    centerPadding: '336px'
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '97px',
                    arrows: true

                }
            }
            ,
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    centerPadding: '150px'
                }
            }
        ]
      });
      $('.js-slider-product-recently-watched').slick({
        mobileFirst: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        centerPadding: '0',
        centerMode: true,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    centerPadding: '336px'
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '97px',
                    arrows: true

                }
            }
            ,
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    centerPadding: '150px'
                }
            }
        ]
      })

    }
});