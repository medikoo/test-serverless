"use strict";

module.exports.handler = (event, context, callback) =>
	callback(null, { statusCode: 200, body: JSON.stringify({ message: "Lambda test" }, null, 2) });
