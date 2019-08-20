"use strict";

module.exports.handler = (event, context, callback) => {
	console.info("Event type", event.requestContext.eventType);
	if (event.body) console.info("Event body", event.body);
	callback(null, { statusCode: 200 });
};
