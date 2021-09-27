$(document).ready(function(){
    // Magnific Popup For Hero Section
    $('.video-popup-link').magnificPopup({
        type: 'iframe'
        // other options
      });

    // Slick Slider For Testimonial Section
    $('.testimonial-slider').slick({
      arrow: true,
    });
    
    // Magnific Popup For Video Section
    $('#video_section .video-popup').magnificPopup({
      type: 'iframe'
      // other options
    });

    // Slick Slider For Company Section
    $('.brand-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

    // Counter Up for Counter Section
    $('#counter_section .counter-box h3').counterUp();
      

})