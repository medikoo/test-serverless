"use strict";

const startedAt = Date.now();

module.exports.handler = (event, context, callback) => {
	console.log("I'm in", Date.now() - startedAt, event);
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({ message: "Lambda test v9" }, null, 2)
	});
};
