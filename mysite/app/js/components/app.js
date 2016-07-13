'use strict';
/*------------------------------------------------------------------
 Main Application Container
 ------------------------------------------------------------------*/

// Requirements
const $ = require('jquery');

// Imports
import {TypeSettings} from './typeSettings';

//Variables
const Type = new TypeSettings('typeSettings', 'typeStyles');

$('body').keyup(function (e) {
    if (e.keyCode == 192) {
        Type.toggle();
        Type.loadStyles();
    }
});
Type.toggle();

$('.js-save-type-settings').click(()=> {
    Type.saveCSS();
    Type.saveStyles();
});
