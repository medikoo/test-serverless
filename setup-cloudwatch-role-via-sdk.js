"use strict";

require("essentials");

process.env.AWS_PROFILE = "test";
process.env.AWS_REGION = "us-east-1";

const ApiGateway = require("aws-sdk/clients/apigateway");
const Iam = require("aws-sdk/clients/iam");

const wait = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const create = async () => {
	const accountId = "992311060759";

	const apiGatewayPushToCloudWatchLogsPolicyArn =
		"arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs";
	const roleArn = `arn:aws:iam::${ accountId }:role/serverlessApiGatewayCloudWatchRole`;

	const apiGateway = new ApiGateway();

	const assignedRoleArn = (await apiGateway.getAccount().promise()).cloudwatchRoleArn;
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

	const updateAccount = async (counter = 1) => {
		try {
			await apiGateway
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
		} catch (error) {
			if (counter < 10) {
				// Observed fails with errors marked as non-retryable. Still they're outcome of
				// temporary state where just created AWS role is not being ready for use (yet)
				await wait(10000);
				return updateAccount(++counter);
			}
			throw error;
		}
		return null;
	};

	return updateAccount();
};

create();
