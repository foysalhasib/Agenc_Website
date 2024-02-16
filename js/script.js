$('.banner_slider_area').slick(
    {
        arrows:false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
    }
);
$('.main-slider').slick(
    {
        arrows:true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:'<i class="fa-solid fa-angle-left left "></i>', 
        nextArrow:'<i class="fa-solid fa-angle-right right"></i>',
        centerMode: true,
        centerPadding: '0', 
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode:false,
              }
            },       
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode:true,
              }
            },       
            {
              breakpoint: 575.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }       
          ]
    }
);