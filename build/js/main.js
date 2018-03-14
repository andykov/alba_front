




$(function() {
	var $articleNav = $('.article__nav'),
        $articleHead = $('.article__head'),
		$article = $('.article'),
		headerHeight;

	if ($article.length) {
		$(window).on(' load resize', function() {
			if (window.matchMedia('(min-width: 768px')) {
				headerHeight = $articleHead.height() + +$article.css('padding-top').replace('px', '');
                $articleNav.css('top', headerHeight+'px');
			}
		})
	}
});




$(function () {

    // растягивание баннера в каталоге
    function bunnerSize() {
        var $catalogBanner = $('.catalog__item--banner .banner'),
            $catalogItem = $('.catalog__item'),
            $itemHeight = $catalogItem.outerHeight(),
            itemGap = $catalogItem.css('margin-bottom').replace('px', ''),
            bannerHeight = +itemGap + 2 * $itemHeight + 'px';

        $catalogBanner.css({'padding-bottom': bannerHeight});
    }
    if ($('.catalog__item--banner .banner').length) {
        $(window).on('load resize', function () {
            bunnerSize();
        })
    }

});
$(function () {
	if ($('.js-slider-checkout').length) {
		$('.js-slider-checkout').slick({
			slidesToShow: 5,
			arrows: true,
			centerPadding: '113px', // ширина выступающей картинки (100px) + половина отступа между слайдами (20px)
			prevArrow: $('.js-slider-product-prev'),
			nextArrow: $('.js-slider-product-next'),
			dots: false,
			speed: 300,
			centerMode: true,

			responsive: [
				{
					breakpoint: 767,
					settings: {
						arrows: false,
						slidesToShow: 2,
						variableWidth: true,
						centerMode: false,
						rows: 1
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						rows: 2,
						centerPadding: '0'
					}
				},
				{
					breakpoint: 1199,
					settings: {
						slidesToShow: 4,
						centerPadding: '32px' // ширина выступающей картинки (20px) + половина отступа между слайдами (12px)
					}
				},
				{
					breakpoint: 1799,
					settings: {
						centerPadding: '59px'
					}
				}

			]
		});
	}

});


// .fashion-world scripts goes here 

$(function() {
	$(".js-fashion-world-slider").slick({
		// autoplay: true,
		appendArrows: $('.fashion-world-slider__nav'),
		prevArrow: $('.fashion-world-slider--prev'),
    nextArrow: $('.fashion-world-slider--next'),
		slidesToShow: 3,
		responsive: [{
			breakpoint: 1800,
	      settings: {
	        slidesToShow: 2
	      }
			}, {
			breakpoint: 992,
	      settings: {
	        slidesToShow: 1,
	        rows: 2
	      }
			}, {
			breakpoint: 768,
				settings: {
					arrows: false,
					variableWidth: true,
					rows: 1
				}
		}]
	})
	
});


$(function() {

    // Счетчик количества в корзине
    var $fieldCounter = $('.js-field-counter'),
        $fieldCounterInput = $fieldCounter.find('.field-counter__input'),
        $fieldCounterPlus = $fieldCounter.find('.field-counter__plus'),
        $fieldCounterMinus = $fieldCounter.find('.field-counter__minus');

    $fieldCounterPlus.on('click', function (e) {
        e.preventDefault();
        var currentVal = parseInt($('.field-counter__input').val());
        if (!isNaN(currentVal)) {
            $(this).closest($fieldCounter).find($fieldCounterInput).val(currentVal + 1);
        } else {
            $(this).closest($fieldCounter).find($fieldCounterInput).val(0);
        }
    });

    $fieldCounterMinus.on('click', function (e) {
        e.preventDefault();
        var currentVal = parseInt($('.field-counter__input').val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $(this).closest($fieldCounter).find($fieldCounterInput).val(currentVal - 1);
        } else {
            $(this).closest($fieldCounter).find($fieldCounterInput).val(0);
        }
    });
});


$(function() {
    // кастомный селект
    $('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('hidden');
        $this.wrap('<div class="field-select"></div>');
        $this.after('<div class="field-select__pseudoselect"></div>');

        var $styledSelect = $this.next('div.field-select__pseudoselect');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'field-select__drop'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.on('click', function(e) {
            e.stopPropagation();
            console.log($(this));
            $('div.field-select__pseudoselect.active').not(this).each(function(){
                // $(this).removeClass('active').next('ul.field-select__drop').hide();
                $(this).removeClass('active').next('ul.field-select__drop').removeClass('active');
            });
            // $(this).toggleClass('active').next('ul.field-select__drop').toggle();
            $(this).toggleClass('active').next('ul.field-select__drop').toggleClass('active');
        });

        $listItems.on('click', function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $this.val($(this).attr('rel'));
            // $list.hide();
            $list.removeClass('active');
            console.log($(this));
        });

        $(document).on('click', function() {
            $styledSelect.removeClass('active');
            // $list.hide();
            $list.removeClass('active');
        });

    });
});
// .filter scripts goes here

$(function() {

    // Перемещение пунктов фильтра в выпадающий список
    var $nav = $('.filter');
    var $btn = $('.filter__more-btn');
    var $vlinks = $('.filter__form--priority .filter__list');
    var $hlinks = $('.filter .filter__more-list');
    var $sorting = $('.filter .filter__form--sorting');
    var $more = $('.filter .filter__more');
    var $filterTitle = $('.filter__title--filter');
    var $filterDropdown = $('.filter__more-dropdown');

    var numOfItems = 0;
    var totalSpace = 0;
    var breakWidths = [];

    $vlinks.children().outerWidth(function(i, w) {
        totalSpace += w;
        numOfItems += 1;
        breakWidths.push(totalSpace);
    });

    var availableSpace, numOfVisibleItems, requiredSpace;

    function check() {

        availableSpace = $nav.outerWidth() - $sorting.outerWidth() - 288;
        // availableSpace = $vlinks.outerWidth() - 10;
        numOfVisibleItems = $vlinks.children().length;
        requiredSpace = breakWidths[numOfVisibleItems - 1];


        if (requiredSpace > availableSpace) {
            $vlinks.children().last().prependTo($hlinks);
            $hlinks.children().addClass('dropdown--submenu');
            // $hlinks.children().attr('data-dropdown', 'submenu');
            numOfVisibleItems -= 1;
            check();
        } else if (availableSpace > breakWidths[numOfVisibleItems]) {
            $hlinks.children().first().appendTo($vlinks)
            $vlinks.children().removeClass('dropdown--submenu open');
            // $vlinks.children().removeAttr('data-dropdown');
            numOfVisibleItems += 1;
        }

        if (availableSpace < 0) {
            $filterTitle.fadeOut(1);
            $more.addClass('as-title');
            $btn.addClass('as-title').text('Фильтры');
        } else {
            $filterTitle.fadeIn(1);
            $more.removeClass('as-title');
            $btn.removeClass('as-title').text('ЕЩЕ');
        }

        // $btn.attr("count", numOfItems - numOfVisibleItems);
        if (numOfVisibleItems === numOfItems) {
            $btn.parent().addClass('hidden');
        } else {
            $btn.parent().removeClass('hidden open');
        }

        if (numOfVisibleItems == 0 && availableSpace < 0) {
            $filterDropdown.removeClass('no-items').addClass('no-btn');
        } else if (numOfVisibleItems == 0) {
            $filterDropdown.removeClass('no-btn').addClass('no-items');
        } else {
            $filterDropdown.removeClass('no-items');
        }
    }

    $(window).resize(function() {
        check();
    });

    if ($nav.length) {
        var filterOffset;

        $(window).resize(function() {
            filterOffset = $('.content').offset().top - +$('.content').css('padding-top').replace('px', '');
        });

        $(window).on('scroll', function () {

            if ($(this).scrollTop() >= filterOffset) {
                $nav.addClass('filter--fixed');
            } else {
                $nav.removeClass('filter--fixed');
            }

            if ($(this).scrollTop() >= $('.pagination--in-catalog').offset().top) {
                $nav.addClass('filter--hidden');
            } else {
                $nav.removeClass('filter--hidden');
            }

        })
    }

    check();


    // закрытие выпадающего фильтра по кнопке применить
    $('.filter .filter__apply').on('click', function () {
        $(this).closest('.filter__item').removeClass('open');
    });
});




$(function() {

    // Перенос логотипа и панели с корзиной в отдельный блок DOM в мобильном меню
    var $headerMobile = $('.header-mobile'),
        $headerNavs = $('.header-navs'),
        $headerLogo = $('.header__logo'),
        $headerGenderInr = $('.header-navs__gender-inner'),
        $headerCart = $('.header__cart');

    var createMobileNav = function() {
        if (!window.matchMedia('(min-width: 992px)').matches) {
            $headerMobile.prepend($headerLogo, $headerCart);
        } else {
            $headerGenderInr.prepend($headerLogo);
            $headerGenderInr.append($headerCart);
        }
    };


    $(window).on( "resize", function () {
        if (!window.matchMedia('(min-width: 992px)').matches) {
            if ($headerMobile.children().length != 0) {
                return false;
            }
            $headerMobile.prepend($headerLogo, $headerCart);

        } else {
            if ($headerGenderInr.children().length > 1) {
                return false;
            }
            $headerGenderInr.prepend($headerLogo);
            $headerGenderInr.append($headerCart);
        }
    } ).resize();

    $('.js-mobile-nav').on('click', function () {
        $headerNavs.toggleClass('open');
    });

    // при открытии корзины скрывать меню если открыто
    $('.panel-cart [data-toggle="dropdown"]').on('click', function () {
        $('.header-navs.open').removeClass('open');
    });


});



// .lookbook scripts goes here

$(function() {
	$(".js-slider-lookbook").slick({
		arrows: false,
		variableWidth: true,
		autoplay: true
	})


	var sliderMargin;

	$(window).on('resize load', function () {
		sliderMargin = 0;

		if (window.matchMedia('(min-width: 768px)').matches) {
			sliderMargin = -($(window).width() - 720) / 2;
		}

		if (window.matchMedia('(min-width: 992px)').matches) {
			sliderMargin = -($(window).width() - 960) / 2;
			if (sliderMargin < -32) {
				sliderMargin = -32;
			}
		}

		if (window.matchMedia('(min-width: 1366px)').matches) {
			sliderMargin = -($(window).width() - 1248) / 2;
			if (sliderMargin < -59) {
				sliderMargin = -59;
			}
		}

		if (window.matchMedia('(min-width: 1800px)').matches) {
			sliderMargin = -($(window).width() - 1680) / 2;
			if (sliderMargin < -120) {
				sliderMargin = -120;
			}
		}

		$(".js-slider-lookbook").css({'margin-right': sliderMargin + 'px'})
	})
});




// .office-data scripts goes here 

$(function() {
	if($('.js-datepicker').length) {
        $('.js-datepicker').datepicker({
            autoClose: true,
            position: 'bottom center'
        });
	}
});




$(function() {

    if ($('.js-product-gallery-big').length) {

        var $svgWrap,
            $productGalleryBig = $('.js-product-gallery-big'),
            $productGalleryThumb = $('.js-product-gallery-thumb'),
            $productGalleryItem = $('.product-gallery__item'),
            $productGalleryItemFirst = $('.product-gallery__item:first-child'),
            $productGalleryFirstImg = $productGalleryItem.first().find('img'),
            productGalleryFirstImgPath = $productGalleryFirstImg.attr('src');

        $productGalleryBig.on('init', function(event, slick) {
            $productGalleryFirstImg.css({
                'opacity': 0,
                'visibility': 'hidden'
            });
            $('.js-product-gallery-big .slick-current').append('<div id="svg-mask-wrap" style="opacity: 0"></div>');
            console.log('slick init');
            $svgWrap = $('#svg-mask-wrap');
        });

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
            });
            $productGalleryThumb.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: $productGalleryBig,
                arrows: false,
                dots: false,
                centerPadding: '0',
                focusOnSelect: true
            });
        }

        var divSizeWidth = $('.js-product-gallery-big .slick-current').width(),
            divSizeHeight = $('.js-product-gallery-big .slick-current').height();

        function makeSVG(tag, attrs) {
            var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
            for (var k in attrs)
                el.setAttribute(k, attrs[k]);
            return el;
        }

        var svg = makeSVG('svg', {
            id:"svg-mask",
            viewBox:"0 0 "+ divSizeWidth +" "+ divSizeWidth,
            version:"1.1",
            xmlns:"http://www.w3.org/2000/svg",
            'mlns:xlink': "http://www.w3.org/1999/xlink",
            width:'100%',
            height:'100%',
        }),
        group_1 = makeSVG('g', { id: 'group_1' }),
        group_2 = makeSVG('g', { id: 'group_2' }),
        defs = makeSVG('defs'),
        mask_1 = makeSVG('mask', { id: 'mask_1', fill: 'white' }),
        mask_2 = makeSVG('mask', { id: 'mask_2', fill: 'white' }),
        useMask_1 = makeSVG('use', {'xlink:href': '#poly_1'}),
        useMask_2 = makeSVG('use', {'xlink:href': '#poly_2'}),
        poly_1 = makeSVG('polygon', {
            id: 'poly_1',
            points: [divSizeWidth, 0, 0, divSizeHeight, 0, 0]
        }),
        poly_2 = makeSVG('polygon', {
            id: 'poly_2',
            points: [divSizeWidth, 0, 0, divSizeHeight, divSizeWidth, divSizeHeight]
        }),
        polyMask_1 = makeSVG('polygon', {
            id: 'polyMask_1',
            points: [divSizeWidth, 0, 0, divSizeHeight, 0, 0]
        }),
        polyMask_2 = makeSVG('polygon', {
            id: 'polyMask_2',
            points: [divSizeWidth, 0, 0, divSizeHeight, divSizeWidth, divSizeHeight]
        }),
        img_1 = makeSVG('image', {
            mask: "url(#mask_1)",
            x: divSizeWidth,
            y: divSizeWidth,
            width: divSizeWidth,
            height: divSizeWidth,
            'xlink:href': productGalleryFirstImgPath
        }),
        img_2 = makeSVG('image', {
            mask: "url(#mask_2)",
            x: -divSizeWidth,
            y: -divSizeWidth,
            width: divSizeWidth,
            height: divSizeWidth,
            'xlink:href': productGalleryFirstImgPath
        });

        document.getElementById('svg-mask-wrap').appendChild(svg).appendChild(defs).appendChild(poly_1);
        document.getElementById('svg-mask-wrap').appendChild(svg).appendChild(defs).appendChild(poly_2);

        document.getElementById('svg-mask').appendChild(group_1).appendChild(mask_1).appendChild(useMask_1);
        document.getElementById('group_1').appendChild(img_1);

        document.getElementById('svg-mask').appendChild(group_2).appendChild(mask_2).appendChild(useMask_2);
        document.getElementById('group_2').appendChild(img_2);

        // костылик, для работы svg маски
        $('.js-product-gallery-big .slick-current').append($svgWrap.html($svgWrap.html()));

        setTimeout(function(){

            // $svgWrap.addClass('animate');
            $svgWrap.delay( 0 ).animate({
                opacity: 1,
            }, 200);
            $svgWrap.find('image').animate({
                x: 0,
                y: 0
            }, 1200, function () {

                setTimeout(function(){
                    $productGalleryFirstImg.css({
                        'opacity': 1,
                        'visibility': 'visible'
                    });
                    $svgWrap.remove();
                }, 200);
            });
        }, 0);
    }

});





$(function () {
	if ($('.js-slider-product').length) {
		$('.js-slider-product').slick({
			arrows: true,
			centerPadding: '120px', // ширина выступающей картинки (100px) + половина отступа между слайдами (20px)
			dots: false,
			speed: 300,
			slidesToShow: 5,
			centerMode: true,

			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						variableWidth: true,
						centerMode: false,
						rows: 1,
						arrows: false
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						rows: 2,
						centerPadding: '0',
						arrows: false
					}
				},
				{
					breakpoint: 1199,
					settings: {
						centerPadding: '32px', // ширина выступающей картинки (20px) + половина отступа между слайдами (12px)
						slidesToShow: 4

					}
				},
				{
					breakpoint: 1799,
					settings: {
						slidesToShow: 5,
						centerPadding: '59px'
					}
				}

			]
		});
	}

})
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
    if($('.slick-current .zoom').length) {
        $('.slick-current .zoom').magnify();
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
                    breakpoint: 1799,
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

});
