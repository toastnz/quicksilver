function offsetY(el) {
  let offset = 0;

  while(el) {
    offset += el.offsetTop;
    el = el.offsetParent;
  }

  return offset;
}

module.exports = offsetY;