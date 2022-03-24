export const handler = (event, context, callback) => {
	process._rawDebug("F (ESM)", "invocation");
	setTimeout(() => {
		process._rawDebug("F (ESM)", "return");
		callback(null, {
			statusCode: 200,
			body: JSON.stringify({ event, env: process.env, context, argv: process.argv })
		});
	}, 2000);
};
