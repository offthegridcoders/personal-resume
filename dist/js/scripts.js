function setBodyStyle(e){$("body").addClass(e)}function removeBodyStyle(e){$("body").removeClass(e)}function hideSwitch(e){for(var i=0;i<e.length;i++)$(e[i]).removeClass("inline-block"),$(e[i]).addClass("hide")}function showSwitch(e){for(var i=0;i<e.length;i++)$(e[i]).removeClass("hide"),$(e[i]).addClass("inline-block")}function init(){stickyTitles(jQuery(".fixed-header")),hideSwitch([".sticky-switch2",".sticky-switch3"]),(new WOW).init()}$(function(){var e=$("#fancySwitch"),i=$("#fancySwitch2"),t=$("#fancySwitch3");init(),e.on("change",function(t){e[0].checked?$("html, body").animate({scrollTop:0},"medium",function(){setBodyStyle("first-switch"),showSwitch([".sticky-switch2"]),stickyTitles(jQuery(".fixed-header"))}):(i[0].checked&&i.trigger("click"),hideSwitch([".sticky-switch2"]),removeBodyStyle("first-switch"),stickyTitles(jQuery(".fixed-header")))}),i.on("change",function(e){i[0].checked?$("html, body").animate({scrollTop:0},"medium",function(){setBodyStyle("second-switch"),showSwitch([".sticky-switch3"]),stickyTitles(jQuery(".fixed-header"))}):(t[0].checked&&t.trigger("click"),removeBodyStyle("second-switch"),hideSwitch([".sticky-switch3"]),stickyTitles(jQuery(".fixed-header")))}),t.on("change",function(e){t[0].checked?$("html, body").animate({scrollTop:0},"medium",function(){setBodyStyle("third-switch"),stickyTitles(jQuery(".fixed-header"))}):(removeBodyStyle("third-switch"),stickyTitles(jQuery(".fixed-header")))})});