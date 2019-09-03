/*------------------------------------------------------------------
Sticky header
------------------------------------------------------------------*/

import $ from 'jquery';
import wretch from 'wretch';
import parsley from 'parsleyjs';

/*------------------------------------------------------------------
Variables
------------------------------------------------------------------*/


class Form {
    constructor(form) {
        this.isValid = false;
        this.scrollToInvalidField = true;
        this.fields = [];
        this.init();
    }

    init() {

    }

    supported() {
        let input = document.createElement('input');
        return ('validity' in input);
    }

    attachEventHandlers() {

    }

    checkValidity() {

    }

    isValid(field) {

    }




}

/**
 * Form confirmation
 * @param {json} response
*/
const confirmation = (response) => {
    console.log(reponse);
};


let $form = $('#ContactForm_ContactForm');
let url = $form.attr('action');
$form
    .parsley({ classHandler(el) { return el.$element.closest('.field'); } })
    .on('form:submit', () => {

        wretch(url)
            .formUrl($form.serialize())
            .post()
            .json(json => confirmation(json));

        return false;
    });


