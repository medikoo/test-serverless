"use strict";

const fsp  = require("fs").promises
    , path = require("path");

module.exports.handler = async () => fsp.readFile(path.resolve(__dirname, "image.jpg"));
