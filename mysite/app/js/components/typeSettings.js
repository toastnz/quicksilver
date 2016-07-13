"use strict";

/*------------------------------------------------------------------
 Type settings
 ------------------------------------------------------------------*/


// Requirements
const $         = require('jquery');
const _         = require('lodash');
const CSSJSON   = require('CSSJSON');
const NProgress = require('nprogress');

/**
 * TypeSettings class to update the styles in realtime of common
 * type properties
 */

NProgress.configure({trickleRate: 0.1, trickleSpeed: 800, showSpinner: false});

export class TypeSettings {

    constructor(element, stylesheet) {

        /* Constructor elements and variables */
        this.$el         = $(`#${element}`);
        this.$styleSheet = $(`#${stylesheet}`);
        this.styles      = {children: {}};
        this.tags        = ['Heading_1', 'Heading_2', 'Heading_3', 'Heading_4', 'Heading_5', 'Heading_6', 'Paragraph'];

        /* Toggle height for the collapsible items */
        this.$el.find('.js-collapsible').click(function () {
            $(this).add($(this).attr('data-colapsible-target')).toggleClass('expanded');
        });

        /* Update style when the input elements change */

        this.$el.find('input, select').on('keyup input change', ()=> {
            this.updateStyles();
        });

    }

    /* Get a nested object of the current site configs' type settings */
    loadStyles() {
        $.ajax({
            url     : this.$el.attr('data-load-type-settings'),
            type    : 'POST',
            dataType: 'json'
        }).done((response)=> {
            this.setStyles(response);
        });
    }

    saveCSS(css) {
        $.ajax({
            url     : this.$el.attr('data-save-css'),
            type    : 'POST',
            dataType: 'json',
            data    : {
                css: CSSJSON.toCSS(this.styles)
            }
        }).done((response)=> {
        });
    }

    /* Update all of the type setting fields with the currently saved values */
    setStyles(data) {
        var count = 0;
        _.each(data, (tag)=> {
            this.$el.find(`#${this.tags[count]}_font-size`).val(tag.attributes['font-size']);
            this.$el.find(`#${this.tags[count]}_font-weight`).val(tag.attributes['font-weight']);
            this.$el.find(`#${this.tags[count]}_font-style`).val(tag.attributes['font-style']);
            this.$el.find(`#${this.tags[count]}_text-align`).val(tag.attributes['text-align']);
            this.$el.find(`#${this.tags[count]}_line-height`).val(tag.attributes['line-height']);
            this.$el.find(`#${this.tags[count]}_letter-spacing`).val(tag.attributes['letter-spacing']);
            count++;
        });
        this.updateStyles();
    }

    /* Update the current type settings */
    saveStyles() {
        NProgress.start();
        this.assignStyles();
        $.ajax({
            url     : this.$el.attr('data-save-type-settings'),
            type    : 'POST',
            dataType: 'json',
            data    : {
                styles: this.styles.children
            }
        }).done((response)=> {
            NProgress.done();
        });
    }

    /* Toggle the Type Settings Drawer */
    toggle() {
        this.$el.toggleClass('visible');
    }

    /* Show the Type Settings Drawer */
    show() {
        this.$el.addClass('visible');
    }

    /* Hide the Type Settings Drawer */
    hide() {
        this.$el.removeClass('visible');
    }

    /* Update the page to reflect the current Type Settings */
    updateStyles() {
        this.assignStyles();
        this.$styleSheet.html(CSSJSON.toCSS(this.styles));
    }

    /* Create CSS styles from the inputs */
    assignStyles() {
        this.$el.find('.js-type-setting').each((index, item)=> {
            _.assign(this.styles.children, this.createStyles($(item).attr('id'), $(item).attr('data-selector')));
        });
    }

    /* JSON TO CSS Conversion */
    createStyles(input, selector) {
        return {
            [selector]: {
                attributes: {
                    "font-size"     : this.$el.find(`#${input}_font-size`).val() + "rem",
                    "font-weight"   : this.$el.find(`#${input}_font-weight`).val(),
                    "font-style"    : this.$el.find(`#${input}_font-style`).val(),
                    "text-align"    : this.$el.find(`#${input}_text-align`).val(),
                    "line-height"   : this.$el.find(`#${input}_line-height`).val(),
                    "letter-spacing": this.$el.find(`#${input}_letter-spacing`).val() + 'px'
                }
            }
        }
    }
}