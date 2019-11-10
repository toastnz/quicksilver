const bodyWrap = document.querySelector('.body');
let scrollPos = 0;

function lockScroll(toggle = true) {
	
	if (toggle) {
		scrollPos = window.pageYOffset;
		bodyWrap.classList.add('scroll-locked');
		bodyWrap.style.height = window.innerHeight + 'px';
		bodyWrap.style.overflow = 'hidden';
		bodyWrap.scrollTop = scrollPos;
	}else {
		bodyWrap.classList.remove('scroll-locked');
		bodyWrap.style.height = 'auto';
		bodyWrap.style.overflow = 'visible';
		window.scrollTo(0, scrollPos);
	}
}

module.exports = lockScroll;