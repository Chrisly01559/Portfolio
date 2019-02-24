$(document).ready(function () {

//smooth scroll
  $("#navbar  a").on('click',function (e) {
    if (this.hash !== " ") {
      e.preventDefault ();
      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function () {
        window.location.hash = hash;
      });
     }
   });

// home animations
  $(window).scroll (function () {
    let position = $(this).scrollTop();
    console.log(position);
    if (position >= 1) {
      $('.nav-animation').addClass('fromTop');
      $('.row1-animation').addClass('fromLeft');
    } else {
      $('.nav-animation').removeClass('fromTop');
        $('.row1-animation').removeClass('fromLeft');
    }
  });

//about animations

    $(window).scroll (function () {
      let position = $(this).scrollTop();
      if (position >= 300) {
        $('.intro-top-anim').addClass('fromTop');
        $('.intro-left-anim').addClass('fromLeft');
        $('.intro-right-anim').addClass('fromRight');
      } else {
        $('.intro-top-anim').removeClass('fromTop');
        $('.intro-left-anim').removeClass('fromLeft');
        $('.intro-right-anim').removeClass('fromRight');
      }
    });

    $(window).scroll (function () {
      let position = $(this).scrollTop();
      if (position >= 1190) {
        $('.hobbies-top-anim').addClass('fromTop');
        $('.hobbies-left-anim').addClass('fromLeft');
        $('.hobbies-right-anim').addClass('fromRight');
      } else {
        $('.hobbies-top-anim').removeClass('fromTop');
        $('.hobbies-left-anim').removeClass('fromLeft');
        $('.hobbies-right-anim').removeClass('fromRight');
      }
    });

    $(window).scroll (function () {
      let position = $(this).scrollTop();
      if (position >= 1630) {
        $('.web-left-anim').addClass('fromLeft');
        $('.web-right-anim').addClass('fromRight');
      } else {
        $('.web-left-anim').removeClass('fromLeft');
        $('.web-right-anim').removeClass('fromRight');
      }
    });

    $(window).scroll (function () {
      let position = $(this).scrollTop();
      if (position >= 2180) {
        $('.skill-left-anim').addClass('fromLeft');
        $('.skill-right-anim').addClass('fromRight');
      } else {
        $('.skill-left-anim').removeClass('fromLeft');
        $('.skill-right-anim').removeClass('fromRight');
      }
    });

    $(window).scroll (function () {
      let position = $(this).scrollTop();
      if (position >= 2900) {
        $('.port-top-anim').addClass('fromTop');
        $('.port-left-anim').addClass('fromLeft');
      } else {
        $('.port-top-anim').removeClass('fromTop');
        $('.port-left-anim').removeClass('fromLeft');
      }
    });

    $(window).scroll (function () {
      let position = $(this).scrollTop();
      if (position >= 2900) {
        $('.port-top-anim').addClass('fromTop');
        $('.port-left-anim').addClass('fromLeft');
      } else {
        $('.port-top-anim').removeClass('fromTop');
        $('.port-left-anim').removeClass('fromLeft');
      }
    });

    $(window).scroll (function () {
      let position = $(this).scrollTop();
      if (position >= 3900) {
        $('.contact-top-anim').addClass('fromTop');
        $('.contact-left-anim').addClass('fromLeft');
      } else {
        $('.contact-top-anim').removeClass('fromTop');
        $('.contact-left-anim').removeClass('fromLeft');
      }
    });


});
