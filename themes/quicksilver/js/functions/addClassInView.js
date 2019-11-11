const attach = require('./attach');
const offsetY = require('./offsetY');
const containsClass = require('./containsClass');

function addClassInView(el = false, classname, offset = 1) {
	if (el) {
		console.log(el);
		attach('scroll', () => {
			if (!containsClass(el, classname)) {
				if (window.pageYOffset + (window.innerHeight * offset) >= offsetY(el)) el.classList.add(classname);
			}
		}, 500);
	}
}

module.exports = addClassInView;