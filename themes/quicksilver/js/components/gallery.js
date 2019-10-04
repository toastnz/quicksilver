import $ from 'jquery';

class Gallery {
  constructor(el) {
    this.container = el;

    // If there is a modal in the template, trigger the click handler!
    if (this.findModal()) {
      this.clickHandler();
    }
  }

  clickHandler() {
    this.thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener('click', () => {
        // Add events to be fired on click of a thumbnail
        this.selectSlide(this.thumbnails.indexOf(thumbnail));
      })
    })
  }

  // This function selects the appropriate slide within the modal.
  selectSlide(index) {
    this.$slider.slick('slickGoTo', index);
  }

  toggleModal() {
    console.log(index);
  }

  findModal() {
    let nextSibling = this.container.nextElementSibling;

    // If a modal is found initialise the variables
    if (nextSibling.matches('.js-gallery--modal')) {
      this.modal = nextSibling;
      this.thumbnails = Array.from(this.container.querySelectorAll('.js-gallery--thumbnail'));
      this.media = Array.from(this.modal.querySelectorAll('.js-gallery--media'));
      this.$slider = $(this.modal).find('.js-slider--gallery');
      return true;
    }
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