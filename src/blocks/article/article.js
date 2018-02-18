// .article scripts goes here 

$(function() {
	var nav = $('.article__nav'),
			header = $('.article__head'),
			article = $('.article'),
			headerHeight;

	if (article.length) {
		$(window).on(' load resize', function() {
			if (window.matchMedia('(min-width: 768px').matches) {
				headerHeight = header.height() + +article.css('padding-top').replace('px', '');
				nav.css('top', headerHeight+'px');
			}
		})
	}

});