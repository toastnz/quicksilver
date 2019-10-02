import $ from 'jquery';

const lastInRow = require('../functions/lastInRow');

// function lastInRow($element) {
// 	var $siblings = $element.parent().find('>*');
// 	let offsetTop = $element.offset().top;
// 	var $item = $element;

// 	$siblings.slice($item.index()).each(function () {
//         if ($(this).offset().top > offsetTop) {
//             return false;
//         } else {
//             $item = $(this);
//         }
//     });

//     return $item;
// }

function accordionAction($trigger, $target) {
	var $group = $trigger.parents('.js-accordion');
	var $allTriggers = $group.find('.js-accordion--trigger');
	var $allTargets = $group.find('.js-accordion--target');


	if ($trigger.hasClass('js-active')) {
		$allTriggers.removeClass('js-active');
		$allTargets.slideUp();
		$trigger.removeClass('js-active');
		$target.slideUp();
	} else {
		$allTriggers.removeClass('js-active');
		$allTargets.slideUp();
		// $('.js-active').removeClass('js-active');
		$trigger.addClass('js-active');
		$target.slideDown();
	}
}

$('.js-accordion').each(function () {
	var $accordion = $(this);
	var $trigger = $accordion.find('.js-accordion--trigger');

	if ($accordion.hasClass('js-active')) {
		$target.css({ 'display': 'block' });
	}

	$trigger.each(function () {
		var $this = $(this);
		var $target = $this.siblings('.js-accordion--target');
		var canClick = 1;

		$this.on('click', function (e) {
			e.preventDefault();
			if (canClick) {
				canClick = 0;
				accordionAction($this, $target);
				setTimeout(function () {
					canClick = 1;
				}, 400);
			}
		});
	})
});

// ==================================================================
// Accordion Grid

$('.js-accordion-grid').each(function(){
	var $grid = $(this);

	function closeContent($blur){
		$grid.find('.js-accordion-grid--content').slideUp(function(){
			if ($blur) {$blur.blur()}
			$grid.find('.js-active').removeClass('js-active');
			$(this).remove();
		});
	}

	$('body').on('click', '.js-accordion-grid--item', function(e){
		e.preventDefault();

		$grid.css({
			height: 'auto'
		});

		var $this = $(this);
		var target = lastInRow(this);
		var $target = $(target);
		var ajaxURL = $this.attr('href');

		if (!$this.hasClass('js-active')) {
			var $template;

			$.ajax({
			  	dataType: "html",
			  	url: ajaxURL,
			  	success: function(response){
			  		var $template = $(response);
					
					$grid.find('.js-active').removeClass('js-active');
					$this.addClass('js-active');

					$grid.find('.js-accordion-grid--content').slideUp(function(){
						$(this).remove();
					});

					$target.after($template);

					$grid.find('.js-accordion-grid--content').slideDown();
			  	}
			});

		} else {
			closeContent($this);
		}
	});

	$('body').on('click', '.js-accordion-grid-close', function(){
		closeContent();
	});

	$(window).on('resize', function(){
		closeContent();
	})
});