// Node.js (also covering old versions)

"use strict";

const { join } = require("path");

module.exports = { extends: join(__dirname, "../es5.js"), env: { node: true } };
