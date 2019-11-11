const attach = require('../functions/attach');

class Breakpoint {
  constructor(el) {
    this.container = el;
    this.children = this.container.querySelectorAll('[data-breakpoint-watch]');
    this.breakpoint = 0;

    setTimeout(() => this.init(), 100);
  }

  toggleClass() {
  	(window.innerWidth >= this.breakpoint) ? this.container.classList.remove('js-breakpoint') : this.container.classList.add('js-breakpoint');
  }

  init() {
    // Create the breakpoint
    this.children.forEach((child) => this.breakpoint += child.clientWidth);

    // Init functions
    attach('resize', () => this.toggleClass(), 500);
  }
}

export default Breakpoint;

// ======================================================
// JavaScript Usage
// ======================================================

// import Breakpoint from './breakpoints';

// document.querySelectorAll('[data-breakpoint]').forEach((group) => new Breakpoint(group));

// ======================================================
// HTML Usage
// ======================================================

// <section data-breakpoint>
//   <div data-breakpoint-watch></div>
//   <div data-breakpoint-watch></div>
// </section>