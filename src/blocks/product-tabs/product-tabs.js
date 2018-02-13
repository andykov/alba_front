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