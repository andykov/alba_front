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