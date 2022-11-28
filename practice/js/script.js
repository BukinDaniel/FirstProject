$(function() {
    $('.about-safari__link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.gallary__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/arrow-right.svg" alt=""></button>'
    });

    $('.galary__item-inner').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },

    });

    // $('.galary__item-inner').magnificPopup({
    //     delegate: 'a',
    //     type: 'image',
    //     closeOnContentClick: false,
    //     closeBtnInside: false,
    //     mainClass: 'mfp-with-zoom mfp-img-mobile',

    //     gallery: {
    //         enabled: true
    //     },
    //     zoom: {
    //         enabled: true,
    //         duration: 400, // don't foget to change the duration also in CSS
    //         opener: function(element) {
    //             return element.find('img');
    //         }
    //     }

    // });
});