function setBodyStyle(className) {
  $('body').addClass(className);
};

function removeBodyStyle(className) {
  $('body').removeClass(className);
};

function hideSwitch(togSwitch) {
  for (var i=0; i < togSwitch.length; i++) {
    $(togSwitch[i]).removeClass('inline-block');
    $(togSwitch[i]).addClass('hide');
  }
};

function showSwitch(togSwitch) {
  for (var i=0; i < togSwitch.length; i++) {
    $(togSwitch[i]).removeClass('hide');
    $(togSwitch[i]).addClass('inline-block');
  }
};

function init() {
  stickyTitles(jQuery(".fixed-header"));
  hideSwitch(['.sticky-switch2', '.sticky-switch3']);
  new WOW().init();
};

$(function() {
  var toggleSwitch1 = $('#fancySwitch');
  var toggleSwitch2 = $('#fancySwitch2');
  var toggleSwitch3 = $('#fancySwitch3');

  init();

  // TODO:
  // refactor these change functions and make animate speed a function:
  //   if already ad top of page, do 0sec, else do conditionally depending
  //   on how far away from top they are

  toggleSwitch1.on('change', function(e) {
    if (toggleSwitch1[0].checked) { // IF CHECKED
      $('html, body').animate({ scrollTop: 0 }, 'medium', function () {
        setBodyStyle('first-switch');
        showSwitch(['.sticky-switch2']);
        stickyTitles(jQuery(".fixed-header"));
      });
    } else { // IF UN-CHECKED
      if (toggleSwitch2[0].checked) toggleSwitch2.trigger('click');
      hideSwitch(['.sticky-switch2']);
      removeBodyStyle('first-switch');
      stickyTitles(jQuery(".fixed-header"));
    }
  });

  toggleSwitch2.on('change', function(e) {
    if (toggleSwitch2[0].checked) { // IF CHECKED
      $('html, body').animate({ scrollTop: 0 }, 'medium', function () {
        setBodyStyle('second-switch');
        showSwitch(['.sticky-switch3']);
        stickyTitles(jQuery(".fixed-header"));
      });
    } else {
      if (toggleSwitch3[0].checked) toggleSwitch3.trigger('click');
      removeBodyStyle('second-switch');
      hideSwitch(['.sticky-switch3']);
      stickyTitles(jQuery(".fixed-header"));
    }
  });

  toggleSwitch3.on('change', function(e) {
    if (toggleSwitch3[0].checked) { // IF CHECKED
      $('html, body').animate({ scrollTop: 0 }, 'medium', function () {
        setBodyStyle('third-switch');
        stickyTitles(jQuery(".fixed-header"));
      });
    } else {
      removeBodyStyle('third-switch');
      stickyTitles(jQuery(".fixed-header"));
    }
  });
});
