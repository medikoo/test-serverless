"use strict";

module.exports.handler = (event, context, callback) => {
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({ message: "Provisioned Lambda v3", input: event }, null, 2)
	});
};
