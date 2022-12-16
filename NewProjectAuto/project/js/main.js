$(function() {

    $('.auto__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 801,
                settings: {
                    slidesToShow: 2,
                    dots: true
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            },


        ]
    });

});

$(function() {
    $("a.scrollto").click(function() {
        let elementClick = $(this).attr("href")
        let destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 2500);
        return false;
    });
});