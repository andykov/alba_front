// .auth scripts goes here 

/*$(function() {
	
});*/
// .article scripts goes here 

/*$(function() {
	
});*/
// .breadcrumbs scripts goes here 

/*$(function() {
	
});*/
// .catalog scripts goes here 

$(function() {

	function bunnerSize() {
		var catalogBanner = $('.catalog__item--banner .banner'),
			catalogItem = $('.catalog__item'),
			itemHeight = catalogItem.outerHeight(),
			itemGap = catalogItem.css('margin-bottom').replace('px',''),
			bannerHeight = +itemGap + 2 * itemHeight + 'px';

		catalogBanner.css({'padding-bottom': bannerHeight});
	}
  if ($('.catalog__item--banner .banner').length) {
    $(window).on('load resize', function () {
      bunnerSize();
    })
  }
});

// .checkout scripts goes here 

/*$(function() {
	
});*/
// Факт открытия
// $('.filter__list [data-toggle="dropdown"]').parent().on('shown.nth.dropdown', function () {
//     // console.log('Дроп с id="drop-demo-01": сработало событие shown.nth.dropdown 111');
// });

// Факт закрытия
// $('.filter [data-toggle="dropdown"]').parent().on('hidden.nth.dropdown', function (e) {
//     console.log('Дроп с id="drop-demo-01": сработало событие hidden.nth.dropdown');
//     var attr = $(this).attr('data-dropdown-inner');
//
//     if ( typeof attr !== 'undefined' && attr !== false) {
//         $(this).toggleClass('open');
//     };
// });

// закрытие выпадающего фильтра по кнопке применить
$('.filter .filter__apply').on('click', function () {
    $(this).closest('.filter__item').removeClass('open');
});

// отмена закрытия бутстраповского дропдауна с чекбоксами
$(document).on('click', '[data-dont-close]', function(e) {
    e.stopPropagation();
});




/* ========================================================================
 * Основано на: Bootstrap dropdown.js v3.3.6
 * Все изменения сопровождены закомментироваными оригиналами
 * ======================================================================== */





+function ($) {
    'use strict';

    // DROPDOWN CLASS DEFINITION
    // =========================

    var backdrop = '.dropdown-backdrop'
    var toggle   = '[data-toggle="dropdown"]'
    var Dropdown = function (element) {
        $(element).on('click.bs.dropdown', this.toggle)
    }

    function getParent($this) {
        var selector = $this.attr('data-target')

        if (!selector) {
            selector = $this.attr('href')
            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
        }

        var $parent = selector && $(selector)

        return $parent && $parent.length ? $parent : $this.parent()
    }

    function clearMenus(e) {
        if (e && e.which === 3) return
        $(backdrop).remove()
        $(toggle).each(function () {
            var $this         = $(this)
            var $parent       = getParent($this)
            var relatedTarget = { relatedTarget: this }

            if (!$parent.hasClass('open')) return

            if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

            $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

            if (e.isDefaultPrevented()) return

            $this.attr('aria-expanded', 'false')
            $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
        })
    }

    Dropdown.prototype.toggle = function (e) {
        var $this = $(this)

        if ($this.is('.disabled, :disabled')) return

        var $parent  = getParent($this)
        var isActive = $parent.hasClass('open')

        clearMenus()

        if (!isActive) {
            if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
                // if mobile we use a backdrop because click events don't delegate
                $(document.createElement('div'))
                    .addClass('dropdown-backdrop')
                    .insertAfter($(this))
                    .on('click', clearMenus)
            }

            var relatedTarget = { relatedTarget: this }
            $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

            if (e.isDefaultPrevented()) return

            $this
                .trigger('focus')
                .attr('aria-expanded', 'true')

            $parent
                .toggleClass('open')
                .trigger($.Event('shown.bs.dropdown', relatedTarget))
        }

        return false
    }

    Dropdown.prototype.keydown = function (e) {
        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

        var $this = $(this)

        e.preventDefault()
        e.stopPropagation()

        if ($this.is('.disabled, :disabled')) return

        var $parent  = getParent($this)
        var isActive = $parent.hasClass('open')

        if (!isActive && e.which != 27 || isActive && e.which == 27) {
            if (e.which == 27) $parent.find(toggle).trigger('focus')
            return $this.trigger('click')
        }

        var desc = ' li:not(.disabled):visible a'
        var $items = $parent.find('.dropdown-menu' + desc)

        if (!$items.length) return

        var index = $items.index(e.target)

        if (e.which == 38 && index > 0)                 index--         // up
        if (e.which == 40 && index < $items.length - 1) index++         // down
        if (!~index)                                    index = 0

        $items.eq(index).trigger('focus')
    }


    // DROPDOWN PLUGIN DEFINITION
    // ==========================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data  = $this.data('bs.dropdown')

            if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
            if (typeof option == 'string') data[option].call($this)
        })
    }

    var old = $.fn.dropdown

    $.fn.dropdown             = Plugin
    $.fn.dropdown.Constructor = Dropdown


    // DROPDOWN NO CONFLICT
    // ====================

    $.fn.dropdown.noConflict = function () {
        $.fn.dropdown = old
        return this
    }


    // APPLY TO STANDARD DROPDOWN ELEMENTS
    // ===================================

    $(document)
        .on('click.bs.dropdown.data-api', clearMenus)
        .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
        .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
        .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
        .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);
// .field-checkbox scripts goes here 

/*$(function() {
	
});*/
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
// .field-radio scripts goes here 

/*$(function() {
	
});*/


// .filter scripts goes here

$(function() {

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

    // Get initial state
    $vlinks.children().outerWidth(function(i, w) {
        totalSpace += w;
        numOfItems += 1;
        breakWidths.push(totalSpace);
    });

    var availableSpace, numOfVisibleItems, requiredSpace;

    function check() {

        availableSpace = $nav.outerWidth() - $sorting.outerWidth() - 240;
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
            $vlinks.children().removeClass('dropdown--submenu');
            // $vlinks.children().removeAttr('data-dropdown');
            numOfVisibleItems += 1;
        }

        if (availableSpace < 0) {
            $filterTitle.fadeOut(1);
            $more.addClass('as-title');
            // $btn.addClass('as-title').text('Фильтры');
        } else {
            $filterTitle.fadeIn(1);
            $more.removeClass('as-title');
            // $btn.removeClass('as-title').text('ЕЩЕ');
        }

        // Update the button accordingly
        // $btn.attr("count", numOfItems - numOfVisibleItems);
        if (numOfVisibleItems === numOfItems) {
            $btn.parent().addClass('hidden');
        } else {
            $btn.parent().removeClass('hidden');
        }

        // if (numOfVisibleItems == 0 && availableSpace < 0) {
        //     // $filterDropdown.removeClass('no-items').addClass('no-btn');
        // } else if (numOfVisibleItems == 0) {
        //     // $filterDropdown.removeClass('no-btn').addClass('no-items');
        // } else {
        //     // $filterDropdown.removeClass('no-items');
        // }
    }

    // Window listeners
    $(window).resize(function() {
        check();
    });

    // $btn.on('click', function() {
    //     $hlinks.parent().toggleClass('hidden');
    // });

    check();

});

$(function() {

    // Вынос логотипа и панели с корзиной в отдельный блок в мобильном меню
    var $headerMobile = $('.header-mobile'),
        $headerNavs = $('.header-navs'),
        $headerLogo = $('.header__logo'),
        $headerGenderInr = $('.header-navs__gender-inner'),
        $headerCart = $('.header__cart');

    var createMobileNav = function() {
        if ($(window).width() <= 991) {
            $headerMobile.prepend($headerLogo, $headerCart);
        } else {
            $headerGenderInr.prepend($headerLogo);
            $headerGenderInr.append($headerCart);
        }
    };


    $(window).on( "resize", function () {
        if ($(window).width() <= 991) {
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


});

/**
 * Определение мобильного устройства
 */
document.addEventListener('DOMContentLoaded', function(){
    if (window.isMobile !== undefined) {
        // console.log(isMobile);
        if(isMobile.any) {
            var rootClasses = ' is-mobile';
            for (key in isMobile) {
                if(typeof isMobile[key] === 'boolean' && isMobile[key] && key !== 'any') rootClasses += ' is-mobile--'+key;
                if(typeof isMobile[key] === 'object' && key !== 'other') {
                    for (type in isMobile[key]) {
                        if(isMobile[key][type]) rootClasses += ' is-mobile--'+key+'-'+type;
                    }
                }
            }
            document.documentElement.className += rootClasses;
        }
    }
    else {
        console.log('Классы для мобильных не добавлены: в сборке отсутствует isMobile.js');
    }
});
// .nav scripts goes here

$(function() {

    // $('.js-mobile-nav').on('click', function () {
    //     $('.js-sidebar').parent().addClass('show');
    //     $('body').addClass('scroll-off');
    //     $('.page-overlay').fadeIn(500);
    // });
    // $('.js-mobile-nav-close').on('click', function () {
    //     $('.js-sidebar').parent().removeClass('show');
    //     $('body').removeClass('scroll-off');
    //     $('.page-overlay').fadeOut(500);
    // });

});
// .form-login scripts goes here 

$(function() {
    // var $loginBtn = $('.js-login'),
    //     $formLogin = $('.js-form-login'),
    //     $overlay = $('.overlay');
    //
    // $loginBtn.on('click', function () {
    //     $($formLogin).add($overlay).toggleClass('open');
    // });
    //
    // $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
    //     var block = $formLogin; // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
    //     if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
    //         && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
    //         block.removeClass('open'); // если условия выполняются - скрываем наш элемент
    //     }
    // });
});
// .news scripts goes here 

$(function() {
    // $(".news-nav").stick_in_parent();

    // return $("[data-sticky-element]").stick_in_parent({
    //     parent: "[data-sticky-parent]"
    // });

    // $('.news-nav').stickySidebar({
    //     topSpacing: 60,
    //     bottomSpacing: 60,
    //     containerSelector: '.news',
    //     innerWrapperSelector: '.news-nav__inner',
    // });

});
// .office-history scripts goes here 

$(function() {
    // $('[data-toggle="collapse"]').on('click', function () {
    //     var $collapseTrigger = $(this),
    //         $collapseContainer = $collapseTrigger.closest($('.collapse')),
    //         $collapseBody = $collapseContainer.find('.collapse__body');
    //
    //     $collapseContainer.toggleClass('open')
    // });
});
// .product scripts goes here 

/*$(function() {
	
});*/
// .product-gallery scripts goes here 

/*$(function() {
	
});*/
// .product-info scripts goes here 

/*$(function() {
	
});*/
// .product-tabs scripts goes here 

$(function() {

    $(".product-tabs__item").hide().first().show();
    $(".product-tabs__nav li:first").addClass("active");

    $(".product-tabs__nav a").on('click', function (e) {
        e.preventDefault();
        $(this).closest('li').addClass("active").siblings().removeClass("active");
        $($(this).attr('href')).show().siblings('.product-tabs__item').hide();
    });

    var hash = $.trim( window.location.hash );

    if (hash) $('.product-tabs__nav a[href$="'+hash+'"]').trigger('click');

});
// .shops scripts goes here 

/*$(function() {
	
});*/
// .sidebar scripts goes here 

$(function() {



});
// .sizes scripts goes here 

$(function() {
    // универсальные табы без стилей
    var $tabBtn = $('.js-tabs [data-tab-btn]'),
        $tabBody = $('.js-tabs [data-tab-body]');
    $tabBtn.on('click', function(){
        var tabId = $(this).attr('data-tab-btn');

        $(this).siblings().removeClass('active');
        $(this).closest('.js-tabs').find($tabBody).removeClass('active');

        $(this).addClass('active');
        $("#"+tabId).addClass('active');
    });
});
// .slider-product scripts goes here 

$(function() {
    if($('.js-slider-product').length) {
        $('.js-slider-product').slick({
            mobileFirst: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            centerPadding: '20px',
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
    }
});
// .slider-sale scripts goes here 

$(function() {
    if($('.js-slider-sale').length) {
        $('.js-slider-sale').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            // centerMode: true,
            // variableWidth: true,
            responsive: [
                // {
                //     breakpoint: 1439,
                //     settings: {
                //         slidesToShow: 5
                //     }
                // },
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
// .social scripts goes here 

/*$(function() {
	
});*/
// .subscribe scripts goes here 

$(function() {
    // $('.js-about-text button').on('click', function () {
    //     $(this).parent().find('.hide');
    // });
});
// .tabs scripts goes here 

// $(function() {
//
// });
// .tile scripts goes here 

/*$(function() {
	
});*/
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
    $('.dropdown--submenu [data-toggle="dropdown"]').on('click', function(event) {
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
          slidesToShow: 2,
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
                      arrows: true
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
