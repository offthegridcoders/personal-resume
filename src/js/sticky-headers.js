function stickyTitles(stickies) {

	var titles = {};

	titles.init = function() {

		stickies.each(function() {

			var thisSticky = $(this);
			 thisSticky.parent().height(thisSticky.outerHeight());

		   $.data(thisSticky[0], 'pos',    thisSticky.parent().offset().top);

		});

		$(window).off("scroll.stickies").on("scroll.stickies", function() {

			  titles.scroll();

		});
	}

	titles.scroll = function() {

		stickies.each(function(i){

			var thisSticky = $(this),
				nextSticky = stickies.eq(i+1),
				prevSticky = stickies.eq(i-1),
				pos = $.data(thisSticky[0], 'pos');

			if (pos <= $(window).scrollTop()) {

				  thisSticky.addClass("fixed");

				  if (nextSticky.length > 0 && thisSticky.offset().top >= $.data(nextSticky[0], 'pos') - thisSticky.outerHeight()) {

						thisSticky.addClass("absolute").css("top", $.data(nextSticky[0], 'pos') - thisSticky.outerHeight());

				  }

			} else {

				  thisSticky.removeClass("fixed");

				  if (prevSticky.length > 0 && $(window).scrollTop() <= $.data(thisSticky[0], 'pos')  - prevSticky.outerHeight()) {

						prevSticky.removeClass("absolute").removeAttr("style");

				  }
			}
		});
    }

	titles.init();
}
