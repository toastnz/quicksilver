"use strict";
/*------------------------------------------------------------------
 Type settings
 ------------------------------------------------------------------*/
// Requirements
const $ = require('jquery');
const _ = require('lodash');
const CSSJSON = require('CSSJSON');

/**
 * TypeSettings class to update the styles in realtime of common
 * type properties
 */

export class TypeSettings {

    constructor(element, stylesheet) {

        /* Constructor elements and variables */
        this.$el = $(`#${element}`);
        this.$styleSheet = $(`#${stylesheet}`);
        this.styles = {children: {}};

        /* Toggle height for the collapsible items */
        this.$el.find('.js-collapsible').click(function () {
            $(this).add($(this).attr('data-colapsible-target')).toggleClass('expanded');
        });

        /* Update style when the input elements change */
        this.$el.find('input, select').change(()=> {
            this.updateStyles();
        });

    }

    toggle() {
        this.$el.toggleClass('visible');
    }

    show() {
        this.$el.addClass('visible');
    }

    hide() {
        this.$el.removeClass('visible');
    }

    updateStyles() {
        this.$el.find('.js-type-setting').each((index, item)=> {
            _.assign(this.styles.children, this.createStyles($(item).attr('id'), $(item).attr('data-selector')));
        });
        this.$styleSheet.html(CSSJSON.toCSS(this.styles));
    }

    createStyles(input, selector) {
        return {
            [selector]: {
                attributes: {
                    "font-size": this.$el.find(`#${input}_font-size`).val() + "rem",
                    "font-weight": this.$el.find(`#${input}_font-weight`).val(),
                    "font-style": this.$el.find(`#${input}_font-style`).val(),
                    "text-align": this.$el.find(`#${input}_text-align`).val(),
                    "line-height": this.$el.find(`#${input}_line-height`).val(),
                    "letter-spacing": this.$el.find(`#${input}_letter-spacing`).val() + 'px'
                }
            }
        }
    }
}

new TypeSettings('typeSettings', 'typeStyles');

