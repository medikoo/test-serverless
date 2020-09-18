// Node.js v6+

"use strict";

const { join } = require("path");

module.exports = {
	extends: join(__dirname, "./index.js"),
	parserOptions: { ecmaVersion: 2015 },
	rules: { "prefer-named-capture-group": "off", "prefer-object-spread": "off" }
};
