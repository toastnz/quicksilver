/* Imports ---------------------------------------------------------*/

import $ from 'jquery';
import parsley from 'parsleyjs';
const alertify = require('alertify.js');

/* Variables -------------------------------------------------------*/

const $contactForm = $('#ContactForm_ContactForm');

/*------------------------------------------------------------------
 Contact Form Event Handler
 ------------------------------------------------------------------*/

if ($contactForm.length) {
    $contactForm.parsley().on('form:submit', () => {
        $.ajax({
            url : $contactForm.attr('action'),
            data: $contactForm.serialize()
        }).done(function (response) {
            let data = JSON.parse(response);
            alertify.alert(data.message);
            $contactForm[0].reset();
        }).fail(function (response) {
                let data = JSON.parse(response);
                alertify.alert(data.message);
            }
        );
        return false;
    });
}

