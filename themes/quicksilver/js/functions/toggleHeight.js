const attach = require('./attach');

class toggleHeight {
  constructor(el, duration = 300) {
    this.el = el;
    this.duration = duration;
    this.currentHeight = this.el.clientHeight;
    this.reinit = null;

    // Initialise
    this.el.style.msTransition = `height ${this.duration}ms ease-out`;
    this.el.style.webkitTransition = `height ${this.duration}ms ease-out`;
    this.el.style.MozTransition = `height ${this.duration}ms ease-out`;
    this.el.style.OTransition = `height ${this.duration}ms ease-out`;
    this.el.style.transform = `height ${this.duration}ms ease-out`;
    this.el.style.overflow = 'hidden';

    this.update();

    attach('resize', () => {
      if (this.el.style.height !== 'auto') this.el.style.height = 'auto';
      
      clearTimeout(this.reinit);

      this.reinit = setTimeout(() => {
        this.el.style.height = this.el.clientHeight + 'px';
      }, 500);
    }, 250);
  }

  update() {
    this.currentHeight = this.el.clientHeight;
  }

  animate(to = 'auto') {
    this.update();

    if (to === 'auto') {
      this.el.style.height = 'auto';
      this.newHeight = this.el.clientHeight;
      this.el.style.height = this.currentHeight + 'px';

      setTimeout(() => {
        this.el.style.height = this.newHeight + 'px';
      }, 50);
    } else {
      this.el.style.height = to + 'px';
    }
  }
}

export default toggleHeight;