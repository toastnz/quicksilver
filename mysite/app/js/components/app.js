'use strict';
window.jQuery = window.$ = require('jquery');
// ======================================================
// Requirements
// ======================================================

const $            = require('jquery'),
      _            = require('underscore'),
      fancybox     = require('fancybox')($),
      imagesLoaded = require('imagesloaded'),
      slick        = require('slick-carousel'),
      jQBridget    = require('jquery-bridget'),
      Masonry      = require('masonry-layout'),
      matchHeight  = require('jquery-match-height');

// ======================================================
// Components
// ======================================================

const template    = require('./templates'),
      selectOrDie = require('./selectordie');

