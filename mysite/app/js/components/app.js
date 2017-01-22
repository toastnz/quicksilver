/* Imports ---------------------------------------------------------*/

import $ from 'jquery';

/* Variables -------------------------------------------------------*/

let $body = $('body');

/*------------------------------------------------------------------
 Mobile Navigation
 ------------------------------------------------------------------*/

$body.on('click', '.navburger', () => $body.toggleClass('mobile-nav'));


$body.on('click', '.off-canvas__menu__item span', function () {
    e.preventDefault();
    $(this).closest('li').toggleClass('active');
});

