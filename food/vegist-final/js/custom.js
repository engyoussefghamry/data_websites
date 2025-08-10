$(document).ready(function(){
    "use strict";

  /* ========================================== 
    Stikcy header
  ========================================== */
  $(window).scroll(function(){
    if($(this).scrollTop() > 75) {
        $('#collapsibleNavbar').addClass('sticky');
    } else {
        $('#collapsibleNavbar').removeClass('sticky');
    }
  });

  /* ========================================== 
    smooth scroll
  ========================================== */

  $(document).on('click', 'nav ul.nav li a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });


 
  /*======================================
    store slider
  ======================================*/
  $('#theme-store').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    nav: false,
    dots: false,
    responsive:{
      0:{
        items: 1,
        margin: 15
      },
      479:{
        items: 1,
        margin: 15
      },
      768:{
        items: 2
      },
      979:{
        items: 3
      },
      1199:{
        items: 4
      },
      1499:{
        items: 5
      }
    }
  });

});