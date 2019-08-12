"use strict";

const ApiGateway = require("aws-sdk/clients/apigateway");

module.exports.handler = (event, context, callback) => {
	const apiGateway = new ApiGateway();
	apiGateway
		.updateAccount({
			patchOperations: [
				{
					op: "replace",
					path: "/cloudwatchRoleArn",
					value: "arn:aws:iam::992311060759:role/api-gateway-cloudwatch"
				}
			]
		})
		.promise()
		.then(result => callback(null, result), error => callback(null, { error }));
};
