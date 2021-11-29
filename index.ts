import { user } from "./user.js";

export const handler = (event, context, callback) => {
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({ message: user.name, input: event }, null, 2)
	});
};
