const request = require("request");

const geocode = (address, callback) => {
	const url =
		"https://api.mapbox.com/geocoding/v5/mapbox.places/" +
		encodeURIComponent(address) +
		".json?access_token=pk.eyJ1IjoiODk1NjIzNzQxeCIsImEiOiJja2pneXR0c3Q0dTdqMnlsZ3Q5NWVrM2FxIn0.l5SqV-fegvlzH02NI-F_RQ&limit=1";

	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback("unable to connect to the weather service", undefined);
		} else if (response.body.message === "Not Found") {
			callback("unable to find the location." , undefined);
		} else {
			callback(undefined, {
				latitude: response.body.features[0].center[0],
				longtitude: response.body.features[0].center[1],
				location: response.body.features[0].place_name,
			});
		}
	});
};

module.exports = geocode;
