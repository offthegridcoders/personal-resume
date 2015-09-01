$.fn.grayscale = function() {
  this.addClass('grayscale');
};

$.fn.colorize = function() {
  this.removeClass('grayscale');
};

$(function() {
  $('.logo').hide();
  $('.logo-container').hide();

  $('#fancySwitch').on('change', function(e) {
    if ($(e.target)[0].checked) {
      $('.logo-container').show('fast');
      $('.logo').show('fast');
      $('a').css('color', '#43a0fa');
      $('.standard-section').css('border-left', 'solid 10px #8CE196');
      $('.standard-section').css('background-color', 'rgba(97, 139, 102, 0.09)');
      $('footer').css('border-left', 'solid 10px #8CE196');
      $('footer').css('background-color', 'rgba(97, 139, 102, 0.09)');
      $('article').css('box-shadow', '2px 2px 5px rgba(0, 0, 0, 0.14)');
    } else {
      $('.logo-container').hide();
      $('.logo').hide();
      $('a').css('color', '#000');
      $('.standard-section').css('border-left', '0');
      $('.standard-section').css('background-color', '#fff');
      $('footer').css('border-left', '0');
      $('footer').css('background-color', '#fff');
      $('article').css('box-shadow', 'none');
    }
  });
});
