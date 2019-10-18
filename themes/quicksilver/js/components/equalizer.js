const attach = require('../functions/attach');

class Equalizer {
  constructor(el) {
    this.container = el;
    this.children = this.getChildren();

    setTimeout(() => this.init(), 100);
  }

  getChildren() {
    let childArray = [];
    
    try {
      let targetArray = this.container.dataset.equalize.split(',');
      targetArray.forEach((id) => childArray.push(this.container.querySelectorAll(`[data-equalize-watch="${id}"]`)));
    } catch {
      childArray.push(this.container.querySelectorAll(`[data-equalize-watch]`));
    }


    return childArray;
  }

  matchHeight() {
    // set height to auto so it can be adjusted
    this.children.forEach((group) => {
      Array.from(group).forEach((child) => {
        child.style.height = 'auto';
      });
    });

    // now match all their heights
    this.children.forEach((group) => {
      this.height = 0;
      Array.from(group).forEach((child) => {
        if (child.clientHeight > this.height) this.height = child.clientHeight;
      });

      Array.from(group).forEach((child) => child.style.height = this.height + 'px');
    });
  }

  init() {
    attach('resize', () => this.matchHeight(), 500);
  }
}

export default Equalizer;

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