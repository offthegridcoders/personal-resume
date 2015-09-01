$.fn.grayscale = function() {
  this.addClass('grayscale');
};

$.fn.colorize = function() {
  this.removeClass('grayscale');
};

$(function() {
  $('.logo').addClass('logo-display-none');
  $('.logo-container').hide();
  $('.switch-container2').addClass('hide');
  $('header').addClass('hide');

  $('#fancySwitch').on('change', function(e) {
    if ($(e.target)[0].checked) {
      $('.logo').removeClass('logo-display-none');
      $('.logo').addClass('logo-display');
      $('.logo-container').show();
      $('.main-nav').css('box-shadow', '0px 0px 5px #747474');
      $('.main-nav').css('border-bottom', '0');
      $('a').css('color', '#43a0fa');
      $('.standard-section').addClass('border-left');
      $('.standard-section').css('background-color', 'rgba(97, 139, 102, 0.09)');
      $('footer').addClass('border-left');
      $('footer').css('background-color', 'rgba(97, 139, 102, 0.09)');
      $('article').css('box-shadow', '2px 2px 5px rgba(0, 0, 0, 0.14)');
      $('.switch-container2').removeClass('hide');
      $('.switch-container2').addClass('inline-block');
    } else {
      if ($('#fancySwitch2')[0].checked) {
        $('#fancySwitch2').trigger('click');
      }
      $('.logo').removeClass('logo-display');
      $('.logo').addClass('logo-display-none');
      $('.logo-container').hide();
      $('a').css('color', '#000');
      $('.standard-section').removeClass('border-left');
      $('.standard-section').css('background-color', '#fff');
      $('footer').removeClass('border-left');
      $('footer').css('background-color', '#fff');
      $('article').css('box-shadow', 'none');
      $('.main-nav').css('box-shadow', 'none');
      $('.main-nav').css('border-bottom', '1px solid #BEB5B5');
      $('.switch-container2').removeClass('inline-block');
      $('.switch-container2').addClass('hide');
    }
  });

  $('#fancySwitch2').on('change', function(e) {
    if ($(e.target)[0].checked) {
      $('header').removeClass('hide');
      $('header').addClass('block');
    } else {
      $('header').removeClass('block');
      $('header').addClass('hide');
    }
  });
});
