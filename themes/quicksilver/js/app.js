/*------------------------------------------------------------------
Versioning & Debug Information
------------------------------------------------------------------*/

window.debug = window.location.host.includes('.test');

if (debug) console.log('%cQUICKSILVER: v4.1', 'padding:5px;color: #fff; background: #377cff;');
if (debug) console.log(`%cTEMPLATE: ${document.body.dataset.pageTemplate || 'Custom'}`, 'padding:5px;color: #fff; background: #c792ea;');

/*------------------------------------------------------------------
Stylesheets
------------------------------------------------------------------*/

import './../scss/style.scss';

let $ = (element) => document.querySelectorAll(element);

/*------------------------------------------------------------------
Components
------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {

    if ($('.js-video-modal').length) import('./components/videoBlock')
    if ($('table').length) import('./components/responsiveTables')
    if ($('.js-accordion-trigger').length) import('./components/accordions')
    if ($('login').length) import('./components/login')

});
