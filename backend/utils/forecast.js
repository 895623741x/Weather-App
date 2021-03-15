const request = require("request");

const forecast = (address, callback) => {
	const url = "http://api.weatherstack.com/current?access_key=3bbb14f8eb944214b709dbee08aa731f&query=" + address;
	////

	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback("unable to connect to the weather service", undefined);
		} else if (response.body.error) {
			callback("try another address", undefined);
		} else {
			callback(undefined, response.body.current);
		}
	});
};

module.exports = forecast;
