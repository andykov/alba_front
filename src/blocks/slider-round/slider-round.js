// .slider-round scripts goes here 

$(function() {

    var $sliderRound_1 = $('.js-slider-round .slider-round__item--1'),
        $sliderRound_2 = $('.js-slider-round .slider-round__item--2'),
        $sliderRound_3 = $('.js-slider-round .slider-round__item--3'),
        $sliderRound_4 = $('.js-slider-round .slider-round__item--4');


    $sliderRound_1.slick({
        infiniti: false,
        arrows: true,
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


});