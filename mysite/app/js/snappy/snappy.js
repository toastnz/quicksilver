/**
 * NPM Requirements
 */
const $ = require('jquery');
const dragula = require('dragula');
const _ = require('underscore');
const alertify = require('alertify.js');
/**
 * Local Requirements
 */
import logging from './logging';
import * as sidebar from './sidebar';
import * as module from './modules';
import * as wysiwyg from './wysiwyg';

const $modules = $('#modules');
const $snappyContent = $('#snappyContent');


dragula([$modules[0], $snappyContent[0]], {
    copy   : function (el, target) {
        return (el.className.indexOf('sidebarModule') > 1) ? true : false;
    },
    accepts: function (el, target) {
        return target === $snappyContent[0];
    },
    moves  : function (el, container, handle) {
        return handle.className === 'js-drag';
    }
}).on('drop', function (el, target) {
    if (target === $snappyContent[0]) {
        log('drop() => Dragula item has been dropped');
        let $clonedItem = $snappyContent.find('.sidebarModule');
        let type = $(el).attr('data-module-type');
        if (type !== undefined) {
            $(module.create(type)).insertAfter($clonedItem);
            $clonedItem.remove();
        }
        module.updateOrder();
    }
});

sidebar.open();

$snappyContent.on('click', '.js-edit-html', function () {
   let html = `<pre contenteditable="true">${$(this).closest('.contentModule').html()}</pre>`;
});

$snappyContent.append($(module.create('video')));
$snappyContent.append($(module.create('text')));
$snappyContent.append($(module.create('blockquote')));
$snappyContent.append($(module.create('text')));
$snappyContent.append($(module.create('divider')));
$snappyContent.append($(module.create('text')));