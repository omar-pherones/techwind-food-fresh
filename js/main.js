$(document).ready(function(){
    var mixer = mixitup('.food-menu-Wraper', {
        animation: {
            duration: 320,
            nudge: true,
            reverseOut: false,
            effects: 'fade translateX(8%)',
        },
    });

    $('#example2').calendar({
        type: 'date',
    });

    $('.testimonial-sliders').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoPlay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });

    $('.post-sliders').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 12,
        autoPlay: true,
        slidesToScroll: 1,
        prevArrow: `<i class="fa-solid fa-chevron-left prevArrow"></i>`,
        nextArrow: `<i class="fa-solid fa-chevron-right nextArrow"></i>`,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });

    new VenoBox({
        selector: '.my-link',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane',
    });



})