"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.user = void 0;
exports.user = { name: "Hayes", id: 23424 };
var handler = function (event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({ message: "Regular lambda test", input: event }, null, 2)
    });
};
exports.handler = handler;
//# sourceMappingURL=index.js.map