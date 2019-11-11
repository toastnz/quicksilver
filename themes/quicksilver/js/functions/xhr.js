class xhr {
	constructor(options) {
		const settings = Object.assign({
			url: '/',
			method: 'POST',
			data: '',
			load: (response) => {
				if (settings.success !== undefined && typeof settings.success === 'function') {
					if (response.explicitOriginalTarget !== undefined) {
						settings.success(response.explicitOriginalTarget);
					} else if (response.currentTarget !== undefined) {
						settings.success(response.currentTarget);
					}
				};
			},
			error: (response) => {
				console.warn(response);
			}
		}, options);

		this.init();
	}

	init() {
		if (settings.method === 'POST') {
			switch(typeof settings.data) {
				case 'object': 
					console.log('object');
					break;
				default 'string': 
					console.log('string');
					settings.contentType = 'application/x-www-form-urlencoded';
			}
		}
	}
}

export default xhr;

// function sendForm(options) {
// 	const httpRequest = new XMLHttpRequest();
// 	const settings = Object.assign({
// 		url: '/',
// 		method: 'GET',
// 		data: '',
// 		contentType: 'application/x-www-form-urlencoded',
// 		load: (response) => {
// 			if (settings.success !== undefined && typeof settings.success === 'function') {
// 				if (response.explicitOriginalTarget !== undefined) {
// 					settings.success(response.explicitOriginalTarget);
// 				} else if (response.currentTarget) {
// 					settings.success(response.currentTarget);
// 				}
// 			};
// 		},
// 		error: (response) => {
// 			console.warn(response);
// 		}
// 	}, options);

// 	httpRequest.addEventListener("load", settings.load);
// 	httpRequest.addEventListener("error", settings.error);

// 	httpRequest.open(settings.method, settings.url);

// 	httpRequest.setRequestHeader('x-requested-with', "XMLHttpRequest");
// 	httpRequest.setRequestHeader('Content-Type', settings.contentType);

// 	httpRequest.send(settings.data);
// };

// module.exports = sendForm;