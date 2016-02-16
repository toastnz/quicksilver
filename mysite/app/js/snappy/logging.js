const logging_enabled = true;

window.log = function () {
    log.history = log.history || [];
    log.history.push(arguments);
    if (window.console && logging_enabled) {
        console.log(Array.prototype.slice.call(arguments));
    }
};
