class Gallery {
	constructor(el, sliders = false) {
		this.container = el;
		this.sliders = sliders;

	    if (this.findModal() && this.sliders) this.init();
	}

	clickHandlers() {
		this.thumbnails.forEach((thumbnail) => {
			thumbnail.addEventListener('click', () => {
				this.tns.goTo(this.thumbnails.indexOf(thumbnail))
				this.showModal();
			});
		});

		this.close.addEventListener('click', () => {
			this.showModal(false);
		});
	}

	showModal(toggle = true) {
		if (toggle) {
			this.modal.style.display = 'block';
			setTimeout(() => this.modal.style.opacity = 1, 50);
		}else {
			this.modal.style.opacity = 0;
			setTimeout(() => this.modal.style.display = 'none', 300);
		}
	}

	findModal() {
		let nextSibling = this.container.nextElementSibling;

	    if (nextSibling.matches('.js-gallery--modal')) {
	    	this.modal = nextSibling;
	    	this.modal.style.opacity = 0;
			this.modal.style.transition = 'opacity .2s ease';
	    	return true;
	    }
	}

	init() {
    	this.slider = this.modal.querySelector('.js-slider--gallery');
		this.thumbnails = Array.from(this.container.querySelectorAll('.js-gallery--thumbnail'));
		this.close = this.modal.querySelector('.js-close');

    	this.sliders.forEach((slider, i) => {
			if (this.slider === slider.settings.container) this.tns = slider.tns;
		});

		this.clickHandlers();
	}
}

export default Gallery;

// ======================================================
// JavaScript Usage
// ======================================================

// import Equalizer from './equalizer';

// document.querySelectorAll('[data-equalize]').forEach((group) => new Equalizer(group));

// ======================================================
// HTML Usage
// ======================================================

// <section data-equalize>
//   <div data-equalize-watch></div>
//   <div data-equalize-watch></div>
// </section>

// OR ===================================================

// <section data-equalize="selector">
//   <div data-equalize-watch="selector"></div>
//   <div data-equalize-watch="selector"></div>
// </section>

// OR ===================================================

// <section data-equalize="selector1, selector2">
//   <div data-equalize-watch="selector1">
//      <div data-equalize-watch="selector2"></div>
//   </div>
//   <div data-equalize-watch="selector1">
//      <div data-equalize-watch="selector2"></div>
//   </div>
// </section>