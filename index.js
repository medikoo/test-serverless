"use strict";

module.exports.handler = (event, context, callback) => {
	console.log("INPUT EVENT", event);
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({ message: "HTTP API TEST", event }, null, 2)
	});
};
