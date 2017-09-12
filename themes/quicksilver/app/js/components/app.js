/* Third Party -----------------------------------------------------*/

import $ from 'jquery';

/* Imports ---------------------------------------------------------*/

import './templates';

/* Variables -------------------------------------------------------*/

let $body = $('body');

/*------------------------------------------------------------------
 Mobile Navigation
 ------------------------------------------------------------------*/

$body.on('click', '.js-mobile-nav', function (e) {
    e.preventDefault();
    $body.toggleClass('off-canvas-visible');
});

$body.on('click', '.js-toggle-nav', function (e) {
    e.preventDefault();
    $(this).closest('.offCanvas__menu__item').toggleClass('open');
});

/*------------------------------------------------------------------
 Search Placeholder
 ------------------------------------------------------------------*/

$('#SearchForm_SearchForm_Search').attr('placeholder', $('#SearchForm_SearchForm_Search').val()).val('');