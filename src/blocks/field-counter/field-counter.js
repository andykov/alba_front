$(function() {

    // Счетчик количества в корзине
    var $fieldCounter = $('.js-field-counter'),
        $fieldCounterInput = $fieldCounter.find('.field-counter__input'),
        $fieldCounterPlus = $fieldCounter.find('.field-counter__plus'),
        $fieldCounterMinus = $fieldCounter.find('.field-counter__minus');

    $fieldCounterPlus.on('click', function (e) {
        e.preventDefault();
        var currentVal = parseInt($('.field-counter__input').val());
        if (!isNaN(currentVal)) {
            $(this).closest($fieldCounter).find($fieldCounterInput).val(currentVal + 1);
        } else {
            $(this).closest($fieldCounter).find($fieldCounterInput).val(0);
        }
    });

    $fieldCounterMinus.on('click', function (e) {
        e.preventDefault();
        var currentVal = parseInt($('.field-counter__input').val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $(this).closest($fieldCounter).find($fieldCounterInput).val(currentVal - 1);
        } else {
            $(this).closest($fieldCounter).find($fieldCounterInput).val(0);
        }
    });
});