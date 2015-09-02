$.fn.grayscale = function() {
  this.addClass('grayscale');
};

$.fn.colorize = function() {
  this.removeClass('grayscale');
};

function setFirstSwitchStyle() {
  $('body').addClass('first-switch');
};

function removeFirstSwitchStyle() {
  $('body').removeClass('first-switch');
};

function setSecondSwitchStyle() {
  $('body').addClass('second-switch');
};

function removeSecondSwitchStyle() {
  $('body').removeClass('second-switch');
};

function showSecondSwitch() {
  $('.switch-container2').removeClass('hide');
  $('.switch-container2').addClass('inline-block');
};

function hideSecondSwitch() {
  $('.switch-container2').removeClass('inline-block');
  $('.switch-container2').addClass('hide');
};

function setThirdSwitchStyle() {
  $('body').addClass('third-switch');
};

function removeThirdSwitchStyle() {
  $('body').removeClass('third-switch');
};

function showThirdSwitch() {
  $('.switch-container3').removeClass('hide');
  $('.switch-container3').addClass('inline-block');
};

function hideThirdSwitch() {
  $('.switch-container3').removeClass('inline-block');
  $('.switch-container3').addClass('hide');
};

function init() {
  stickyTitles(jQuery(".fixed-header"));
  hideSecondSwitch();
  hideThirdSwitch();
};

$(function() {
  var toggleSwitch1 = $('#fancySwitch');
  var toggleSwitch2 = $('#fancySwitch2');
  var toggleSwitch3 = $('#fancySwitch3');
  init();

  toggleSwitch1.on('change', function(e) {
    if (toggleSwitch1[0].checked) { // IF CHECKED
      setFirstSwitchStyle();
      showSecondSwitch();
    } else { // IF UN-CHECKED
      if (toggleSwitch2[0].checked) toggleSwitch2.trigger('click');
      hideSecondSwitch();
      removeFirstSwitchStyle();
    }
    stickyTitles(jQuery(".fixed-header"));
  });

  toggleSwitch2.on('change', function(e) {
    if (toggleSwitch2[0].checked) { // IF CHECKED
      setSecondSwitchStyle();
      showThirdSwitch();
    } else {
      removeSecondSwitchStyle(); // IF UN-CHECKED
      hideThirdSwitch();
    }
    stickyTitles(jQuery(".fixed-header"));
  });

  toggleSwitch3.on('change', function(e) {
    if (toggleSwitch3[0].checked) { // IF CHECKED
      setThirdSwitchStyle();
    } else {
      removeThirdSwitchStyle(); // IF UN-CHECKED
    }
    stickyTitles(jQuery(".fixed-header"));
  });
});
