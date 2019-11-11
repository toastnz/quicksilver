import toggleHeight from '../functions/toggleHeight';

const lastInRow = require('../functions/lastInRow');
const containsClass = require('../functions/containsClass');

class Accordion {
	constructor(el) {
		this.container = el;
		this.triggers = Array.from(this.container.querySelectorAll('.js-accordion--trigger'));

		this.triggers.forEach((trigger) => {
			let target = trigger.parentElement.querySelector('.js-accordion--target');
			let targetControl = new toggleHeight(target);
			targetControl.animate(0);

			trigger.addEventListener('click', (e) => {
				e.preventDefault();
				if (containsClass(trigger, 'js-active')) {
					trigger.classList.remove('js-active');
					targetControl.animate(0);
				}else {
					trigger.classList.add('js-active');
					targetControl.animate();
				}
			});
		})
	}
}

export default Accordion;

// function accordionAction($trigger, $target) {
// 	var $group = $trigger.parents('.js-accordion');
// 	var $allTriggers = $group.find('.js-accordion--trigger');
// 	var $allTargets = $group.find('.js-accordion--target');


// 	if ($trigger.hasClass('js-active')) {
// 		$allTriggers.removeClass('js-active');
// 		$allTargets.slideUp();
// 		$trigger.removeClass('js-active');
// 		$target.slideUp();
// 	} else {
// 		$allTriggers.removeClass('js-active');
// 		$allTargets.slideUp();
// 		// $('.js-active').removeClass('js-active');
// 		$trigger.addClass('js-active');
// 		$target.slideDown();
// 	}
// }

// $('.js-accordion').each(function () {
// 	var $accordion = $(this);
// 	var $trigger = $accordion.find('.js-accordion--trigger');

// 	if ($accordion.hasClass('js-active')) {
// 		$target.css({ 'display': 'block' });
// 	}

// 	$trigger.each(function () {
// 		var $this = $(this);
// 		var $target = $this.siblings('.js-accordion--target');
// 		var canClick = 1;

// 		$this.on('click', function (e) {
// 			e.preventDefault();
// 			if (canClick) {
// 				canClick = 0;
// 				accordionAction($this, $target);
// 				setTimeout(function () {
// 					canClick = 1;
// 				}, 400);
// 			}
// 		});
// 	})
// });

// // ==================================================================
// // Accordion Grid

// $('.js-accordion-grid').each(function(){
// 	var $grid = $(this);

// 	function closeContent($blur){
// 		$grid.find('.js-accordion-grid--content').slideUp(function(){
// 			if ($blur) {$blur.blur()}
// 			$grid.find('.js-active').removeClass('js-active');
// 			$(this).remove();
// 		});
// 	}

// 	$('body').on('click', '.js-accordion-grid--item', function(e){
// 		e.preventDefault();

// 		$grid.css({
// 			height: 'auto'
// 		});

// 		var $this = $(this);
// 		var target = lastInRow(this);
// 		var $target = $(target);
// 		var ajaxURL = $this.attr('href');

// 		if (!$this.hasClass('js-active')) {
// 			var $template;

// 			$.ajax({
// 			  	dataType: "html",
// 			  	url: ajaxURL,
// 			  	success: function(response){
// 			  		var $template = $(response);
					
// 					$grid.find('.js-active').removeClass('js-active');
// 					$this.addClass('js-active');

// 					$grid.find('.js-accordion-grid--content').slideUp(function(){
// 						$(this).remove();
// 					});

// 					$target.after($template);

// 					$grid.find('.js-accordion-grid--content').slideDown();
// 			  	}
// 			});

// 		} else {
// 			closeContent($this);
// 		}
// 	});

// 	$('body').on('click', '.js-accordion-grid-close', function(){
// 		closeContent();
// 	});

// 	$(window).on('resize', function(){
// 		closeContent();
// 	})
// });