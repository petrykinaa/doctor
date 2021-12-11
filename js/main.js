$(function () {

  $('.slider__list').slick({
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 1000
  });

  $(".header__nav a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

});