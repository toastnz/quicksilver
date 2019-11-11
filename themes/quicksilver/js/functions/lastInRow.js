const offsetY = require('./offsetY');

function lastInRow(el = false) {
  if (el) {
    let rowOffset = offsetY(el);
    let siblings = Array.from(el.parentNode.children);
    let last = null;

    siblings = siblings.slice(siblings.indexOf(el));

    siblings.forEach((sibling) => {
      if (offsetY(sibling) > rowOffset) {
        return false;
      }else {
        last = sibling;
      }
    });

    return last;
  }
}

module.exports = lastInRow;