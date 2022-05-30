"use strict";

const delay = ms => new Promise(resolve => { setTimeout(resolve, ms); });

module.exports.handler = async event => {
	console.log("Line 1");
	console.log("Line 2");
	console.log("Line 3");
	console.log("Line 4");
	await delay(2000);
	console.log("Line 5");
	console.log("Line 6");
	console.log("Line 7");
	console.log("Line 8");

	await delay(2000);
	console.log("Line 9");
	console.log("Line 10");
	console.log("Line 11");
	console.log("Line 12");

	return { statusCode: 200, headers: event.headers, body: "end" };
};
