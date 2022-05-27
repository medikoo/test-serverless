"use strict";

module.exports.handler = (event, context, callback) => {
	console.log("Test log");
	callback(null, { ok: true });
};
