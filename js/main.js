$(function () {
    "use strict";

    //======MENU FIX========
    if ($('.main_menu').offset() != undefined) {
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 40) {
                $('.main_menu').addClass('menu_fix');
            } else {
                $('.main_menu').removeClass('menu_fix');
            }
        });
    }


    //======NICE SELECT========
    $('.select_js').niceSelect();


    //=======COUNTER JS=======
    $('.counter').countUp();


    //=======TESTI SLIDER======
    $('.testi_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //========= summer note js =========
    // $(document).ready(function () {
    //     $('.summer_note').summernote();
    // });





});