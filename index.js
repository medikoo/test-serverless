"use strict";

module.exports.handler = (event, context, callback) => {
	console.log("EVENT", event);
	callback(null, {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: "Webscolets response",
				input: event
			},
			null,
			2
		)
	});
};
