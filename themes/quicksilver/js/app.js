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
import './components/forms';
import Slider from'./components/sliders';

const sliders = [];
const sliderSettings = {
	'.js-slider--hero': {},
	'.js-slider--gallery': {},
	'.js-slider--testimonials': {},
}

Object.keys(sliderSettings).map((selector) => {
	selectAll(selector).forEach((el) => sliders.push(new Slider(el, sliderSettings[selector])));
});

import Tabs from './components/tabs';
import Parallax from './components/parallax';
import Equalizer from './components/equalizer';
import VideoEmbed from './components/videoEmbed';
import SmoothScroll from './components/smoothScroll';
// import Gallery from './components/gallery';

selectAll('.js-tabs').forEach((group) => new Tabs(group));
// selectAll('.js-gallery').forEach((group) => new Gallery(group, sliders));
selectAll('[data-equalize]').forEach((group) => new Equalizer(group));
selectAll('[data-parallax]').forEach((group) => new Parallax(group));

selectAll('[data-video]').forEach((el) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		el.insertAdjacentHTML('beforeend', new VideoEmbed(el.dataset.video, { autoplay: 1 }).render());
	})
});

new SmoothScroll(document.querySelector('[data-smooth-scroll]'));

selectAll('.js-sliderGallery').forEach((group) => {
	const gallery = {};
	const sliderMain = group.querySelector('.js-sliderGallery--main');
	const sliderNav = group.querySelector('.js-sliderGallery--nav');

	gallery.main = new Slider(sliderMain, {
		loop: false,
		nav: false,
		mode: "gallery",
	}).tns;

	if (sliderNav !== null) {
		const navItems = Array.from(sliderNav.querySelectorAll('.js-sliderGallery--nav-item'));

		navItems[0].classList.add('tns-slide-current');

		gallery.nav = new Slider(sliderNav, {
			loop: false,
			nav: false,
			controls: false,
		}).tns;

		let changing = null;
		let hasChanged = 0;

		const changeSlides = (sliderToChange, index) => {
			clearTimeout(changing);
			hasChanged = 1;
			navItems.forEach((item) => item.classList.remove('tns-slide-current'));
			navItems[index].classList.add('tns-slide-current');
			changing = setTimeout(() => {
				hasChanged = 0;
				sliderToChange.goTo(index);
			}, 200);
		}

		navItems.forEach((item) => {
			item.addEventListener('click', () => {
				let index = navItems.indexOf(item);
				gallery.nav.goTo(index);
				changeSlides(gallery.main, index);
			});
		});

		gallery.main.events.on('indexChanged', (e) => {
			changeSlides(gallery.nav, e.index);
		});

		gallery.nav.events.on('indexChanged', (e) => {
			changeSlides(gallery.main, e.index);
		});
	}
});

// loadContent({
// 	url: '/contact-us',
// 	method: 'POST',
// 	success: (response) => {
// 		console.log(response);
// 	}
// });