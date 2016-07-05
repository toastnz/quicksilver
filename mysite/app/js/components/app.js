'use strict';
/*------------------------------------------------------------------
 Main Application Container
 ------------------------------------------------------------------*/

/* Requirements */
require('./contactForm');

const $ = require('jquery');
const _ = require('lodash');
const CSSJSON = require('CSSJSON');

function updateSytles() {
    var styles = {
        children: {}
    };

    function style(input, selector) {
        return {
            [selector]: {
                attributes: {
                    "font-size": $(`#${input}_font-size`).val() + "rem",
                    "font-weight": $(`#${input}_font-weight`).val(),
                    "font-style": $(`#${input}_font-style`).val(),
                    "text-align": $(`#${input}_text-align`).val(),
                    "line-height": $(`#${input}_line-height`).val(),
                    "letter-spacing": $(`#${input}_letter-spacing`).val() + 'px'
                }
            }
        }
    }

    $('.js-type-setting').each(function () {
        console.log(style($(this).attr('id'), $(this).attr('data-selector')));
        _.assign(styles.children, style($(this).attr('id'), $(this).attr('data-selector')));
    });

    var json = CSSJSON.toCSS(styles);
    $('#typeStyles').html(json);
    $(window).trigger('resize');
}

updateSytles();

$('#typeSettings input, #typeSettings select').on('change', function () {
    console.clear();
    updateSytles();
});

$('.js-collapsible').on('click', function () {
    $(this).toggleClass('expanded');
    $($(this).attr('data-colapsible-target')).toggleClass('expanded');
});


var p = document.getElementById('typeSettings');
var resizer = document.getElementById('resizer');

resizer.addEventListener('mousedown', initDrag, false);

var startX, startY, startWidth, startHeight;

function initDrag(e) {
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(p).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(p).height, 10);
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
}

function doDrag(e) {
    p.style.width = (startWidth + e.clientX - startX) + 'px';
    p.style.height = (startHeight + e.clientY - startY) + 'px';
}

function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
}



