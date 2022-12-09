$(function() {
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        dots: true
    });

    $('.header__btn').on('click', function() {
        $('.menu').addClass('active')
    })
    $('.cross').on('click', function() {
        $('.menu').removeClass('active')
    })
});