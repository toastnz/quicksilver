const {tns} = require('tiny-slider/src/tiny-slider.module.js');
// https://github.com/ganlanyuan/tiny-slider

const elFromStr = require('../functions/elFromStr');

const sliderBreakpoints = (el = false) => {
	if (el) {
		const breakpoints = {init: 0,xxs: 480,xs: 540,sm: 640,md: 768,xmd: 968,lg: 1024,xl: 1280,xxl: 1440};
		const responsiveBreakpoints = {};
		let classBreakpoints = el.className.split(' ');
		let slidesToScroll;

		classBreakpoints.forEach(function (value) {
			if(value.indexOf(`-up-`) > -1){
				let breakpoint = value.split('-')[0];
				let slides = parseInt(value.split('-').pop().trim());
				responsiveBreakpoints[breakpoints[breakpoint]] = {
					items: slides,
				}
			}
		});

		return responsiveBreakpoints;
	}
}

const createButtons = (settings) => {
	if (settings.prevButton) {
		settings.prevButton = elFromStr(settings.prevButton).firstChild;
		settings.container.parentNode.insertBefore(settings.prevButton, settings.container);
	}

	if (settings.nextButton) {
		settings.nextButton = elFromStr(settings.nextButton).firstChild;
		settings.container.parentNode.insertBefore(settings.nextButton, settings.container);
	}

	return settings;
}

function Slider(el, options = {}) {
  	const defaults = {
		container: el,
		mouseDrag: true,
		touch: true,
		navPosition: 'bottom',
		prevButton:'<button class="slider-button slider-button--left"><svg width="40" height="13" viewBox="0 0 40 13" xmlns="http://www.w3.org/2000/svg"><path d="M3.386 5.547l3.97-3.876a.964.964 0 0 0 0-1.38L7.348.285a1 1 0 0 0-1.397 0L.29 5.81a.961.961 0 0 0 0 1.38l5.66 5.526a1 1 0 0 0 1.397 0l.008-.008a.964.964 0 0 0 0-1.38l-3.924-3.83h35.592a.976.976 0 0 0 0-1.951H3.386z" fill="#000" fill-rule="evenodd"/></svg></button>',
		nextButton:'<button class="slider-button slider-button--right"><svg width="40" height="13" viewBox="0 0 40 13" xmlns="http://www.w3.org/2000/svg"><path d="M36.614 5.547l-3.97-3.876a.964.964 0 0 1 0-1.38l.008-.007a1 1 0 0 1 1.397 0l5.66 5.526a.961.961 0 0 1 0 1.38l-5.66 5.526a1 1 0 0 1-1.397 0l-.008-.008a.964.964 0 0 1 0-1.38l3.924-3.83H.976a.976.976 0 0 1 0-1.951h35.638z" fill="#000" fill-rule="evenodd"/></svg></button>',
		responsive: sliderBreakpoints(el),
	};

	let settings = Object.assign(defaults, options);

	if (settings.prevButton || settings.nextButton) settings = createButtons(Object.assign(defaults, options));
	
	tns(settings);
}

module.exports = Slider;
