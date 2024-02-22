// owlCarosel

$(".testimonial.owl-carousel").owlCarousel({
    items:3,
    loop:true,
    autoplay:true,
    autoplayTimeout:8000,
    smartSpeed:1000,
    nav:true,
    navText: ['<div class="navLeft"><span><i class="fa-solid fa-chevron-left fa-fw"></i></span></div>','<div class="navRight"><span><i class="fa-solid fa-chevron-right fa-fw"></i></span></div>'],
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
            items:2,
        },
        1024:{
            items:2,
        },
        1200:{
            items:3,
        }
    }
})