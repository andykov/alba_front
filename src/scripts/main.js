$(function() {
    // $(window).on("load", function() {
    //     $("body").css("overflow", "hidden"),
    //     $(".js-preloader").delay(700).fadeOut("100"), setTimeout(function() {
    //             $("body").removeAttr('style')
    //     }, 200);
    //
    // });

    // отмена закрытия бутстраповского дропдауна с чекбоксами
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


    // зум товара в детальной карточке
    if($('.zoom').length) {
        $('.zoom').magnify();
    }

    // $('.js-dropdown').on('click', '[data-trigger="dropdown"]', function() {
    //     var $dropdownParent = $(this).closest('.js-dropdown');
    //     $dropdownParent.toggleClass('show');
    // });

    // листалка при ховере в карточке товара
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
        $productGalleryThumb = $('.product-gallery__thumb'),
        $productGalleryItem = $('.product-gallery__item'),
        $productGalleryFirstImg = $productGalleryItem.first().find('img'),
        $productGalleryFirstImgPath = $productGalleryFirstImg.attr('src');

    console.log($productGalleryFirstImgPath);

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










    var divSizeWidth = $('.container').width();
    var divSizeHeight = $('.container').height();

    function makeSVG(tag, attrs) {
        var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (var k in attrs)
            el.setAttribute(k, attrs[k]);
        return el;
    }

    var svg = makeSVG('svg', {
        id:"el_svg",
        viewBox:"0 0 "+ divSizeWidth +" "+ divSizeWidth,
        version:"1.1",
        xmlns:"http://www.w3.org/2000/svg",
        'mlns:xlink': "http://www.w3.org/1999/xlink",
        width:divSizeWidth,
        height: divSizeHeight
    });

    var group_1 = makeSVG('g', { id: 'group_1' });
    var group_2 = makeSVG('g', { id: 'group_2' });

    var defs = makeSVG('defs');

    var mask_1 = makeSVG('mask', { id: 'mask_1', fill: 'white' });
    var mask_2 = makeSVG('mask', { id: 'mask_2', fill: 'white' });

    var use_1 = makeSVG('use', {'xlink:href': '#polyMask_1'});
    var use_2 = makeSVG('use', {'xlink:href': '#polyMask_2'});

    var useMask_1 = makeSVG('use', {'xlink:href': '#poly_1'});
    var useMask_2 = makeSVG('use', {'xlink:href': '#poly_2'});

    var poly_1 = makeSVG('polygon', {
        id: 'poly_1',
        points: [divSizeWidth, 0, 0, divSizeHeight, 0, 0]
    });
    var poly_2 = makeSVG('polygon', {
        id: 'poly_2',
        points: [divSizeWidth, 0, 0, divSizeHeight, divSizeWidth, divSizeHeight]
    });
    var polyMask_1 = makeSVG('polygon', {
        id: 'polyMask_1',
        points: [divSizeWidth, 0, 0, divSizeHeight, 0, 0]
    });
    var polyMask_2 = makeSVG('polygon', {
        id: 'polyMask_2',
        points: [divSizeWidth, 0, 0, divSizeHeight, divSizeWidth, divSizeHeight]
    });

    var img_1 = makeSVG('image', {
        mask: "url(#mask_1)",
        x: divSizeWidth,
        y: divSizeWidth,
        width: divSizeWidth,
        height: divSizeWidth,
        'xlink:href': firstImgPath
    });
    var img_2 = makeSVG('image', {
        mask: "url(#mask_2)",
        x: -divSizeWidth,
        y: -divSizeWidth,
        width: divSizeWidth,
        height: divSizeWidth,
        'xlink:href': firstImgPath
    });

    document.getElementById('svg-wrap').appendChild(svg).appendChild(defs).appendChild(poly_1);
    document.getElementById('svg-wrap').appendChild(svg).appendChild(defs).appendChild(poly_2);

    document.getElementById('el_svg').appendChild(group_1).appendChild(mask_1).appendChild(useMask_1);
// document.getElementById('group_1').appendChild(use_1);
    document.getElementById('group_1').appendChild(img_1);

    document.getElementById('el_svg').appendChild(group_2).appendChild(mask_2).appendChild(useMask_2);
// document.getElementById('group_2').appendChild(use_2);
    document.getElementById('group_2').appendChild(img_2);















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


    // включение слайдера на мобильном
    function slickMobile(slider, settings) {
        $(window).on('load resize', function () {
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

    slickMobile(sliderLookBook, sliderLookBookSettings);

});
