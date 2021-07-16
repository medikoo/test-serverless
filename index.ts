interface User { name: string; id: number }

export const user: User = { name: "Hayes", id: 23424 };

export const handler = (event, context, callback) => {
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({ message: "Regular lambda test", input: event }, null, 2)
	});
};
