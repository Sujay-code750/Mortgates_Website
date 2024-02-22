// working section carousel


$(".working.owl-carousel").owlCarousel({
    items:1,
    loop:true,
    autoplay:false,
    // autoplayTimeout:8000,
    smartSpeed:600,
    nav:false,
    // navText: ['<div class="navLeft"><span><i class="fa-solid fa-chevron-left fa-fw"></i></span></div>','<div class="navRight"><span><i class="fa-solid fa-chevron-right fa-fw"></i></span></div>'],
    dots:false,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        425:{
            items:1,
        },
        768:{
            items:1,
        },
        1024:{
            items:1,
        },
        1200:{
            items:1,
        }
    }
})