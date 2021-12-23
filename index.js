"use strict";

const fsp  = require("fs").promises
    , path = require("path");

module.exports.handler = async () => ({
	statusCode: 200,
	headers: { "Content-type": "image/jpeg" },
	body: (await fsp.readFile(path.resolve(__dirname, "image.jpg"))).toString("base64"),
	isBase64Encoded: true
});
