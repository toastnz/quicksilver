'use strict';

window.jQuery = window.$ = require('jquery');
// ======================================================
// Requirements
// ======================================================

const $            = require('jquery'),
      moment       = require('moment'),
      pikaday      = require('pikaday'),
      parsley      = require('parsleyjs'),
      _            = require('underscore'),
      alertify     = require('alertify.js'),
      fancybox     = require('fancybox')($),
      imagesLoaded = require('imagesloaded'),
      slick        = require('slick-carousel'),
      jQBridget    = require('jquery-bridget'),
      Masonry      = require('masonry-layout'),
      matchHeight  = require('jquery-match-height');


const snappy = require('../snappy/snappy');

//==================================================================
// Navburger
//==================================================================

$('.navburger').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('mobile-nav');
});

//==================================================================
// Form Validation
//==================================================================

const $contactForm = $('#ContactForm_ContactForm');

if ($contactForm.length > 0) {
    $contactForm.parsley({
        classHandler: (el)=> {
            return el.$element.closest('.input-wrap');
        }
    }).on('form:submit', () => {
        $contactForm.addClass('busy');
        $.ajax({
            url : $contactForm.attr('action'),
            data: $contactForm.serialize()
        }).done(()=> {
            alertify.success('Form sent succesfully');
            $contactForm[0].reset();
        }).fail(()=> {
            alertify.error('Form could not be sent');
        }).always(()=> {
        });
        return false;
    });
}

//==================================================================
// Lightbox
//==================================================================

let $close = $('.svg-close');
let $modal = $('.lightbox-overlay');
let $modalContent = $modal.find('.lightbox-overlay__content');


function closeModal() {
    $modal.removeClass('active');
}

function openModal() {
    $modal.addClass('active').css({'height': $(document).outerHeight() + 'px'});
    $modalContent.css({marginTop: $(document).scrollTop()});
}

$(document).mouseup(function (evt) {
    if (!$modalContent.is(evt.target) && $modalContent.has(evt.target).length === 0) {
        closeModal();
    }
});

$(document).keyup(function (e) {
    if (e.keyCode === 27) {
        closeModal();
    }
});

$close.on('click', function (e) {
    e.preventDefault();
    closeModal();
});