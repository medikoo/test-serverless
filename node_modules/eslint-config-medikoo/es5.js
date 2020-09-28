"use strict";

const { join } = require("path");

module.exports = {
	extends: join(__dirname, "index.js"),
	// Allow to override ES6 globals as e.g. var WeakMap = require('es6-weak-map')
	env: { es6: false },
	parserOptions: { ecmaVersion: 5 },
	rules: {
		// Turned off, to allow block scope usage (as with let & const)
		// While such approach can be error-prone, ability to use same approach as with
		// let & const is valued higher
		"block-scoped-var": "off",
		"no-template-curly-in-string": "off",
		"no-var": "off",
		"object-shorthand": "off",
		"prefer-arrow-callback": "off",
		"prefer-destructuring": "off",
		"prefer-object-spread": "off",
		"prefer-rest-params": "off",
		"prefer-spread": "off",
		"prefer-template": "off",
		"require-unicode-regexp": "off",
		"spaced-comment": ["error", "always", { markers: [",", "[,"] }]
	}
};
