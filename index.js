"use strict";

const startedAt = Date.now();

module.exports.handler = (event, context, callback) => {
	console.log("I'm in", Date.now() - startedAt);
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({ message: "Lambda test v4" }, null, 2)
	});
};
