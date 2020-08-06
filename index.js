"use strict";

module.exports.handler = (event, context, callback) => {
	console.log("Event", event);
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({ message: "Success2!", input: event }, null, 2)
	});
};
