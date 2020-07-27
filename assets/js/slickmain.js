$(document).ready(function () {

    $('.Slickslider').slick({
        
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        speed:300,
        dots: false,
        autoplay:true,
        autoplaySpeed:1700,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }

        ]


    });


});