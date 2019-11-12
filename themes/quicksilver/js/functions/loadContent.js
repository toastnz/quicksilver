function loadContent(options) {
	const httpRequest = new XMLHttpRequest();
	const settings = Object.assign({
		url: '/',
		method: 'GET',
		data: '',
		load: (response) => {
			if (settings.success !== undefined && typeof settings.success === 'function') settings.success(response.explicitOriginalTarget.response);
		},
		error: (response) => {
			console.warn(response);
		}
	}, options);

	httpRequest.addEventListener("load", settings.load);
	httpRequest.addEventListener("error", settings.error);

	httpRequest.open(settings.method, settings.url);
	httpRequest.send(data);
}

module.exports = loadContent;