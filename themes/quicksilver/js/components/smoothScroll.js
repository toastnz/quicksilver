const attach = require('../functions/attach');
const containsClass = require('../functions/containsClass');

class SmoothScroll {
	constructor(el) {
		this.view = el;
		this.content = this.view.querySelector('[data-smooth-scroll--content]');
		this.height = this.content.clientHeight;

		setTimeout(() => {
			attach('scroll', () => {
				this.scroll();
			}, 50);

			attach('resize', () => {
				this.update();
			}, 500);

			document.body.addEventListener('touchstart', () => {
				document.body.classList.add('touch');
			});
		}, 100);
	}

	scroll() {
		if (!containsClass(document.body, 'touch')) this.content.style.transform = `translateY(-${window.pageYOffset / this.height * 100}%)`;
	}

	update() {
		this.height = this.content.clientHeight;
		document.body.style.height = this.height + 'px';
	}
}

export default SmoothScroll;