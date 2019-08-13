"use strict";

const ApiGateway = require("aws-sdk/clients/apigateway");
const Iam = require("aws-sdk/clients/iam");
const wait = require("timers-ext/promise/sleep");

const apiGatewayPushToCloudWatchLogsPolicyArn =
	"arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs";
const defaultRoleArn = "arn:aws:iam::992311060759:role/serverlessApiGatewayCloudWatchRole";

module.exports.handler = async () => {
	const apiGateway = new ApiGateway();

	const assignedRoleArn = (await apiGateway.getAccount().promise()).cloudwatchRoleArn;
	const roleArn = assignedRoleArn || defaultRoleArn;
	const roleName = roleArn.slice(roleArn.lastIndexOf("/") + 1);

	const iam = new Iam();

	const attachedPolicies = await (async () => {
		try {
			return (await iam.listAttachedRolePolicies({ RoleName: roleName }).promise())
				.AttachedPolicies;
		} catch (error) {
			if (error.code === "NoSuchEntity") {
				// Role doesn't exist yet, create;
				await iam
					.createRole({
						AssumeRolePolicyDocument: JSON.stringify({
							Version: "2012-10-17",
							Statement: [
								{
									Effect: "Allow",
									Principal: {
										Service: ["apigateway.amazonaws.com"]
									},
									Action: ["sts:AssumeRole"]
								}
							]
						}),
						Path: "/",
						RoleName: roleName
					})
					.promise();
				return [];
			}
			throw error;
		}
	})();

	if (
		!attachedPolicies.some(
			policy => policy.PolicyArn === apiGatewayPushToCloudWatchLogsPolicyArn
		)
	) {
		await iam
			.attachRolePolicy({
				PolicyArn: apiGatewayPushToCloudWatchLogsPolicyArn,
				RoleName: roleName
			})
			.promise();
	}

	if (assignedRoleArn === roleArn) return null;

	const codes = [];
	const updateAccount = async (counter = 1) => {
		try {
			const result = await apiGateway
				.updateAccount({
					patchOperations: [
						{
							op: "replace",
							path: "/cloudwatchRoleArn",
							value: roleArn
						}
					]
				})
				.promise();
			return { codes, result };
		} catch (error) {
			if (counter < 10) {
				await wait(10000);
				codes.push(error.code);
				return updateAccount(++counter);
			}
			return { command: "updateAccount", counter, error };
		}
	};

	return updateAccount();
};
