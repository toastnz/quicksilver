const selectAll = require('../functions/selectAll');
const lockScroll = require('../functions/lockScroll');

// let canBlur = true;

// if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent)) {
//     canBlur = false;
// }

// const blurElements = (toggle = true) => {
// 	if (canBlur) {
// 		selectAll('[data-blur]').forEach((el) => {

// 			if (toggle) {
// 				el.classList.add('js-active');
// 			}else {
// 				el.classList.remove('js-active');
// 			}
// 		})
// 	}
// }

selectAll('[data-modal]').forEach((modal) => {
	const ID = modal.getAttribute('data-modal');
	const toggles = selectAll(`[data-modal-toggle="${ID}"]`);
	const closeLinks = selectAll(`[data-modal-close="${ID}"]`);
	let scrollLocked = false;

	modal.style.msTransition = 'opacity .25s ease-out';
    modal.style.webkitTransition = 'opacity .25s ease-out';
    modal.style.MozTransition = 'opacity .25s ease-out';
    modal.style.OTransition = 'opacity .25s ease-out';
    modal.style.transform = 'opacity .25s ease-out';
    modal.style.display = 'none';
    modal.style.opacity = 0;

	const openModal = () => {
		lockScroll(true);
		scrollLocked = true;
		modal.classList.add('js-active');
		modal.style.display = 'block';

		setTimeout(() => {
			// blurElements(true);
			modal.style.opacity = 1;
		}, 5);
	}

	const closeModal = () => {
		lockScroll(false);
		scrollLocked = false;
		modal.classList.remove('js-active');
		modal.style.opacity = 0;
		// blurElements(false);

		setTimeout(() => {
			modal.style.display = 'none';
		}, 250);
	}

	closeLinks.forEach((link) => {
		link.addEventListener('click', () => {
			if (scrollLocked) {
				closeModal();
			}
		});
	});

	toggles.forEach((toggle) => {
		toggle.addEventListener('click', () => {
			(modal.classList.contains('js-active')) ? closeModal() : openModal();
		});
	});
});