// const toggleHeight = require('../functions/toggleHeight');

import toggleHeight from '../functions/toggleHeight';

class Tabs {
  constructor(el) {
    this.container = el;
    this.links = Array.from(this.container.querySelectorAll('.js-tabs--link'));
    this.items = Array.from(this.container.querySelectorAll('.js-tabs--item'));

    this.toggleHeight = new toggleHeight(this.container);

    setTimeout(() => this.init(), 100);
  }

  clickHandler() {
    this.links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        // If this is not the current tab, change the tab.
        if (!link.className.match(/\bjs-active\b/)) this.changeTab(this.links.indexOf(link));
      });
    });
  }

  changeTab(index) {
    this.links.forEach((link) => {
      // Toggle active state on tab link
      (link === this.links[index]) ? link.classList.add('js-active') : link.classList.remove('js-active');
    });

    this.items.forEach((item) => {
      // Toggle active state on tab item
      (item === this.items[index]) ? item.classList.add('js-active') : item.classList.remove('js-active');
    });

    this.toggleHeight.animate();
  }

  init() {
    this.clickHandler();
  }
}

export default Tabs;

// ======================================================
// JavaScript Usage
// ======================================================

// import Tabs from './tabs';

// document.querySelectorAll('.js-tabs').forEach((group) => new Tabs(group));

// ======================================================
// HTML Usage
// ======================================================

// <section class="js-tabs">
//   <a href="#" class="js-tabs--link"></a>
//   <div class="js-tabs--item"></div>
// </section>