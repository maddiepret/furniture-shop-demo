// First slider
$(".slider-one")
    .not(".slick-initialized")
    .slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: ".site-slider .slide.btn .prev",
        nextArrow: ".site-slider .slide.btn .next",
    });

// Second slider
$(".slider-two")
    .not(".slick-initialized")
    .slick({
        prevArrow: ".site-slider-two .prev",
        nextArrow: ".site-slider-two .next",
        slideToShow: 5,
        slideToScroll: 1,
        autoplaySpeed: 3000
    });