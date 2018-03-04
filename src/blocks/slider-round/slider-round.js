// .slider-round scripts goes here 

$(function() {

    var $sliderRound_1 = $('.js-slider-round .slider-round__item--1'),
        $sliderRound_2 = $('.js-slider-round .slider-round__item--2'),
        $sliderRound_3 = $('.js-slider-round .slider-round__item--3'),
        $sliderRound_4 = $('.js-slider-round .slider-round__item--4');


    $sliderRound_1.slick({
        infiniti: false,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 1500,
        asNavFor: '.slider-round__item',
        rtl: true
    });
    $sliderRound_2.slick({
        infinite: false,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 1500,
        asNavFor: '.slider-round__item',
        vertical: true,
        verticalSwiping: true,
        verticalReverse: true,
    });
    $sliderRound_3.slick({
        infinite: false,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 1500,
        asNavFor: '.slider-round__item',
        vertical: true,
        verticalSwiping: true,
    });
    $sliderRound_4.slick({
        infinite: false,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 1500,
        asNavFor: '.slider-round__item'
    });


    // $(document).on("hover", ".slider-round__item--2 .slick-slide", function() {
    //     $(this).siblings().hide();
    // }, function() {
    //     // $(this).children(".overlay").fadeOut("fast");
    // });

    // $(".slider-round__item--2").hover(
    //     function () {
    //         $(".slider-round__item--2 .slick-slide").not(".slider-round__item--2 .slick-current").next().css("visibility","hidden");
    //         // $(this).
    //     },
    //     function () {
    //         $(".slider-round__item--2 .slick-slide").css("visibility","visible");
    //     }
    // );



// var sl = $('.slider-3');
// $('.slider-3').slick({
//   // arrows: false,
//   autoplaySpeed: 1000,
//   speed: 1500,
//   asNavFor: '.slider',
//   vertical: true,
//   verticalSwiping: true,
//   infinite: false
// });

// $(".slider.slider-3").slick('slickSetOption', 'vertical', true, true);
// $(".slider.slider-3").slick('slickSetOption', 'verticalSwiping', true, true);




// if (sl.is('.slider-1')) {
//   $(".slider-1").slick('slickSetOption', 'rtl', true);
// }

// if (sl.is('.slider-3')) {
//     $('.slider-3').slick('getSlick')
//     $(".slider-3").slick('slickSetOption', 'verticalSwiping', true, true);
//   $(".slider-3").slick('slickSetOption', 'vertical', true, true);
// $(".slider-3").slick('slickSetOption', {
//   'vertical': true,
//   'verticalSwiping': true
// });

// }



// $(".slider-1").on('beforeChange', function(event, slick, currentSlide, nextSlide){
//     $(".slider-1").slick('slickSetOption', 'rtl', true);
// });
// $(".slider-2").on('beforeChange', function(event, slick, currentSlide, nextSlide){
//     $(".slider-2").slick('slickSetOption', 'vertical', true);
// });



// $(".slider-3").on('beforeChange', function(event, slick, currentSlide, nextSlide){
//     // $(".slider-3").slick('slickSetOption', 'rtl', true);
//     $(".slider-3").slick('slickSetOption', 'vertical', true);
//     $(".slider-3").slick('slickSetOption', 'verticalSwiping', true);
// });
// $(".slider-4").on('beforeChange', function(event, slick, currentSlide, nextSlide){
//     // $(".slider-4").slick('slickSetOption', 'rtl', true);
//     $(".slider-4").slick('slickSetOption', 'vertical', true);
// });
});