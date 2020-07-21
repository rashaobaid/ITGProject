$(document).ready(function () {

    $('.Slickslider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        dots: false,
        // rtl: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]


    });


});