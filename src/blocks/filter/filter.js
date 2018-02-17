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