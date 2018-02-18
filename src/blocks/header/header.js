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

    // при открытии корзины скрывать меню если открыто
    $('.panel-cart [data-toggle="dropdown"]').on('click', function () {
        $('.header-navs.open').removeClass('open');
    });


});
