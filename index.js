"use strict";

let lastInvocationId = 0;
let currentInvocationId;

module.exports.handler = (event, context, callback) => {
	const invocationId = (currentInvocationId = ++lastInvocationId);
	console.log("Start invocation", invocationId, Date.now());
	context.callbackWaitsForEmptyEventLoop = false;
	const currentTime = Date.now();
	setTimeout(() => {
		console.log(
			`Registered for invocation: ${ invocationId } but invoked in invocation: ${
				currentInvocationId
			} after ${ Date.now() - currentTime }ms at ${ Date.now() }`
		);
	}, 15000);
	setTimeout(() => callback(null, {}), 3000);
};
