// Node.js v14+

"use strict";

const { join } = require("path");

module.exports = { extends: join(__dirname, "./index.js"), parserOptions: { ecmaVersion: 2020 } };
