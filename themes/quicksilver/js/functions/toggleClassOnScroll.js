const attach = require('./attach');

function toggleClassOnScroll(el = false, classname, distance) {
  if (el) {
    attach('scroll', () => {
      (window.scrollY >= distance) ? el.classList.add(classname) : el.classList.remove(classname);
    }, 500)
  }
}

module.exports = toggleClassOnScroll;