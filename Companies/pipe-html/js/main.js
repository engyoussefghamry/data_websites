$(document).ready(function() {

  
  "use strict";

  Menuscroll();
  BackToTop();
  MenuLoad();
  MenuSideLoad();
  AppearIteam();
  Sliders();
  PageLoad();
  SearchLoad();
  NavOpen();
  PageScroll();
  PostClick();
  PostClose();
  Zoomgallery();
  PostHover();

   
  
});

function Menuscroll() {

    $(window).scroll(function(evt) {

      var y = $(this).scrollTop();
      if (y > 50) {
        $('.header-scoll').addClass('scroll-active');
      } else {
        $('.header-scoll').removeClass('scroll-active');
      }
    }); 

    var header = $('.fixed-header');
    var range = 250;

    $(window).on('scroll', function () {
      
      var scrollTop = $(this).scrollTop(),
          height = header.outerHeight(),
          offset = height/1.2 ,
          calc = 1 - (scrollTop - offset + range) / range;

      header.css({ 'opacity': calc });

      if (calc > '1') {
        header.css({ 'opacity': 1 });
      } else if ( calc < '0' ) {
        header.css({ 'opacity': 0 });
      }
      
    }); 

}
 

function PostHover() {
    $('.project-hover').on('mouseover', function() {
        var project_hover = $(this).attr('hover-image');
        $('.effect-img-hover').attr('src',project_hover );
    });
}

function Zoomgallery() {
    $('.popup-youtube, .popup-vimeo').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
    $('.zoom-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function(item) {
          return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
        }
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }
      
    });
}

function PostClick() {
  $('.bg-image').on('click', function() {
      var bg_image = $(this).attr('bg-image');
      $('.hover-blog-image').css('background-image','url('+ bg_image + ')' );
      $('html, body').animate({scrollTop : 0},400);
      $('.hover-blog-content .entry-title,.hover-blog-content .entry-meta').fadeOut(0);
      $('.blog-post').fadeOut(100, function() {
          $('#postid').fadeIn();
          $('.entry-share-div').fadeIn();
      });
      return false;  
  });

  $('.post-detail').on('click', function() {
      $('.blog-post').fadeOut(100, function() {
          $('#postid').fadeIn();
      });
     return false;  
  });
}

function PostClose() {
  $('.close-single-blog').on('click', function() {
      
      $('.hover-blog-content .entry-title,.hover-blog-content .entry-meta').fadeIn(200);
      $('.blog-post').fadeIn(100, function() {
          $('#postid').fadeOut();
          $('.entry-share-div').fadeOut(0);
      });
      return false;  
  });
}

function SearchLoad() {
     $('.search-icon').on('click', function() {
      $('.search-section').fadeIn();    
      return false;  
    });
    $('.close-search').on('click', function() {
      $('.search-section').fadeOut();  
      return false;    
    });
}
function NavOpen() {
    $('.open-nav').on('click', function() {
        $('.header-wrapper').toggleClass('nav-is-open');
        $('.upper-header').toggleClass('active');    
        return false;  
    });
     
} 

 


/*--------------------------------------------------
Function Back To Top
---------------------------------------------------*/
  
  function BackToTop() {
    
    $('.back-top').on('click', function() {
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
    
  
  }//End Back To Top


/*--------------------------------------------------
Function Slider
---------------------------------------------------*/

  function Sliders() {

      $('.slider-0').owlCarousel({
          loop:false,
          margin:0,
          nav:true,
          autoplay:false,  
          autoplayTimeout:9000, 
          dots:false,
          navText:['<img src="images/icon46.png" alt="left-arrow" />','<img src="images/icon47.png" alt="right-arrow" />'],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:3
              }
          }
      })

      $('.slider-02').owlCarousel({
          loop:false,
          margin:0,
          nav:true,
          autoplay:true,  
          autoplayTimeout:9000, 
          dots:false,
          navText:['<img src="images/icon85.png" alt="left-arrow" />','<img src="images/icon86.png" alt="right-arrow" />'],
          responsive:{
              0:{
                  items:2
              },
              600:{
                  items:2
              },
              1000:{
                  items:4
              },
              1400:{
                  items:4
              },
              1600:{
                  items:3
              }
          }
      })

      $('.slider-03').owlCarousel({
          loop:false,
          margin:25,
          nav:true,
          autoplay:true,  
          autoplayTimeout:9000, 
          dots:false,
          navText:['<img src="images/icon46.png" alt="left-arrow" />','<img src="images/icon47.png" alt="right-arrow" />'],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:4
              }
          }
      })

      $('.slider-01').owlCarousel({
          loop:true,
          margin:0,
          nav:true,
          autoplay:false,  
          autoplayTimeout:9000, 
          dots:false,
          navText:['<img src="images/icon46.png" alt="left-arrow" />','<img src="images/icon47.png" alt="right-arrow" />'],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:2
              }
          }
      })

      $('.slider-carousel').owlCarousel({
          loop:true,
          margin:150,
          nav:true,
          autoplay:true,  
          autoplayTimeout:5000, 
          dots:false,
          navText:['<img src="images/icon46.png" alt="left-arrow" />','<img src="images/icon47.png" alt="right-arrow" />'],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      })

      $('.slider-carousel-02').owlCarousel({
          loop:true,
          margin:150,
          nav:true,
          autoplay:false,  
          autoplayTimeout:5000, 
          dots:false,
          navText:['<img src="images/icon46.png" alt="left-arrow" />','<img src="images/icon46a.png" alt="right-arrow" />'],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      })


      

       
    
      $('.slider-1').owlCarousel({
          loop:true,
          margin:0,
          nav:true,
          autoplay:true,  
          autoplayTimeout:5000, 
          dots:true,
          animateOut: 'slideOutDown',
          animateIn: 'flipInX',
          navText:['<img src="images/left-arrow.png" alt="left-arrow" />','<img src="images/right-arrow.png" alt="right-arrow" />'],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      })

      $('.slider-2').owlCarousel({
          loop:true,
          margin:0,
          nav:true,
          autoplay:true,  
          autoplayTimeout:9000, 
          dots:false,
          navText:['<img src="images/left-arrow-2.png" alt="left-arrow" />','<img src="images/right-arrow-2.png" alt="right-arrow" />'],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      })
      $('.slider-3').owlCarousel({
          margin:20,
          loop:true,
          autoWidth:true,
          autoplay:true,  
          items:4,
          navText:['<img src="images/left-arrow-2.png" alt="left-arrow" />','<img src="images/right-arrow-2.png" alt="right-arrow" />']
           
      })

      $('.slider-4').owlCarousel({
          loop:true,
          margin:20,
          nav:true,
          autoplay:true,  
          autoplayTimeout:7000, 
          dots:false,
          navText:['<img src="images/left-arrow.png" alt="left-arrow" />','<img src="images/right-arrow.png" alt="right-arrow" />'],
          responsive:{
              0:{
                  items:1
              },

              600:{
                  items:2
              },
              800:{
                  items:3
              },
              1200:{
                  items:4
              }
          }
      })

      var slider_vertical = $('.slider-vertical');

      slider_vertical.owlCarousel({
          loop:true,
          margin:0,
          nav:true,
          autoplay:true,  
          autoplayTimeout:7000, 
          dots:false,
          navText:['<img src="images/icon46.png" alt="left-arrow" />','<img src="images/icon47.png" alt="right-arrow" />'],
          responsive:{
              0:{
                  items:1
              },

              600:{
                  items:2
              },
              800:{
                  items:3
              },
              1200:{
                  items:4
              }
          }
      })

      slider_vertical.on('mousewheel', '.owl-stage', function (e) {
          if (e.deltaY>0) {
              slider_vertical.trigger('prev.owl');
          } else {
              slider_vertical.trigger('next.owl');
          }
          e.preventDefault();
      });


      var owlslider_7 = $('.slider-7');

      owlslider_7.owlCarousel({
          loop:true,
          margin:0,
          mouseDrag:false,
          nav:false,
          autoplay:false,  
          animateOut: 'fadeOut',
          autoplayTimeout:6000, 
          dots:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      })

      owlslider_7.on('mousewheel', '.owl-stage', function (e) {
          if (e.deltaY>0) {
              owlslider_7.trigger('prev.owl');
          } else {
              owlslider_7.trigger('next.owl');
          }
          e.preventDefault();
      });

      

      

      
      var owl = $('.slider-6');
      owl.owlCarousel({
        mouseDrag:false,
          loop:false,
          margin:0,
          nav:false,
          autoplay:false,  
          animateOut: 'slideOutUp',
          animateIn: 'slideInUp',
          autoplayTimeout:6000, 
          dots:true,
          items:1
      })
    


    $('.slider-8').owlCarousel({
          loop:true,
          margin:30,
          nav:true,
          autoplay:true,  
          autoplayTimeout:6000, 
          dots:true,
          navText:['<img src="images/left-arrow.png" alt="left-arrow" />','<img src="images/right-arrow.png" alt="right-arrow" />'],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:3
              }
          }
      })


      $('.testimonial-oneSlide').owlCarousel({
          loop:true,
          margin:30,
          nav:false,
          autoplay:true,  
          autoplayTimeout:6000, 
          dots:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      })

      $('.menu-twoSlide').owlCarousel({
          loop:true,
          margin:30,
          nav:true,
          autoplay:false,  
          dots:false,
          navText:['<img src="images/left-arrow.png" alt="left-arrow" />','<img src="images/right-arrow.png" alt="right-arrow" />'],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:2
              }
          }
      })

      $('.slider-fade').owlCarousel({
          mouseDrag:false,
          loop:false,
          margin:0,
          nav:false,
          autoplay:true,  
          animateOut: 'fadeOut',
          autoplayTimeout:6000, 
          dots:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      })
      $('.shop-slider').owlCarousel({
          mouseDrag:false,
          loop:true,
          margin:0,
          nav:true,
          navText:['<img src="images/icon46.png" alt="left-arrow" />','<img src="images/icon47.png" alt="right-arrow" />'],
          autoplay:true,  
          animateOut: 'fadeOut',
          autoplayTimeout:6000, 
          dots:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      })

      $('.shop-slider-two').owlCarousel({
          mouseDrag:false,
          loop:true,
          margin:0,
          nav:true,
          navText:['<img src="images/icon85.png" alt="left-arrow" />','<img src="images/icon86.png" alt="right-arrow" />'],
          autoplay:true,  
          animateOut: 'fadeOut',
          autoplayTimeout:6000, 
          dots:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      })



       $('.flipInX').owlCarousel({
          mouseDrag:false,
          loop:true,
          margin:0,
          nav:false,
          autoplay:true,  
          animateOut: 'slideOutDown',
          animateIn: 'flipInX',
          autoplayTimeout:3000, 
          dots:false,
          smartSpeed:450,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      })

      var sync2 = $('#vertical-slide-top'),
          sync1 = $('#vertical-slide-bottom');

          // Sync nav
          sync1.on('click', '.owl-next', function () {
              sync2.trigger('next.owl.carousel')
          });
          sync1.on('click', '.owl-prev', function () {
              sync2.trigger('prev.owl.carousel')
          });

          // Start Carousel
          sync1.owlCarousel({
              loop : true,
              items : 1,
              margin:0,
              nav : true,
              dots : false,
              navText:['<img src="images/icon46.png" alt="left-arrow" />','<img src="images/icon47.png" alt="right-arrow" />'],
              animateOut: 'slideOutDown',
              animateIn: 'slideInDown'
              
          });

          sync2.owlCarousel({
              loop : true,
              items : 1,
              margin:0,
              nav : false,
              dots : false,
              animateOut: 'slideOutUp',
              animateIn: 'slideInUp',
          }); 


    

    
       





  }
 
 
 


/*--------------------------------------------------
Function Appear Items
---------------------------------------------------*/
function AppearIteam() {    
    
    setTimeout(function(){
      $('.has-animation').each(function() { 
        $(this).appear(function() {       
          $(this).delay($(this).attr('data-delay')).queue(function(next){
            $(this).addClass('animate-in');
            next();
          });           
        });   
      });
    } , 250 );    
  
  }//End AppearIteam

/*--------------------------------------------------
Function Menu Load
---------------------------------------------------*/ 

function MenuLoad() {

  
    $('#toggle-menu-bttn').on('click', function() {      
        $('#toggle-menu').toggle();
    });
    // mobile menu
    $('.menu-click').on('click', function() {      
        $(this).toggleClass('open');      
        $('.main-wrap').toggleClass('active');      
        $('.menu-wrap-mobile').toggleClass('active'); 
        $('html').toggleClass('ovh-hid'); 
        
        return false;

    });

    $(".menu-wrap-mobile a.scroll-tiger").on("click", function(e) {
        $('.menu-click').removeClass('open');      
        $('.main-wrap').removeClass('active');      
        $('.menu-wrap-mobile').removeClass('active'); 
        $('html').removeClass('ovh-hid'); 
        return false;        
    });

    $(".drop-megamenu").on({
        mouseenter: function () {
            $('.white-scroll').addClass('scroll-active');      
            return false;
        },
        mouseleave: function () {
             $('.white-scroll').removeClass('scroll-active');      
            return false;
        }
    });

    

    $('.menu-wrap-mobile .drop-megamenu').on('click', function() {
        $(this).find('.mega-menu').toggleClass('active');
        return false;
    });
    $('.menu-wrap-mobile .drop-dropdown').on('click', function() {
        $(this).find('.menu-dropdown').toggleClass('active');
        return false;
    });
    $('#menu-slide').on('click', function() {
        $('.menu-slide').addClass('active');
        return false;
    });
    $('.menu-slide-close').on('click', function() {
        $('.menu-slide').removeClass('active');
        $('#menu-slide').removeClass('open');
        return false;
    });

    

    

    

    var $menu = $('#main-menu');
    
    // add classes
    $menu.find('li').each(function() {
      if($(this).children('ul').length) {
        $(this).addClass('has-submenu');
        $(this).find('>a').after('<span class="submenu-toggle"></span>');
      }
    });
    
    var $submenuTrigger = $('.has-submenu > .submenu-toggle');
    // submenu link click event
    $submenuTrigger.on( "click", function() {
      $(this).parent().toggleClass('active');
      $(this).siblings('ul').toggleClass('active');
    });


}

function MenuSideLoad() {
    $('.side-click').on('click', function() {      
        $(this).toggleClass('open');      
        $('.overlay-section').toggleClass('active'); 
        $('.menu-overlay').toggleClass('active'); 
        return false;
    });
    $('.close-menu').on('click', function() {
        $('.side-click').removeClass('open'); 
        $('.overlay-section').removeClass('active'); 
        $('.menu-overlay').removeClass('active'); 
        return false;
    });
}

/*--------------------------------------------------
Function Page Load
---------------------------------------------------*/

function PageLoad() {

    $('.pipe-preloader').addClass("pipe-loading full-preloader");
    $('.pipe-preloader > span').width($( window ).width());
          
    jQuery(window).load(function() {

       setInterval(function(){ 
          $('.pipe-preloader').addClass("pipe-preloader-loaded");
      }, 500);
      setInterval(function(){ 
          $('.pipe-preloader-wrapper > span').addClass("d-none");
          $('.pipe-loader-wrapper').fadeOut(400);
      }, 900);          
      setInterval(function(){ 
          $('.pipe-preloader-wrapper,.pipe-proload-wrapper').addClass("d-none");
      }, 1000);



    });

    $(window).width()>0&&setTimeout(function(){var e=0,t=0,n=setInterval(function(){$(".loader .loader-counter").html(t+"%"),$(".loader").css("width",t+"%"),t++,101==++e&&(clearInterval(n),$(".loader,.loader-wrapper").fadeOut(300))},12)});
  }


function PageScroll() {
   $(".scroll-tiger").on("click", function(e) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top - 0
        }, 1500, 'easeInOutExpo');
        $('.overlay-section').removeClass('active'); 
        e.preventDefault();

    });

}

