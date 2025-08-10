(function ($) {
  "use strict";

  /*==== Document Ready Function ====*/
  jQuery(document).ready(function($){
    // MOBILE MENU STARTS
    $("#main-menu").slicknav({
      allowParentLinks: true,
      prependTo: '#mobile-menu-wrap',
      label: '',
    });

    $(".mobile-menu-trigger").on("click", function(e) {
    $(".mobile-menu-container").addClass("menu-open");
    e.stopPropagation();
    });

    $(".mobile-menu-close").on("click", function(e) {
    $(".mobile-menu-container").removeClass("menu-open");
    e.stopPropagation();
    });
    // MOBILE MENU ENDS

    // Enable inline Background image
    $("[data-background]").each(function () {
      $(this).css("background-image", "url( " + $(this).attr("data-background") + " )");
    });

    // TESTIMONIAL STARTS
    $('.testimonial-slider').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
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
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });
    // TESTIMONIAL ENDS

    // BAR FILLAR
    if ($(".progress-bar").length){

      const skillsSection = document.getElementById('skills-section','skills-section-one','skills-section-two');
      
      const progressBars = document.querySelectorAll('.progress-bar');
      
      function showProgress(){
        progressBars.forEach(progressBar=>{
          const value = progressBar.dataset.progress;
          progressBar.style.opacity = 1;
          progressBar.style.width = `${value}%`;
        
        });
      }
      
      function hideProgress(){
        progressBars.forEach(p => {
          p.style.opacity = 0;
          p.style.width = 0;
        });
      }
      
      window.addEventListener('scroll',() => {
        const sectionPos = skillsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight;
      
        if(sectionPos < screenPos){
          showProgress();
        }else{
          hideProgress();
        }
      });

    }
    // BAR FILLAR

    // BLOG STARTS
    $('.blog-slider').slick({
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<i class="testimonial-arrow-lef flaticon-left-arrow"></i>',
      nextArrow: '<i class="testimonil-arrow-right flaticon-right-arrow"></i>',
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
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
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });
    // BLOG ENDS

    // VIDEO POPUP
    $('.vedio-popup-link').magnificPopup({
      type: 'iframe'
    });
    // VIDEO POPUP ENDS

    // WOW
    new WOW().init();
    // WOW

     // BLOG STARTS
     $('.htw-testimonial-slider').slick({
      vertical: true,
      verticalSwiping: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      prevArrow: '<i class="testimonial-arrow-lef flaticon-left-arrow"></i>',
      nextArrow: '<i class="testimonil-arrow-right flaticon-right-arrow"></i>',
    });
    // BLOG ENDS

    //FOOTER 
    $('.footer-gallery').magnificPopup({
      type: 'image',
      delegate:'a',
      gallery:{
        enabled:true
      }
    });
    //FOOTER 


    // COUNTER STARTS 
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
    // COUNTER ENDS

    // Scroll To Top start
    $(".scroll-to-top").on("click", function() {

      $("html, body").animate({ scrollTop: 0 }, "slow");
      return true;

    });

    $(window).on("scroll",function(){

    var pagescroll = $(window).scrollTop();
    if(pagescroll > 100){
      $(".scroll-to-top").addClass("scroll-to-top-visible");

    }else{
      $(".scroll-to-top").removeClass("scroll-to-top-visible");
    }

    });
    // Scroll To Top ends

  });


  /*====  Window Load Function =====*/
  jQuery(window).on('load', function() {
    //Preloader
    $('.preloader-wrapper').delay(1000).fadeOut('slow');
    setTimeout(function() {
        $('.site').addClass('loaded');
    }, 500);
  });

    

}(jQuery));


 