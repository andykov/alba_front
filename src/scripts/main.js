// function LoadFinance()
// {
//     $(function() {
//         $.getJSON(
//             "https://api.cryptowat.ch/assets/xrp",
//             function(json){
//                 console.log(json);
//                 // Patching payload into page element ID = "dog"
//             });
//     });
// }
//
// setInterval( LoadFinance, 1000 );


$(function() {

     git// отмена закрытия бутстраповского дропдауна с чекбоксами
    $(document).on('click', '[data-dont-close]', function(e) {
        e.stopPropagation();
    });

    // многоуровневый дропдаун
    $('.dropdown--submenu [data-toggle="dropdown"]').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
    });


    var $collapseContainer = $(".js-collapse"),
        $collapseToggle = $collapseContainer.find('[data-collapse-toggle]'),
        $collapseBody = $collapseContainer.find('[data-collapse-body]');

    $collapseToggle.on('click', $collapseContainer, function () {
        $that = $(this);
        $that.closest($collapseContainer).find($collapseBody).stop().slideToggle(200, function () {
            $that.text(function () {
                return $collapseBody.is(":visible") ? "Свернуть" : "Полностью";
            });
        });
    });


    // $(".news-nav").stickySidebar({
    //     topSpacing: 60,
    //     bottomSpacing: 60
    // });
    // $('.js-panel-cart').on('show.bs.dropdown', function () {
    //     $(this).closest('.panel-cart').toggleClass('show')
    // });
    // $('.js-panel-cart').on('hide.bs.dropdown', function () {
    //     $(this).closest('.panel-cart').toggleClass('show')
    // });



    // if($('.zoom').length) {
    //     // $('.zoom').magnify();
    // }

    // $('.js-dropdown').on('click', '[data-trigger="dropdown"]', function() {
    //     var $dropdownParent = $(this).closest('.js-dropdown');
    //     $dropdownParent.toggleClass('show');
    // });


    if($('.brazzers').length) {
        $('.brazzers').brazzersCarousel();
    }

    if ($('.js-shops-list').length) {
        $('.js-shops-list').slick({
          arrows: false,
          infinite: false,

            slidesToScroll: 1,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                      arrows: true,
                      slidesToShow: 2
                    }
                }
            ]
        });
    }


    var $productGalleryBig = $('.product-gallery__big'),
        $productGalleryThumb = $('.product-gallery__thumb');

    if($productGalleryBig.length) {
        $productGalleryBig.slick({
            mobileFirst: true,
            lazyLoad: 'ondemand',
            arrows: false,
            slidesToShow: 2,
            centerMode: true,
            variableWidth: true,
            dots: false,
            centerPadding: '0',
            asNavFor: $productGalleryThumb
            // customPaging : function(slider, i) {
            //     var thumb = $(slider.$slides[i]).data('thumb');
            //     return '<a><img src="'+thumb+'"></a>';
            // },
        });
        $productGalleryThumb.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: $productGalleryBig,
            arrows: false,
            dots: false,
            centerPadding: '0',
            // useCSS: false,
            // useTransform: false,
            focusOnSelect: true
        });
    }


    // function borderMoving() {
    //     $productGalleryThumb.find('.slick-track').append('<span></span>');
    //
    //     var $list = $productGalleryThumb.find('.slick-slide'),
    //         $span = $productGalleryThumb.find('.slick-track span'),
    //         $listOffset = $productGalleryThumb.find('.slick-slide.slick-active').offset().left,
    //         $listWidth = $productGalleryThumb.find('.slick-slide.slick-active').css('width');
    //
    //     $span.css({
    //         left : $listOffset,
    //         width : $listWidth
    //     });
    //
    //     $list.on('click', function () {
    //         var listOffset = $(this).offset().left,
    //             listWidth = $(this).css('width');
    //
    //         // $(this).addClass('active').siblings().removeClass('active');
    //
    //         $span.animate({
    //             left : listOffset,
    //             width : listWidth
    //         }, 200);
    //     });
    //
    //     $(window).on('resize', function () {
    //         var listOffset = $('.product-gallery .slick-dots li.slick-active').offset().left,
    //             listWidth = $('.product-gallery .slick-dots li.slick-active').css('width');
    //
    //         $span.css({
    //             left : listOffset,
    //             width : listWidth
    //         });
    //     });
    // }
    // borderMoving();





    // $('.js-spoiler').on('click', '.js-spoiler-btn', function () {
    //     $(this).closest('.js-spoiler').find('hide');
    //
    // });




    // slider
    var sliderLookBook = $('.js-slider-lookbook');
    sliderLookBookSettings = {
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 5,
                    centerPadding: '120px'
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    centerPadding: '32px'
                }
            }
        ]
    };


// slick on mobile

        function slick_on_mobile(slider, settings){
            $(window).on('load resize', function() {
                if ($(window).width() > 767) {
                    if (slider.hasClass('slick-initialized')) {
                        slider.slick('unslick');
                    }
                    return
                }
                if (!slider.hasClass('slick-initialized')) {
                    return slider.slick(settings);
                }
            });
        };

        slick_on_mobile(sliderLookBook, sliderLookBookSettings);




});
