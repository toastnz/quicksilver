/* Imports ---------------------------------------------------------*/

import $ from 'jquery';

/* Variables -------------------------------------------------------*/

let $body = $('body');

/*------------------------------------------------------------------
 Mobile Navigation
 ------------------------------------------------------------------*/

$body.on('click', '.js-mobile-nav', (e) => {
    e.preventDefault();
    $body.toggleClass('off-canvas-visible')
});

$body.on('click', '.off-canvas__menu__item span', function () {
    e.preventDefault();
    $(this).closest('li').toggleClass('active');
});

