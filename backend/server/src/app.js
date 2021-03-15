const express = require("express");
const forecast = require("./utils/forecast");

const app = express();

app.get("/", (req, res) => {
	res.send("server is ready");
});

app.get("/weather", (req, res) => {
	if (!req.query.city) {
		return res.send({
			error: "city must be provided",
		});
	}

	forecast(req.query.city, (error, forecastData) => {
		if (error) {
			return res.send({
				error: error,
			});
		}
		res.send({
			forecast: forecastData,
		});
	});
});

app.listen(5000, () => {
	console.log("Serve at http://localhost:5000");
});
