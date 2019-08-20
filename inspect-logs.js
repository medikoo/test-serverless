"use strict";

const CloudWatchLogs = require("aws-sdk/clients/cloudwatchlogs");

const cloudWatchLogs = new CloudWatchLogs({ region: "us-east-1" });

cloudWatchLogs
	.filterLogEvents({
		logGroupName: "/aws/lambda/test-api-websockets-logs-dev-myFunction",
		filterPattern: "some message"
	})
	.promise()
	.then(result => console.log(result));
