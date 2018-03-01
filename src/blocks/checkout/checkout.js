if ($('.js-slider-checkout').length) {
  $('.js-slider-checkout').slick({
    mobileFirst: true,
    dots: false,
    arrows: false,
    speed: 300,
    slidesToShow: 2,
    centerPadding: '0',
    centerMode: true,
    prevArrow: $('.js-slider-product-prev'),
    nextArrow: $('.js-slider-product-next'),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          rows: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          arrows: true,
          rows: 1,
          centerPadding: '32px' // ширина выступающей картинки (20px) + половина отступа между слайдами (12px)
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          arrows: true,
          centerPadding: '59px'
        }
      },
      {
        breakpoint: 1799,
        settings: {
          slidesToShow: 5,
          arrows: true,
          centerPadding: '113px' // ширина выступающей картинки (100px) + половина отступа между слайдами (20px)
        }
      }

    ]
  });
}
