$(function() {
    // кастомный селект
    $('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('hidden');
        $this.wrap('<div class="field-select"></div>');
        $this.after('<div class="field-select__pseudoselect"></div>');

        var $styledSelect = $this.next('div.field-select__pseudoselect');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'field-select__drop'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.on('click', function(e) {
            e.stopPropagation();
            console.log($(this));
            $('div.field-select__pseudoselect.active').not(this).each(function(){
                // $(this).removeClass('active').next('ul.field-select__drop').hide();
                $(this).removeClass('active').next('ul.field-select__drop').removeClass('active');
            });
            // $(this).toggleClass('active').next('ul.field-select__drop').toggle();
            $(this).toggleClass('active').next('ul.field-select__drop').toggleClass('active');
        });

        $listItems.on('click', function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $this.val($(this).attr('rel'));
            // $list.hide();
            $list.removeClass('active');
            console.log($(this));
        });

        $(document).on('click', function() {
            $styledSelect.removeClass('active');
            // $list.hide();
            $list.removeClass('active');
        });

    });
});