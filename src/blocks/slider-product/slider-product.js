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
      $('.js-slider-product-related').slick({
        mobileFirst: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        centerPadding: '20px',
        centerMode: true,
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
      $('.js-slider-product-recently-watched').slick({
        mobileFirst: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        centerPadding: '20px',
        centerMode: true,
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
      })

    }
});