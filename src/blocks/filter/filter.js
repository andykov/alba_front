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