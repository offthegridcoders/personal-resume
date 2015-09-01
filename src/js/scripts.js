$.fn.grayscale = function() {
  this.addClass('grayscale');
};

$.fn.colorize = function() {
  this.removeClass('grayscale');
};

$(function() {
  $('img').grayscale();
  $('.logo').grayscale();

  $('#fancySwitch').on('change', function(e) {
    if ($(e.target)[0].checked) {
      $('img').colorize();
      $('.logo').colorize();
      $('a').css('color', '#43a0fa');
      $('.standard-section').css('border-left', 'solid 10px #8CE196');
      $('footer').css('border-left', 'solid 10px #8CE196');
    } else {
      $('img').grayscale();
      $('.logo').grayscale();
      $('a').css('color', '#000');
      $('.standard-section').css('border-left', '0');
      $('footer').css('border-left', '0');
    }
  });
});
