const request = require("request");

const forecast = (city, callback) => {
	const url = "https://api.weatherbit.io/v2.0/current?&city=" + city + "&key=b0f026683fa94238ba2be1180e4c01af";
	////

	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback("unable to connect to the weather service", undefined);
		} else if (response.body.error) {
			callback("please try another city", undefined);
		} else {
			callback(undefined, response.body);
		}
	});
};

module.exports = forecast;
