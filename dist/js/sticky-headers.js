function stickyTitles(t){var o={};o.init=function(){t.each(function(){var t=$(this);t.parent().height(t.outerHeight()),$.data(t[0],"pos",t.parent().offset().top)}),$(window).off("scroll.stickies").on("scroll.stickies",function(){o.scroll()})},o.scroll=function(){t.each(function(o){var s=$(this),e=t.eq(o+1),i=t.eq(o-1),a=$.data(s[0],"pos");a<=$(window).scrollTop()?(s.addClass("fixed"),e.length>0&&s.offset().top>=$.data(e[0],"pos")-s.outerHeight()&&s.addClass("absolute").css("top",$.data(e[0],"pos")-s.outerHeight())):(s.removeClass("fixed"),i.length>0&&$(window).scrollTop()<=$.data(s[0],"pos")-i.outerHeight()&&i.removeClass("absolute").removeAttr("style"))})},o.init()}