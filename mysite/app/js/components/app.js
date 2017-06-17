/* Imports ---------------------------------------------------------*/

import classie from 'classie';

/* Variables -------------------------------------------------------*/

let body = document.getElementsByTagName("body")[0];

//import './contactForm';
/*------------------------------------------------------------------
 Mobile Navigation
 ------------------------------------------------------------------*/

//$body.on('click', '.js-mobile-nav', (e) => {
//    e.preventDefault();
//    $body.toggleClass('off-canvas-visible')
//});
//
//$body.on('click', '.js-toggle-nav', (e) => {
//    e.preventDefault();
//    $(this).closest('.offCanvas__menu__item').toggleClass('open');
//});

//document.querySelector('.js-mobile-nav').onclick = () => {
//    classie.toggleClass(body, 'off-canvas-visible')
//};

document.querySelector('.js-mobile-nav').addEventListener('click', (e) => {
    e.preventDefault();
    classie.toggleClass(body, 'off-canvas-visible');
});

