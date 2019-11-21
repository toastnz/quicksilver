// Requirements
const GM = require('google-maps');

let devMode = false;

class Map {
	constructor(el) {
		this.map = el;
		this.coordinates = this.map.getAttribute('data-map').split(',');
		this.api = document.body.getAttribute('data-maps-api');

		(this.api || devMode) ? this.init() : this.exit();
	}

    exit() {
        console.warn('Missing Google Maps API key! Add the API key to the body \'data-maps-api="key"\'.');
    }

	init() {
		GM.KEY = this.api;

		let map;
        let marker;
        let center = {
            lat: parseFloat(this.coordinates[0]),
            lng: parseFloat(this.coordinates[1]),
        };

        GM.load((google) => {
            // Initialise the map
            map = new google.maps.Map(this.map, {
                center: center,
                disableDefaultUI: true,
                scrollwheel: false,
                zoomControl: true,
                zoom: 12,
            });

            marker = new google.maps.Marker({
                map: map,
                position: center,
            });
        });
	}
}

export default Map;

// ======================================================
// JavaScript Usage
// ======================================================

// import Map from './maps';

// document.querySelectorAll('[data-map]').forEach((map) => new Map(map));

// ======================================================
// HTML Usage
// ======================================================

// <section class="js-map" data-map="latitude,longitude"></section>