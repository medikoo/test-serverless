"use strict";

module.exports.handler = (event, context, callback) => {
	console.log("Evedt", event);
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({ message: "Regular lambda test", input: event }, null, 2)
	});
};
