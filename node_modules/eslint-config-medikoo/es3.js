"use strict";

const { join } = require("path");

module.exports = {
	extends: join(__dirname, "es5.js"),
	parserOptions: { ecmaVersion: 3 },
	rules: {
		"dot-notation": ["error", { allowKeywords: false }],
		"quote-props": ["error", "consistent-as-needed", { keywords: true }],
		"no-void": "off"
	}
};
