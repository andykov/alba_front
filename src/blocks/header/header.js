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

    $(window).on("resize load", function () {
        var fixedHeader = $('.js-fixed-header');
        var fixedClass = 'header-navs__main--fixed';
        var panelDropdown = $('.panel-cart');
        var panelFixed = 'panel-cart--fixed';

        if (window.matchMedia('(min-width: 992px)').matches) {
            var toTop = fixedHeader.offset().top + fixedHeader.height();

            function headerOnScroll() {
                if ($(window).scrollTop() > toTop) {
                    fixedHeader.addClass(fixedClass);
                    panelDropdown.addClass(panelFixed);

                    setTimeout(() => {
                        fixedHeader.css('transition', 'transform .2s linear');
                        panelDropdown.css('transition', 'transform .2s linear');
                    }, 200);

                    setTimeout(() => {
                        fixedHeader.css('transform', 'translateY(0)');
                        panelDropdown.css('transform', 'translateY(0)');
                    }, 500);

                } else {
                    fixedHeader
                        .removeClass(fixedClass)
                        .removeAttr('style');
                    panelDropdown
                        .removeClass(panelFixed)
                        .removeAttr('style');
                }
            }

            headerOnScroll();

            $(window).on("scroll", function () {
                headerOnScroll();
            });

        } else {

            panelDropdown
                .removeClass(panelFixed)
                .removeAttr('style');
            fixedHeader
                .removeClass(fixedClass)
                .removeAttr('style');
        }
    });


});
