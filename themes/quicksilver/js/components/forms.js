import selectAll from '../functions/selectAll';
import serialize from '../functions/serialize';
// import sendForm from '../functions/sendForm';

const submitForm = (options) => {
	const httpRequest = new XMLHttpRequest();
	const settings = Object.assign({
		url: '/',
		data: '',
		load: (response) => {
			if (settings.success !== undefined && typeof settings.success === 'function') {
				if (response.explicitOriginalTarget !== undefined) {
					settings.success(response.explicitOriginalTarget);
				} else if (response.currentTarget) {
					settings.success(response.currentTarget);
				}
			};
		},
		error: (response) => console.warn(response),
	}, options);

	httpRequest.addEventListener("load", settings.load);
	httpRequest.addEventListener("error", settings.error);

	httpRequest.open('POST', settings.url);

	httpRequest.setRequestHeader('x-requested-with', "XMLHttpRequest");
	httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	httpRequest.send(settings.data);
}

const validEmail = (email) => {
    let pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(email);
}

const formMessage = (message, element = 'p') => {
	let el = document.createElement(element);
	let content = document.createTextNode(message); 
	el.appendChild(content);
	el.classList.add('formMessage');
	return el;
}

selectAll('form.form').forEach((form) => {
	let inputs = Array.from(form.querySelectorAll('input:not([type="submit"]), textarea'));
	let requiredInputs = Array.from(form.querySelectorAll('input:required, textarea:required'));
	let untilValid = requiredInputs.length;
	let validation = 0;

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		validation = 0;
		
		Array.from(form.querySelectorAll('.formMessage')).forEach((error) => error.remove());
		
		requiredInputs.forEach((input) => {
			input.classList.add('error');
			if (input.type === 'email' && input.value === '') {
				input.parentElement.insertBefore(formMessage('Email address is required'), input);
			}else if (input.type === 'email' &! validEmail(input.value)) {
				input.parentElement.insertBefore(formMessage('Email address is not valid'), input);
			}else if (input.value === '') {
				input.parentElement.insertBefore(formMessage('This field is required'), input);
			}else {
				input.classList.remove('error');
				validation += 1;
			}
		});

		if (validation === untilValid) {
			sendForm({
				url: form.action,
				data: serialize(form),
				success: (e) => {
					let response = JSON.parse(e.responseText);
					form.parentElement.insertBefore(formMessage(response.message, 'h5'), form);
					inputs.forEach((input) => input.value = '');
					// success(response.message);
				}
			})
		}
	})
});