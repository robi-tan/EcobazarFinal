$(document).ready(function(){
    $('.bannerSlider').slick({
      prevArrow:'#bannerleftArrow',
      nextArrow:'#bannerrightArrow',
      dots:true,
      dotsClass:'slider-dots',
      autoplay: true,
      autoplaySpeed: 4000,
    });
    $('#mainHeader .search').click(function () {
      $('.seachWrapper').addClass('active')
    })
    $('#mobileMenu .search').click(function () {
      $('.seachWrapper').addClass('active')
    })
    $('.cross').click(function () {
      $('.seachWrapper').removeClass('active')
    })
    $('.categoriesSlider').slick({
      prevArrow:'#cateleftArrow',
      nextArrow:'#caterightArrow',
      autoplay: true,
      autoplaySpeed: 4000,
    });
    $('.counter').counterUp({
      delay: 10,
      time: 1500,
  });
  $('.testimonialSlider').slick({
    prevArrow:'.testLeft',
    nextArrow:'.testRight',
    dotsClass:'slider-dots',
    autoplay: true,
    autoplaySpeed: 4000,
  });
  $('.productThumslider').slick({
    slidesToShow: 4,
    vertical: true,
    arrows: false,
    verticalSwiping: true,
    asNavFor: '.productGalleryslider',
    focusOnSelect: true,
        responsive:[
    {
      breakpoint: 768,
      settings: {
        vertical:false,
        adaptiveHeight:true,
      }
    },
    ]

   });
   $('.productGalleryslider').slick({
      slidesToShow: 1,
      arrows: false,
      asNavFor: '.productThumslider',
   });
  // Decrease quantity
  $('.decrement').click(function() {
    var $span = $(this).next('span'); // Get the next span element
    var qty = parseInt($span.text());
    if (qty > 1) {
      $span.text(qty - 1);
    }
  });
  
  // Increase quantity
  $('.increment').click(function() {
    var $span = $(this).prev('span'); // Get the previous span element
    $span.text(parseInt($span.text()) + 1);
  });
  });
