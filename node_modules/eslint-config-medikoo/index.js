/* eslint max-lines: "off" */

"use strict";

module.exports = {
	extends: "eslint:all",
	env: {
		commonjs: true,
		es6: true // Register ES2015 globals
	},
	globals: {
		// Do not accept accessing Object.prototype properties as globals
		hasOwnProperty: "off",
		isPrototypeOf: "off",
		propertyIsEnumerable: "off",
		toLocaleString: "off",
		toSource: "off",
		valueOf: "off"
	},
	parserOptions: { ecmaVersion: 2019 },
	rules: {
		"accessor-pairs": "off",
		"array-bracket-newline": "off",
		"array-element-newline": "off",
		"arrow-parens": ["error", "as-needed"],
		"brace-style": "off",
		"callback-return": "off",
		"capitalized-comments": "off",
		"class-methods-use-this": "off",
		"comma-style": ["error", "last", { exceptions: { VariableDeclaration: true } }],
		"complexity": "off", // Reports a perfectly valid scenarios
		"consistent-this": "off",
		"curly": ["error", "multi-line"],
		"dot-location": ["error", "property"],
		"func-name-matching": "off",
		"func-names": ["error", "never"],
		"function-call-argument-newline": "off",
		"function-paren-newline": "off", // To not interfere with Prettier
		"global-require": "off",
		"guard-for-in": "off",
		"id-length": ["error", { exceptions: ["_", "a", "d", "e", "i", "j", "k", "t", "T"] }],
		"indent": "off",
		"implicit-arrow-linebreak": "off",
		"init-declarations": "off",
		"line-comment-position": "off",
		"lines-between-class-members": "off",
		"max-len": ["error", 100, { ignoreUrls: true }],
		"max-lines": ["error", { max: 115 }],
		"max-lines-per-function": "off",
		"max-params": "off",
		"max-statements": "off",
		"max-statements-per-line": "off", // To not interfere with Prettier
		"multiline-comment-style": "off",
		"multiline-ternary": "off",
		"newline-before-return": "off",
		"newline-per-chained-call": "off",
		"no-confusing-arrow": "off",
		"no-continue": "off",
		"no-control-regex": "off",
		"no-empty": ["error", { allowEmptyCatch: true }],
		"no-extra-parens": "off",
		"no-inline-comments": "off",
		"no-invalid-this": "off",
		"no-labels": "off",
		"no-magic-numbers": "off",
		"no-mixed-operators": [
			"error",
			{
				groups: [
					["&", "|", "^", "~", "<<", ">>", ">>>"],
					["==", "!=", "===", "!==", ">", ">=", "<", "<="], ["&&", "||"],
					["in", "instanceof"]
				],
				allowSamePrecedence: true
			}
		],
		"no-mixed-requires": "off",
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"no-multi-assign": "off",
		"no-multi-spaces": ["error", { exceptions: { VariableDeclarator: true } }],
		"no-param-reassign": "off",
		"no-plusplus": "off",
		"no-process-env": "off",
		"no-process-exit": "off",
		"no-return-assign": "off",
		// "global" is implied by commonjs env, and that's not right (not all CJS envs implement global)
		"no-shadow": ["error", { builtinGlobals: true, allow: ["global"] }],
		"no-sync": "off",
		"no-tabs": "off",
		"no-ternary": "off",
		"no-undef": ["error", { typeof: false }],
		"no-undefined": "off",
		"no-underscore-dangle": "off",
		"no-unused-vars": ["error", { argsIgnorePattern: "[iI]gnored" }],
		"no-warning-comments": ["error", { terms: ["fixme", "xxx"], location: "start" }],
		"object-curly-newline": "off",
		"object-curly-spacing": ["error", "always"],
		"object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
		"one-var": "off",
		"one-var-declaration-per-line": "off",
		"padded-blocks": "off",
		"quote-props": ["error", "consistent-as-needed"],
		"require-atomic-updates": "off",
		// Async Function may return promise and async guarantees it'll return a promise in case of
		// eventual initialization programming error.
		"require-await": "off",
		"space-before-function-paren": [
			"error", { anonymous: "always", asyncArrow: "always", named: "never" }
		],
		"sort-keys": "off",
		"sort-vars": "off",
		"template-curly-spacing": ["error", "always"],
		"vars-on-top": "off",
		"wrap-iife": "off",
		"wrap-regex": "off"
	},
	overrides: [{ files: "test/**", rules: { "max-statements": "off", "no-shadow": "off" } }]
};
