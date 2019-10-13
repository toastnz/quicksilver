/*------------------------------------------------------------------
Stylesheets
------------------------------------------------------------------*/
import './../scss/style.scss';

/*------------------------------------------------------------------
Versioning & Debug Information
------------------------------------------------------------------*/ 
window.debug = window.location.host.includes('.test');

if (debug) console.log('%cQUICKSILVER 4', 'padding:5px 5px;font-size:50px;color:#fff;text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2);');

// ------------------------------------------------------------------
// User
// ------------------------------------------------------------------

const loadContent = require('./functions/loadContent');
const selectAll = require('./functions/selectAll');

import './components/accordions';
import Slider from'./components/sliders';

const sliderSettings = {
	'.js-slider--hero': {},
	'.js-slider--gallery': {},
}

const sliders = [];

Object.keys(sliderSettings).map((selector) => {
	selectAll(selector).forEach((el) => sliders.push(new Slider(el, sliders[selector])));
});

// console.log(sliders);

import Tabs from './components/tabs';
import Parallax from './components/parallax';
import Equalizer from './components/equalizer';
import VideoEmbed from './components/videoEmbed';
import Gallery from './components/gallery';

selectAll('.js-tabs').forEach((group) => new Tabs(group));
selectAll('.js-gallery').forEach((group) => new Gallery(group, sliders));
selectAll('[data-equalize]').forEach((group) => new Equalizer(group));
selectAll('[data-parallax]').forEach((group) => new Parallax(group));

selectAll('[data-video]').forEach((el) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		el.insertAdjacentHTML('beforeend', new VideoEmbed(el.dataset.video, { autoplay: 1 }).render());
	})
});

loadContent({
	url: '/contact-us',
	method: 'POST',
	success: (response) => {
		console.log(response);
	}
});