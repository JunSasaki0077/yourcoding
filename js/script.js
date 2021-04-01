//ハンバーガーメニュー 
$('.burger-btn').on('click',function(){
  $('.burger-btn').toggleClass('close');
  $('.nav-wrapper').fadeToggle(500);
});
// 画面外にクリックしたときメニューを閉じる
let nav = $('.burger-btn');
$('section').click(function() {
   if(nav.hasClass('close')) {
     $('.burger-btn').removeClass('close');
     $('.nav-wrapper').fadeToggle(500);
   }
 });

// よくある質問アコーディオンメニュー部分
$('.sec04__acmenu dd').hide();
$('.sec04__open').show();
$('.sec04__acmenu dt').click(function () {
  $(this).next().slideToggle();
});

//制作実務スワイプ部分
var swiper = new Swiper('.swiper-container', {
  centeredSlides: true,
  slidesPerView: 'auto',

  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//AOSスライド 部分
AOS.init({
  offset: 350,
  duration: 300,
  easing: 'ease',
  delay: 50,
  once: false,
  anchorPlacement: 'top-center',
});

// 指定した場所にスライド移動する部分
$('.topmove').click(function () {
  let moveTo = $(this).attr('href');
  let position = $(moveTo).offset().top - 94;
  $('html,body').animate({ scrollTop: position }, 700);
});

// googleフォームに送信する部分
$(document).ready(function () {
  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url:
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLScz2CnaP-tRmiDjnHFD8ytuVeUmWdA_-ko2CZQQWm9j0Crr4w/formResponse',
      data: formData,
      type: 'POST',
      dataType: 'xml',
      statusCode: {
        0: function () {
          $('.sec07__form-endMessage').slideDown('slow');
          $('.sec07__form-submit').fadeOut('slow');
          //window.location.href = "thanks.html";
        },
      },
    });
    event.preventDefault();
  });
});
