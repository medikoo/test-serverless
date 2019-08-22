"use strict";

process.env.AWS_REGION = "us-east-1";

const Cloudformation = require("aws-sdk/clients/cloudformation");

const cloudformation = new Cloudformation();

cloudformation
	.listExports({})
	.promise()
	.then(result => {
		console.log(result);
	});
