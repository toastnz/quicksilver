import $ from 'jquery';
const slick = require('slick-carousel');

const createBreakpoints = function($sliderElement, inheritSlidesToScroll = true) {
	// Apply breakpoint classes to .js-slider
	// Works using class names `bp-up-i` so `sm-up-4` outputs 4 slides to be shown on small screens upwards
	let breakpoints = {init: 0,xxs: 480,xs: 540,sm: 640,md: 768,xmd: 968,lg: 1024,xl: 1280,xxl: 1440};
	let responsiveBreakpoints = [];
	let classBreakpoints = $sliderElement[0].className.split(' ');
	let slidesToScroll;

	classBreakpoints.forEach(function (value) {
		if(value.indexOf(`-up-`) > -1){
			let breakpoint = value.split('-')[0];
			let slides = parseInt(value.split('-').pop().trim());
			if (inheritSlidesToScroll) {
				slidesToScroll = slides;
			}else {
				slidesToScroll = 1;
			}
			responsiveBreakpoints.push({breakpoint: breakpoints[breakpoint],settings: {slidesToShow: slides,slidesToScroll: slidesToScroll}});
		}
	});

	return responsiveBreakpoints;
}

const makeSlider = function(selector, options, inheritSlidesToScroll = true) {
	let $el = $(selector);

	$el.each(function(){
		let $this = $(this);
		options.responsive = createBreakpoints($this, inheritSlidesToScroll);
		options.mobileFirst = true;
		$this.slick(options);
	});
}

makeSlider('.js-slider--hero', {
	// Options
	infinite: false,
	dots: true,
	fade: true, 
	cssEase: 'linear',
	speed: 500,
	arrows: false,
	// prevArrow:`<button class="slick-left"><svg width="40" height="13" viewBox="0 0 40 13" xmlns="http://www.w3.org/2000/svg"><path d="M3.386 5.547l3.97-3.876a.964.964 0 0 0 0-1.38L7.348.285a1 1 0 0 0-1.397 0L.29 5.81a.961.961 0 0 0 0 1.38l5.66 5.526a1 1 0 0 0 1.397 0l.008-.008a.964.964 0 0 0 0-1.38l-3.924-3.83h35.592a.976.976 0 0 0 0-1.951H3.386z" fill="#000" fill-rule="evenodd"/></svg></button>`,
	// nextArrow:`<button class="slick-right pull-right"><svg width="40" height="13" viewBox="0 0 40 13" xmlns="http://www.w3.org/2000/svg"><path d="M36.614 5.547l-3.97-3.876a.964.964 0 0 1 0-1.38l.008-.007a1 1 0 0 1 1.397 0l5.66 5.526a.961.961 0 0 1 0 1.38l-5.66 5.526a1 1 0 0 1-1.397 0l-.008-.008a.964.964 0 0 1 0-1.38l3.924-3.83H.976a.976.976 0 0 1 0-1.951h35.638z" fill="#000" fill-rule="evenodd"/></svg></button>`,
}, false);