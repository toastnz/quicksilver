/* Third Party -----------------------------------------------------*/

import $ from 'jquery';
import tingle from 'tingle.js';

/*------------------------------------------------------------------
 Tingle Modal
 ------------------------------------------------------------------*/

$('.js-modal').on('click', function (e) {
    e.preventDefault();
    let modal = new tingle.modal({
        onClose() {
            modal.destroy();
        }
    });
    modal.setContent(`<div class="modal wysiwyg"><div class="modal__header"><h1>Modal Header</h1></div><div class="modal__content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="">Nam egestas</a>, diam sit amet faucibus dictum, turpis libero porttitor diam, id pellentesque orci<b>augue adipiscing risus</b>. Nulla id lacus eros. Nam porttitor semper enim, sit amet vestibulum arcu adipiscing sed. Proin dignissim, ligula id rhoncus fringilla, nunc lectus luctus magna, vitae cursus neque arcu id risus. Phasellus eu risus quis mauris consectetur luctus. Sed facilisis diam mauris, a vulputate ligula. Sed nec purus mauris. Nulla euismod massa ac nisl gravida dictum. Fusce leo turpis, accumsan non ultricies sed, consectetur id dui. Suspendisse porttitor odio in ipsum dignissim mollis.</p></div></div>`);
    modal.open();
});

/*------------------------------------------------------------------
 Youtube Modals
 ------------------------------------------------------------------*/

$('.js-youtube').on('click', function (e) {
    e.preventDefault();
    let modal = new tingle.modal({
        onClose() {
            modal.destroy();
        }
    });
    modal.setContent(`<div class="modal wysiwyg"><div class="embed-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/PXtOT-dzkYc?autoplay=1" frameborder="0" allowfullscreen></iframe></div></div>`);
    modal.open();
});

/*------------------------------------------------------------------
 Tingle Prompt
 ------------------------------------------------------------------*/

$('.js-confirm').on('click', function (e) {
    e.preventDefault();
    let modal = new tingle.modal({
        onClose() {
            modal.destroy();
        }
    });
    modal.addFooter();
    modal.setContent(`<div class="modal wysiwyg"><div class="modal__content"><h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6></div></div>`);
    modal.addFooterBtn('OKAY', 'button', () => {
        modal.close();
    });
    modal.open();
});
