const attach  = require('../functions/attach');
const offsetY = require('../functions/offsetY');

class Parallax {
  constructor(el, scale = 0.2) {
    this.container = el;
    this.children = this.container.querySelectorAll('[data-parallax-watch]');
    this.scale = scale;

    setTimeout(() => this.init(), 100);
  }

  updateCoordinates() {
    this.lastWindowHeight = window.innerHeight;
    this.offset = (offsetY(this.container));
    this.height = this.container.clientHeight;
  }

  inView() {
    return (window.scrollY + this.lastWindowHeight >= this.offset && window.scrollY <= this.offset + this.container.clientHeight);
  }

  yPercent() {
    return ((this.offset - window.scrollY) / this.lastWindowHeight * 100);
  }

  transform(child, percent = this.yPercent() - 33.333) {
    child.style.transform = `translateY(${percent * -this.scale}%)`;
  }

  parallax() {
    if (this.inView()) this.children.forEach((child) => this.transform(child));
  }

  init() {
    attach('resize', () => this.updateCoordinates(), 500);
    attach('scroll', () => this.parallax(), 50);

    this.children.forEach((child) => {
      child.style.transition = 'transform .2s ease';
      (this.inView()) ? this.transform(child) : this.transform(child, 66.666);
    });
  }
}

export default Parallax;

// ======================================================
// JavaScript Usage
// ======================================================

// import Parallax from './parallax';

// document.querySelectorAll('[data-parallax]').forEach((group) => new Parallax(group));

// ======================================================
// HTML Usage
// ======================================================

// <section data-parallax>
//   <div data-parallax-watch></div>
// </section>