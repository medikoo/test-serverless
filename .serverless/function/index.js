"use strict";

module.exports.handler = async event =>
	new Promise(resolve => {
		setTimeout(
			() =>
				resolve({
					statusCode: 200,
					body: JSON.stringify(
						{
							message:
								"Go Serverless v1.0! Your function executed successfully (again2)!",
							input: event,
							env: process.env
						},
						null, 2
					)
				}),
			2000
		);
	});
};
