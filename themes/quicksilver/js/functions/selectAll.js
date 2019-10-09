function selectAll(selector) {
  return Array.from(document.querySelectorAll(selector));
}

module.exports = selectAll;