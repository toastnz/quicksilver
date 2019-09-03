/*------------------------------------------------------------------
Versioning & Debug Information
------------------------------------------------------------------*/
window.debug = window.location.host.includes('.test');

if (debug) console.log('%cQUICKSILVER 4', 'padding:5px 5px;font-size:50px;color:#fff;text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2);');

/*------------------------------------------------------------------
Stylesheets
------------------------------------------------------------------*/

import './../scss/style.scss';



/*------------------------------------------------------------------
Imports
------------------------------------------------------------------*/

/*------------------------------------------------------------------
Responsive tables
- Wraps all tables inside of a div to make them responsive
------------------------------------------------------------------*/

// if ($$('table').length) import('./components/ResponsiveTables');

/*------------------------------------------------------------------
Accordions
- Event handlers for toggling accordion content
------------------------------------------------------------------*/

// if ($$('.js-accordion-trigger').length) import('./components/Accordions');

/*------------------------------------------------------------------
Video Modal
- Video block modal to play vimeo or youtube videos
------------------------------------------------------------------*/

if ($$('.js-video-modal').length) import('./components/VideoModal');

/*------------------------------------------------------------------
Video Modal
- Video block modal to play vimeo or youtube videos
------------------------------------------------------------------*/

// if ($$('#ContactForm_ContactForm').length) import('./components/ContactForm');

