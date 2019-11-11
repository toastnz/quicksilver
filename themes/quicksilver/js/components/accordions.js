/*------------------------------------------------------------------
Sticky header
------------------------------------------------------------------*/

import $ from 'jquery';

/*------------------------------------------------------------------
Variables
------------------------------------------------------------------*/

let $body = $('body');

$body.on('click', '.js-accordion-trigger', function (e) {
    e.preventDefault();
    let $accordion = $(this).closest('.js-accordion-item');

    if ($accordion.hasClass('active')) {
        $accordion.removeClass('active');
        $accordion.find('.js-accordion-target').slideUp();
    } else {
        $accordion.addClass('active');
        $accordion.find('.js-accordion-target').slideDown();
    }
});

