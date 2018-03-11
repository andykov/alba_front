$(function() {

    if ($('.js-product-gallery-big').length) {

        var $svgWrap,
            $productGalleryBig = $('.js-product-gallery-big'),
            $productGalleryThumb = $('.js-product-gallery-thumb'),
            $productGalleryItem = $('.product-gallery__item'),
            $productGalleryItemFirst = $('.product-gallery__item:first-child'),
            $productGalleryFirstImg = $productGalleryItem.first().find('img'),
            productGalleryFirstImgPath = $productGalleryFirstImg.attr('src');

        $productGalleryBig.on('init', function(event, slick) {
            $productGalleryFirstImg.css({
                'opacity': 0,
                'visibility': 'hidden'
            });
            $('.js-product-gallery-big .slick-current').append('<div id="svg-mask-wrap" style="opacity: 0"></div>');
            console.log('slick init');
            $svgWrap = $('#svg-mask-wrap');
        });

        if($productGalleryBig.length) {
            $productGalleryBig.slick({
                mobileFirst: true,
                lazyLoad: 'ondemand',
                arrows: false,
                slidesToShow: 2,
                centerMode: true,
                variableWidth: true,
                dots: false,
                centerPadding: '0',
                asNavFor: $productGalleryThumb
            });
            $productGalleryThumb.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: $productGalleryBig,
                arrows: false,
                dots: false,
                centerPadding: '0',
                focusOnSelect: true
            });
        }

        var divSizeWidth = $('.js-product-gallery-big .slick-current').width(),
            divSizeHeight = $('.js-product-gallery-big .slick-current').height();

        function makeSVG(tag, attrs) {
            var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
            for (var k in attrs)
                el.setAttribute(k, attrs[k]);
            return el;
        }

        var svg = makeSVG('svg', {
            id:"svg-mask",
            viewBox:"0 0 "+ divSizeWidth +" "+ divSizeWidth,
            version:"1.1",
            xmlns:"http://www.w3.org/2000/svg",
            'mlns:xlink': "http://www.w3.org/1999/xlink",
            width:'100%',
            height:'100%',
        }),
        group_1 = makeSVG('g', { id: 'group_1' }),
        group_2 = makeSVG('g', { id: 'group_2' }),
        defs = makeSVG('defs'),
        mask_1 = makeSVG('mask', { id: 'mask_1', fill: 'white' }),
        mask_2 = makeSVG('mask', { id: 'mask_2', fill: 'white' }),
        useMask_1 = makeSVG('use', {'xlink:href': '#poly_1'}),
        useMask_2 = makeSVG('use', {'xlink:href': '#poly_2'}),
        poly_1 = makeSVG('polygon', {
            id: 'poly_1',
            points: [divSizeWidth, 0, 0, divSizeHeight, 0, 0]
        }),
        poly_2 = makeSVG('polygon', {
            id: 'poly_2',
            points: [divSizeWidth, 0, 0, divSizeHeight, divSizeWidth, divSizeHeight]
        }),
        polyMask_1 = makeSVG('polygon', {
            id: 'polyMask_1',
            points: [divSizeWidth, 0, 0, divSizeHeight, 0, 0]
        }),
        polyMask_2 = makeSVG('polygon', {
            id: 'polyMask_2',
            points: [divSizeWidth, 0, 0, divSizeHeight, divSizeWidth, divSizeHeight]
        }),
        img_1 = makeSVG('image', {
            mask: "url(#mask_1)",
            x: divSizeWidth,
            y: divSizeWidth,
            width: divSizeWidth,
            height: divSizeWidth,
            'xlink:href': productGalleryFirstImgPath
        }),
        img_2 = makeSVG('image', {
            mask: "url(#mask_2)",
            x: -divSizeWidth,
            y: -divSizeWidth,
            width: divSizeWidth,
            height: divSizeWidth,
            'xlink:href': productGalleryFirstImgPath
        });

        document.getElementById('svg-mask-wrap').appendChild(svg).appendChild(defs).appendChild(poly_1);
        document.getElementById('svg-mask-wrap').appendChild(svg).appendChild(defs).appendChild(poly_2);

        document.getElementById('svg-mask').appendChild(group_1).appendChild(mask_1).appendChild(useMask_1);
        document.getElementById('group_1').appendChild(img_1);

        document.getElementById('svg-mask').appendChild(group_2).appendChild(mask_2).appendChild(useMask_2);
        document.getElementById('group_2').appendChild(img_2);

        // костылик, для работы svg маски
        $('.js-product-gallery-big .slick-current').append($svgWrap.html($svgWrap.html()));

        setTimeout(function(){

            // $svgWrap.addClass('animate');
            $svgWrap.delay( 0 ).animate({
                opacity: 1,
            }, 200);
            $svgWrap.find('image').animate({
                x: 0,
                y: 0
            }, 1200, function () {

                setTimeout(function(){
                    $productGalleryFirstImg.css({
                        'opacity': 1,
                        'visibility': 'visible'
                    });
                    $svgWrap.remove();
                }, 200);
            });
        }, 0);
    }

});