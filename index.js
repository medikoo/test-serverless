"use strict";

const fsp  = require("fs").promises
    , path = require("path");

module.exports.handler = async () => ({
	statusCode: 200,
	body: (await fsp.readFile(path.resolve(__dirname, "image.jpg"))).toString("base64"),
	headers: { "Content-Type": "image/jpg" }
});
