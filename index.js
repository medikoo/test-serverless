"use strict";

module.exports.handler = (event, context, callback) => {
	console.log("ORIGINAL HANDLER");
	callback(null, {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: "Go Serverless v1.0! Your function executed successfully (again2)!",
				input: event,
				env: process.env
			},
			null,
			2
		)
	});
};
