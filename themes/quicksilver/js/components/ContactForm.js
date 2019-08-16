/*------------------------------------------------------------------
Sticky header
------------------------------------------------------------------*/

import $ from 'jquery';
import wretch from 'wretch';
import parsley from 'parsleyjs';

/*------------------------------------------------------------------
Variables
------------------------------------------------------------------*/

let $form = $('#ContactForm_ContactForm');

$form
    .parsley({ classHandler(el) { return el.$element.closest('.field'); } })
    .on('form:submit', () => {

        wretch($form.attr('action'))
            .formUrl($form.serialize())
            .post()
            .json(json => console.log(json));

        return false;
    });


