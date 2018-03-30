// .slider-promo scripts goes here 

$(function () {

  $('.js-slider-big').slick({
    fade: true,
    arrows: true,
		prevArrow: $('.js-arrow-promo-prev'),
		nextArrow: $('.js-arrow-promo-next'),
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.js-slider-big-nav',
    infinite: false,
		responsive: [{
			breakpoint: 767,
			settings: {
				arrows: false
			}
		}
		]
  });
  $('.js-slider-big-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.js-slider-big',
    // centerMode: true,
    focusOnSelect: true,
    infinite: false,
    arrows: false
  });
  // $('.slider-promo__thumb-item').on(' load click', function () {
  //     var thumbIndex = $(this).index();
  //     var slideItem = $('.slider-promo__big-item').eq(thumbIndex);
  //     var slideItemMask = slideItem.find('.slider-promo-mask');
  //     slideItem.siblings().removeClass('active');
  //     slideItem.addClass('active');
  //     // console.log(slideItem);
  //     // var animate = slideItem.find('.mask-animate-down');
  //
  //     // console.log(slideItemMask);
  //     // thumbIndex[0].addClass('active');
  //     $(this).siblings().removeClass('active');
  //     $(this).addClass('active');
  //
  //     var animateDown = $('.slider-promo__big-item.active .mask-animate-down');
  //     //
  //     // console.log(slideItem);
  //     console.log(animateDown);
  //     animateDown[0].beginElement();
  //     animateDown[1].beginElement();
  //     // var pointPoly_2 = ['632 632,632 632,0 632,0 632'];
  //     // // $('#poly_2').attr('points', pointPoly_2);
  //     // $('#poly_2').animate({points: pointPoly_2}, 1500);
  // });

});