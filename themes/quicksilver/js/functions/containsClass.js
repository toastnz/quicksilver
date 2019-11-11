function containsClass(el, className) {
    return (' ' + el.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

module.exports = containsClass;