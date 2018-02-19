// .catalog scripts goes here 

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