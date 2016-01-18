/**
 * Constants
 */
const $snappy = $('#snappy');
const $body = $('body');

/**
 * Check the current state of the sidebar
 * @return {String} Current sidebar state
 */
export function state() {
    if ($body.hasClass('sidebarOpen')) {
        log('sidebar.state() => sidebar is open');
        return 'open';
    } else {
        log('sidebar.state() => sidebar is closed');
        return 'closed';
    }
}

/**
 * Close the sidebar
 */
export function close() {
    $body.removeClass('sidebarOpen');
    log('sidebar.close() => closing sidebar');
}

/**
 * Open the sidebar
 */
export function open() {
    $body.addClass('sidebarOpen');
    log('sidebar.open() => opening sidebar');
}

/**
 *
 * INTERACTIONS
 *
 */
$snappy.on('click', '.js-toggle-sidebar', function (e) {
    e.preventDefault();
    if (state() === 'open') {
        close();
    } else {
        open();
    }
});

$snappy.on('click', '.js-close-sidebar', function (e) {
    e.preventDefault();
    close();
});

$snappy.on('click', '.js-open-sidebar', function (e) {
    e.preventDefault();
    open();
});

//const GeminiScrollbar = require('gemini-scrollbar');
//
//var myScrollbar = new GeminiScrollbar({
//    element: document.getElementById('scroll')
//}).create();
//
