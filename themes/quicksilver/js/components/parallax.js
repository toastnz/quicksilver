const attach  = require('../functions/attach');
const offsetY = require('../functions/offsetY');

class Parallax {
  constructor(el, scale = 20) {
    this.container = el;
    this.children = Array.from(this.container.querySelectorAll('[data-parallax-watch]'));
    this.scale = scale / 100;

    setTimeout(() => this.init(), 100);
  }

  updateCoordinates() {
    this.lastWindowHeight = window.innerHeight;
    this.offset = (offsetY(this.container));
    this.height = this.container.clientHeight;
  }

  inView() {
    return (window.pageYOffset + this.lastWindowHeight >= this.offset && window.pageYOffset <= this.offset + this.height);
  }

  yPercent() {
    return ((this.offset - window.pageYOffset) / this.lastWindowHeight * 100);
  }

  transform(child, percent = this.yPercent() - 33.333) {
    child.style.msTransform = `translateY(${percent * -this.scale}%)`;
    child.style.webkitTransform = `translateY(${percent * -this.scale}%)`;
    child.style.MozTransform = `translateY(${percent * -this.scale}%)`;
    child.style.OTransform = `translateY(${percent * -this.scale}%)`;
    child.style.msTransform = `translateY(${percent * -this.scale}%)`;
  }

  parallax() {
    if (this.inView()) this.children.forEach((child) => this.transform(child));
  }

  init() {
    attach('resize', () => this.updateCoordinates(), 500);
    attach('scroll', () => this.parallax(), 50);

    setTimeout(() => {
      this.children.forEach((child) => {
        child.style.msTransition = '-ms-transform .25s ease-out';       //IE
        child.style.webkitTransition = '-webkit-transform .25s ease-out';   //Chrome and Safari
        child.style.MozTransition = '-moz-transform .25s ease-out';      //Firefox
        child.style.OTransition = '-o-transform .25s ease-out';        //Opera
        child.style.transform = 'transform .25s ease-out';         //Someday this may get adopted and become a standard, so I put it in here.
        (this.inView()) ? this.transform(child) : this.transform(child, 66.666);
      });
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