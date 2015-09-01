$.fn.grayscale = function() {
  this.addClass('grayscale');
};

$.fn.colorize = function() {
  this.removeClass('grayscale');
};

$(function() {
  $('.logo').grayscale();
  $('img').grayscale();

  $('#fancySwitch').on('change', function(e) {
    if ($(e.target)[0].checked) {
      $('.logo').colorize();
      $('img').colorize();
      $('.main-nav').css('box-shadow', '0px 0px 5px #747474');
      $('.main-nav').css('border-bottom', '0');
      $('a').css('color', '#43a0fa');
      $('.standard-section').addClass('border-left');
      $('.standard-section').css('background-color', 'rgba(97, 139, 102, 0.09)');
      $('footer').css('border-left', 'solid 10px #8CE196');
      $('footer').css('background-color', 'rgba(97, 139, 102, 0.09)');
      $('article').css('box-shadow', '2px 2px 5px rgba(0, 0, 0, 0.14)');
    } else {
      $('.logo').grayscale();
      $('img').grayscale();
      $('a').css('color', '#000');
      $('.standard-section').removeClass('border-left');
      $('.standard-section').css('background-color', '#fff');
      $('footer').css('border-left', '0');
      $('footer').css('background-color', '#fff');
      $('article').css('box-shadow', 'none');
      $('.main-nav').css('box-shadow', 'none');
      $('.main-nav').css('border-bottom', '1px solid #BEB5B5');
    }
  });
});
