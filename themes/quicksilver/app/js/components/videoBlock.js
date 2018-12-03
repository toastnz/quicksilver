/*------------------------------------------------------------------
Imports
------------------------------------------------------------------*/

import $      from 'jquery';
import tingle from 'tingle.js';

/*------------------------------------------------------------------
Variables
------------------------------------------------------------------*/

$body.on('click', '.js-video-modal', function (e) {
    e.preventDefault();
    let videoModal = new tingle.modal({
        cssClass: ['videoModal'],
        onClose() {
            modal.destroy();
        },
        onOpen() {
            $('.tingle-modal__close').html(`<div class="closeIcon"><svg xmlns="http://www.w3.org/2000/svg" width="86" height="85" viewBox="0 0 86 85" class="svg-close"><polygon fill="none" stroke="#704C99" stroke-width="3.78" points="840 88.29 824.516 73 799.999 97.207 775.484 73 760 88.29 784.515 112.499 760 136.708 775.484 152 799.999 127.789 824.516 152 840 136.708 815.483 112.499" transform="translate(-757 -70)"></polygon></svg></div>`);
            $('.modal').addClass('active');
        }
    });
    if ($(this).attr('data-video-source') === 'vimeo') {
        videoModal.setContent(`<div class="modal__close"><a href="#" class="modal__close__icon [ js-close-modal ]"><svg xmlns="http://www.w3.org/2000/svg" width="86" height="85" viewBox="0 0 86 85" class="svg-close"><polygon fill="none" stroke="#704C99" stroke-width="3.78" points="840 88.29 824.516 73 799.999 97.207 775.484 73 760 88.29 784.515 112.499 760 136.708 775.484 152 799.999 127.789 824.516 152 840 136.708 815.483 112.499" transform="translate(-757 -70)"></polygon></svg></a></div><div class="modal wysiwyg"><div class="embed-container"><iframe src="https://player.vimeo.com/video/${$(this).attr('data-video-id')}?title=0&byline=0&portrait=0&autoplay=1" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>`);
    } else {
        videoModal.setContent(`<div class="modal__close"><a href="#" class="modal__close__icon [ js-close-modal ]"><svg xmlns="http://www.w3.org/2000/svg" width="86" height="85" viewBox="0 0 86 85" class="svg-close"><polygon fill="none" stroke="#704C99" stroke-width="3.78" points="840 88.29 824.516 73 799.999 97.207 775.484 73 760 88.29 784.515 112.499 760 136.708 775.484 152 799.999 127.789 824.516 152 840 136.708 815.483 112.499" transform="translate(-757 -70)"></polygon></svg></a></div><div class="modal wysiwyg"><div class="embed-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/${$(this).attr('data-video-id')}?autoplay=1&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe></div></div>`);
    }
});

console.log('Hello World: Jquery ', $body);
