// .slider-promo scripts goes here 

$(function() {

    $('.slider-promo__thumb-item').on('click', function () {
        var thumbIndex = $(this).index();
        var slideItem = $('.slider-promo__big-item').eq(thumbIndex);
        var slideItemMask = slideItem.find('.slider-promo-mask');
        slideItem.siblings().removeClass('active');
        slideItem.addClass('active');
        // console.log(slideItem);
        // var animate = slideItem.find('.mask-animate-down');

        // console.log(slideItemMask);
        // thumbIndex[0].addClass('active');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        var animateDown = $('.slider-promo__big-item.active .mask-animate-down');
        //
        // console.log(slideItem);
        console.log(animateDown);
        animateDown[0].beginElement();
        animateDown[1].beginElement();
        // var pointPoly_2 = ['632 632,632 632,0 632,0 632'];
        // // $('#poly_2').attr('points', pointPoly_2);
        // $('#poly_2').animate({points: pointPoly_2}, 1500);
    });
});