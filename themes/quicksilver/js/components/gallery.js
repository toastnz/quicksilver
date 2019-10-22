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

// import Gallery from './gallery';

// document.querySelectorAll('.js-gallery').forEach((group) => new Gallery(group));

// ======================================================
// HTML Usage
// ======================================================

// <section class="js-gallery">
//   <div class="js-gallery--thumbnail"></div>
//   <div class="js-gallery--modal">
//     <div class="js-slider--gallery"></div>
//   </div>
// </section>