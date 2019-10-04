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

import './components/accordions';

const Slider = require('./components/sliders');

const sliders = {
	'.js-slider--hero': {},
}

Object.keys(sliders).map((selector) => {
	document.querySelectorAll(selector).forEach((el) => Slider(el, sliders[selector]));
});

import Tabs from './components/tabs';
import Parallax from './components/parallax';
import Equalizer from './components/equalizer';
import VideoEmbed from './components/videoEmbed';
import Gallery from './components/gallery';

document.querySelectorAll('.js-tabs').forEach((group) => new Tabs(group));
document.querySelectorAll('.js-gallery').forEach((group) => new Gallery(group));
document.querySelectorAll('[data-equalize]').forEach((group) => new Equalizer(group));
document.querySelectorAll('[data-parallax]').forEach((group) => new Parallax(group));

document.querySelectorAll('[data-video]').forEach((el) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		el.insertAdjacentHTML('beforeend', new VideoEmbed(el.dataset.video, { autoplay: 1 }).render());
	})
});

