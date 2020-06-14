$(function () {
 
    $('.rate-star').rateYo({
        starWidth: "12px",
        starHeigh: "13px",
        ratedFill: "#f1df1a",
        normalFill: "#dedede",
        readOnly: true,
        rating: 4,
    });

    $('.featured-slider__inner').slick({
        infinite: true,
        variableWidth: true,
        arrows: false,
        dots: true,
        appendDots: ".featured-slider__dots",
        dotsClass: 'featured-slider__control',
        autoplay: true,
        autoplaySpeed: 2000
    });
  });