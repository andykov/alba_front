// .catalog scripts goes here 

$(function() {

	function bunnerSize() {
		var catalogBanner = $('.catalog__item--banner .banner'),
				catalogItem = $('.catalog__item'),
				itemHeight = catalogItem.outerHeight(),
				itemGap = catalogItem.css('margin-bottom').replace('px',''),
				bannerHeight = +itemGap + 2 * itemHeight + 'px';

		catalogBanner.css({'padding-bottom': bannerHeight});

		// hack for catalog__item height on hover
		if (!window.matchMedia('(min-width: 992px)').matches) {
			catalogItem.css({'min-height': itemHeight});
		}
	}

	$(window).on('load resize', function () {
		bunnerSize();
	})
	
});