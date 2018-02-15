// .article scripts goes here 

/*$(function() {
	
});*/
// .auth scripts goes here 

/*$(function() {
	
});*/

// .catalog scripts goes here 

/*$(function() {
	
});*/
// .checkout scripts goes here 

/*$(function() {
	
});*/
// Факт открытия
$('.filter__list [data-toggle="dropdown"]').parent().on('shown.nth.dropdown', function () {
    console.log('Дроп с id="drop-demo-01": сработало событие shown.nth.dropdown 111');
    // $('.filter [data-toggle="dropdown"]').dropdown('toggle')
    $('.filter__more-dropdown').addClass('hidden');
    // filter__more-list
});
// $('.filter__more [data-toggle="dropdown"]').parent().on('shown.nth.dropdown', function () {
//     console.log('Дроп с id="drop-demo-01": сработало событие shown.nth.dropdown 222');
//     // $('.filter [data-toggle="dropdown"]').dropdown('toggle')
//     // $('.filter__more-dropdown').addClass('hidden');
//
//     if ($(this).parent().parent().hasClass('filter__more-list')) {
//         console.log(1);
//     } else {
//         console.log(2);
//     }
// });

// Факт закрытия
$('.filter [data-toggle="dropdown"]').parent().on('hidden.nth.dropdown', function () {
    console.log('Дроп с id="drop-demo-01": сработало событие hidden.nth.dropdown');
});

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

    var backdrop = '.dropdown-backdrop';
    var toggle   = '[data-toggle="dropdown"]';
    var Dropdown = function (element) {
        // $(element).on('click.bs.dropdown', this.toggle)
        $(element).on('click.nth.dropdown', this.toggle)
    };

    // Dropdown.VERSION = '3.3.6'

    function getParent($this) {
        var selector = $this.attr('data-target');

        if (!selector) {
            selector = $this.attr('href')
            // selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
        }

        var $parent = selector && $(selector);

        return $parent && $parent.length ? $parent : $this.parent()
    }

    function clearMenus(e) {
        if (e && e.which === 3) return;
        $(backdrop).remove();
        $(toggle).each(function () {
            var $this         = $(this);
            var $parent       = getParent($this);
            var relatedTarget = { relatedTarget: this };

            // if (!$parent.hasClass('open')) return
            if (!$parent.hasClass('open')) return;

            if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return;

            // Выходим, если клик пришелся на элемент внутри .dropdown__menu
            if (e && e.type == 'click' && /dropdown__menu/i.test(e.toElement.offsetParent.className)) return;

            // $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
            // $parent.trigger(e = $.Event('hide.nth.dropdown', relatedTarget))

            // if (e.isDefaultPrevented()) return

            $this.attr('aria-expanded', 'false');
            // $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
            $parent.removeClass('open').trigger($.Event('hidden.nth.dropdown', relatedTarget))
        })
    }

    Dropdown.prototype.toggle = function (e) {
        var $this = $(this);

        // if ($this.is('.disabled, :disabled')) return
        if ($this.is(':disabled')) return;

        var $parent  = getParent($this);
        // var isActive = $parent.hasClass('open')
        var isActive = $parent.hasClass('open');

        clearMenus();

        if (!isActive) {
            // if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
            if ('ontouchstart' in document.documentElement) {
                // if mobile we use a backdrop because click events don't delegate
                $(document.createElement('div'))
                    .addClass('dropdown-backdrop')
                    .insertAfter($(this))
                    .on('click', clearMenus)
            }

            var relatedTarget = { relatedTarget: this };
            // $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))
            // $parent.trigger(e = $.Event('show.nth.dropdown', relatedTarget))

            // if (e.isDefaultPrevented()) return

            $this
                .trigger('focus')
                .attr('aria-expanded', 'true');

            $parent
            // .toggleClass('open')
                .toggleClass('open')
                // .trigger($.Event('shown.bs.dropdown', relatedTarget))
                .trigger($.Event('shown.nth.dropdown', relatedTarget))
        }

        return false
    }

    Dropdown.prototype.keydown = function (e) {
        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;

        var $this = $(this);

        e.preventDefault();
        e.stopPropagation();

        // if ($this.is('.disabled, :disabled')) return
        if ($this.is(':disabled')) return;

        var $parent  = getParent($this);
        // var isActive = $parent.hasClass('open');
        var isActive = $parent.hasClass('open');

        if (!isActive && e.which != 27 || isActive && e.which == 27) {
            if (e.which == 27) $parent.find(toggle).trigger('focus');
            return $this.trigger('click');
        }

        // var desc = ' li:not(.disabled):visible a';
        // var $items = $parent.find('.dropdown-menu' + desc);
        var $items = $parent.find('.dropdown__menu a');

        if (!$items.length) return;

        var index = $items.index(e.target);

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
            // var data  = $this.data('bs.dropdown')
            var data  = $this.data('nth.dropdown');

            // if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
            if (!data) $this.data('nth.dropdown', (data = new Dropdown(this)));
            if (typeof option == 'string') data[option].call($this)
        })
    }

    var old = $.fn.dropdown

    $.fn.dropdown             = Plugin;
    $.fn.dropdown.Constructor = Dropdown;


    // DROPDOWN NO CONFLICT
    // ====================

    $.fn.dropdown.noConflict = function () {
        $.fn.dropdown = old;
        return this
    }


    // APPLY TO STANDARD DROPDOWN ELEMENTS
    // ===================================

    $(document)
    // .on('click.bs.dropdown.data-api', clearMenus)
    // .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    // .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    // .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    // .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)
        .on('click.nth.dropdown.data-api', clearMenus)
        .on('click.nth.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
        .on('click.nth.dropdown.data-api', toggle, Dropdown.prototype.toggle)
        .on('keydown.nth.dropdown.data-api', toggle, Dropdown.prototype.keydown)
        .on('keydown.nth.dropdown.data-api', '.dropdown__menu', Dropdown.prototype.keydown)

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



    // var $nav = $('nav.greedy');
    // var $btn = $('nav.greedy button');
    // var $vlinks = $('nav.greedy .links');
    // var $hlinks = $('nav.greedy .hidden-links');

    var $nav = $('.filter');
    var $btn = $('.filter__more-btn');
    var $vlinks = $('.filter__form--priority .filter__list');
    var $hlinks = $('.filter .filter__more-list');
    var $sorting = $('.filter .filter__form--sorting');
    var $more = $('.filter .filter__more');

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

        // Get instant state

        availableSpace = $nav.outerWidth() - $sorting.outerWidth() - 150;
        // availableSpace = $vlinks.outerWidth() - 10;
        numOfVisibleItems = $vlinks.children().length;
        requiredSpace = breakWidths[numOfVisibleItems - 1];


        // There is not enought space
        if (requiredSpace > availableSpace) {
            $vlinks.children().last().prependTo($hlinks);
            numOfVisibleItems -= 1;
            check();
            // There is more than enough space
        } else if (availableSpace > breakWidths[numOfVisibleItems]) {
            $hlinks.children().first().appendTo($vlinks);
            numOfVisibleItems += 1;
        }
        // Update the button accordingly
        // $btn.attr("count", numOfItems - numOfVisibleItems);
        if (numOfVisibleItems === numOfItems) {
            $btn.parent().addClass('hidden');
        } else $btn.parent().removeClass('hidden');
    }

    // Window listeners
    $(window).resize(function() {
        check();
    });

    $btn.on('click', function() {
        $hlinks.parent().toggleClass('hidden');
    });

    check();











































//
//     var $nav = $('.filter'),
//         $btn = $('.filter .filter__more-btn'),
//         $moreContainer = $('.filter .filter__more'),
//         $vlinks = $('.filter .filter__list'),
//         $vdd = $('.filter .filter__more-dropdown'),
//         $sorting = $('.sorting'),
//         $hlinks = $('.filter .filter__more-list');
//
//     var breaks = [];
//
//     function updateNav() {
//
//         // var availableSpace = $moreContainer.hasClass('hidden') ? $nav.outerWidth() : $nav.outerWidth() - $sorting.outerWidth() - $btn.outerWidth();
//         if ($moreContainer.hasClass('hidden')) {
//             var availableSpace = ($nav.parent().outerWidth() - $sorting.outerWidth());
//         } else {
//             var availableSpace = ($nav.parent().outerWidth() - $sorting.outerWidth()) - $btn.outerWidth();
//         }
//         console.clear();
//         // console.log(availableSpace);
//         // console.log(availableSpace2);
//         console.log($sorting.outerWidth() + ' = Ширина сортировка ')
//         console.log($btn.outerWidth() + ' = Ширина кнопки ')
//         console.log($nav.parent().outerWidth() + ' = Ширина фильтра ')
//         console.log(availableSpace + ' = Ширина фильтра с вычетом ')
//         console.log($vlinks.closest('.filter').outerWidth() + ' = Ширина списка')
//         // The visible list is overflowing the nav
//         if($nav.outerWidth() > availableSpace) {
//
//             // Record the width of the list
//             breaks.push($vlinks.outerWidth());
//
//             // Move item to the hidden list
//             $vlinks.children().last().prependTo($hlinks);
//
//             // Show the dropdown btn
//             if($moreContainer.hasClass('hidden')) {
//                 $moreContainer.removeClass('hidden');
//             }
//
//             // The visible list is not overflowing
//         } else {
//
//             // There is space for another item in the nav
//             if(availableSpace > breaks[breaks.length-1]) {
//
//                 // Move the item to the visible list
//                 $hlinks.children().first().appendTo($vlinks);
//                 breaks.pop();
//             }
//
//             // Hide the dropdown btn if hidden list is empty
//             if(breaks.length < 1) {
//                 $moreContainer.addClass('hidden');
//                 $vdd.addClass('hidden');
//             }
//             return false;
//         }
//
//         // Keep counter updated
//         // $btn.attr("count", breaks.length);
//
//         // Recur if the visible list is still overflowing the nav
//         if($vlinks.closest('.filter').outerWidth() > availableSpace) {
//             updateNav();
//         }
//
//     }
//
// // Window listeners
//
//     $(window).resize(function() {
//         updateNav();
//     });
//
//     $btn.on('click', function() {
//         $vdd.toggleClass('hidden');
//     });
//
//     updateNav();
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
$(function() {



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
            arrows: true,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                // {
                //     breakpoint: 1365,
                //     settings: {
                //         slidesToShow: 2,
                //     }
                // }
            ]
        });
    }


    var $productGalleryBig = $('.product-gallery__big'),
        $productGalleryThumb = $('.product-gallery__thumb');

    if($productGalleryBig.length) {
        $productGalleryBig.slick({
            // infinite: false,
            lazyLoad: 'ondemand',
            arrows: false,
            slidesToShow: 2,
            centerMode: true,
            variableWidth: true,
            // centerPadding: '-120px',
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
