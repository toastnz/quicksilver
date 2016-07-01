// 'use strict';
//
// window.jQuery = window.$ = require('jquery');
// // ======================================================
// // Requirements
// // ======================================================
//
// const $ = require('jquery'),
//     parsley = require('parsleyjs'),
//     _ = require('underscore'),
//     alertify = require('alertify.js'),
//     fancybox = require('fancybox')($),
//     // GM = require('google-maps'),
//     // imagesLoaded = require('imagesloaded'),
//     // selectOrDie = require('./selectordie'),
//     slick = require('slick-carousel'),
//     // jQBridget = require('jquery-bridget'),
//     // Masonry = require('masonry-layout'),
//     matchHeight = require('jquery-match-height');
//
// //==================================================================
// // Navburger
// //==================================================================
//
// $('.navburger').on('click', function (e) {
//     e.preventDefault();
//     $('body').toggleClass('mobile-nav');
// });
//
// //==================================================================
// // Form Validation
// //==================================================================
//
// const $contactForm = $('#ContactForm_ContactForm');
//
// if ($contactForm.length > 0) {
//     $contactForm.parsley({
//         classHandler: (el)=> {
//             return el.$element.closest('.input-wrap');
//         }
//     }).on('form:submit', () => {
//         $contactForm.addClass('busy');
//         $.ajax({
//             url: $contactForm.attr('action'),
//             data: $contactForm.serialize()
//         }).done(function (response) {
//             let data = JSON.parse(response);
//             alertify.alert(data.message);
//             $contactForm[0].reset();
//         }).fail(function (response) {
//             let data = JSON.parse(response);
//             alertify.alert(data.message);
//         });
//         return false;
//     });
// }
//
// //==================================================================
// // Lightbox
// //==================================================================
//
// let $close = $('.js-close-modal');
// let $modal = $('.lightbox-overlay');
// let $modalContent = $modal.find('.lightbox-overlay__content');
//
// function closeModal() {
//     $modal.removeClass('active');
// }
//
// function openModal() {
//     $modal.addClass('active').css({'height': $(document).outerHeight() + 'px'});
//     $modalContent.css({marginTop: $(document).scrollTop()});
// }
//
// $(document).mouseup(function (evt) {
//     if (!$modalContent.is(evt.target) && $modalContent.has(evt.target).length === 0) {
//         closeModal();
//     }
// });
//
// $(document).keyup(function (e) {
//     if (e.keyCode === 27) {
//         closeModal();
//     }
// });
//
// $close.on('click', function (e) {
//     e.preventDefault();
//     closeModal();
// });
