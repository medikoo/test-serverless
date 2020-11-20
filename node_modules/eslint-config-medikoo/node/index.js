// Node.js v8+

"use strict";

const { join } = require("path");

module.exports = {
	extends: join(__dirname, "../index.js"),
	env: { node: true },
	rules: { "prefer-named-capture-group": "error" }
};
