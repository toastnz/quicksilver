class Gallery {
  constructor(el) {
    this.container = el;
    // this.items = Array.from(this.container.querySelectorAll('.js-gallery--item'));
    // this.template = this.createModal(this.items);

    this.init();
  }

  init() {
    // this.clickHandler();
    // this.container.insertAdjacentHTML('beforeend', this.template);
    // console.log(this.template);
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