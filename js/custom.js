$(function () {

    const swiper = new Swiper('.main_slide', {
        loop: true,
        speed: 800,
        // effect: 'fade',
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            prevEl: '.visual .arrow .left',
            nextEl: '.visual .arrow .right',
        },
    });

    $('.news_list>li').on('click', function () {
        let idx = $(this).index();
        $('.news_list>li').eq(idx).addClass('active').siblings().removeClass('active');
        $('.news_cont>li').eq(idx).addClass('active').siblings().removeClass('active');
    });

    const swiper2 = new Swiper('.health_slide', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        navigation: {
            prevEl: '.health .arrow .left',
            nextEl: '.health .arrow .right',
        },
        breakpoints: {
            769: {
                slidesPerView: 4,
                //   spaceBetween: 30,
            },
        },
    });

    $('.mobile_menu').on('click', function () {
        $(this).toggleClass('active');
        $('.header').toggleClass('mobile_open');
        $('body').toggleClass('body_fixed');
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header').hasClass('mobile_open')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resize', function () {
        $('.mobile_menu').removeClass('active');
        $('.header').removeClass('mobile_open');
        $('body').removeClass('body_fixed');
    });

});