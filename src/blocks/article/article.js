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