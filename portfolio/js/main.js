$(document).ready(function () {

  $(window).scroll (function () {
    let position = $(this).scrollTop();
    if (position >= 1) {
      $('.header-text1').addClass('header-text');
      $('.row1').addClass('intro-row');
    } else {
      $('.header-text1').removeClass('header-text');
        $('.row1').removeClass('intro-row');
    }
  });


  $(window).scroll (function () {
    let position = $(this).scrollTop();
    if (position >= 90) {
      $('.header-row2').addClass('header-text');
      $('.row2').addClass('intro-row1');
    } else {
      $('.header-row2').removeClass('header-text');
      $('.row2').removeClass('intro-row1');
    }
  });

  $(window).scroll (function () {
    let position = $(this).scrollTop();
    if (position >= 700) {
      $('.row3').addClass('intro-row1');
    } else {
      $('.row3').removeClass('intro-row1');
    }
  });

  $(window).scroll (function () {
    let position = $(this).scrollTop();
    if (position >= 900) {
      $('.row4').addClass('intro-row');
    } else {
      $('.row4').removeClass('intro-row');
    }
  });


});
