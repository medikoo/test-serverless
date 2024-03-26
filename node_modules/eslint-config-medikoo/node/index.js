// Node.js v10+

"use strict";

const { join } = require("path");

module.exports = {
	extends: join(__dirname, "../index.js"),
	env: { node: true },
	globals: { fetch: "off" }
};
