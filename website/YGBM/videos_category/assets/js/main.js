/*global $,window*/

$(function () {
    "use strict";
    var wind = $(window);
    // Adjust Center Height
    $('.adjust-center').height($(window).height());
    $(window).resize(function () {
      $('.adjust-center').height($(window).height());
      $('.info').each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.info').height()) / 4);
      });
    });
    $('.info').each(function () {
      $(this).css('paddingTop', ($(window).height() - $('.info').height()) / 4);
    });
  
  
    // main-01
        $('#time').countdown('2025/12/01', function(event) {
        $('#clock-a .timer').html(event.strftime('%w'));
        $('#clock-b .timer').html(event.strftime('%d'));
        $('#clock-c .timer').html(event.strftime('%H'));
        $('#clock-d .timer').html(event.strftime('%M'));
        $('#clock-f .timer').html(event.strftime('%S'));
    });

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  });