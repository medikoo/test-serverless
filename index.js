"use strict";

module.exports.handler = (event, context, callback) =>
	new Promise(resolve =>
		setTimeout(() => {
			// Commenting below line will invoke context.callbackWaitsForEmptyEventLoop = false mode
			// Which means console.log will not be invoked in this invocation but in first further that occurs after 5s
			callback(null, {});
			resolve({});
			setTimeout(() => console.log("Hello I'm still here!"), 5000);
		})
	);
