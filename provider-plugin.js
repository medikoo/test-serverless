"use strict";

module.exports = class CustomProvider {
  constructor(serverless) {
		if (!serverless.configSchemaHandler) return;
    serverless.configSchemaHandler.defineProvider("custom", {
      provider: {
        properties: {
        }
      },
      function: {
        properties: {
          handler: { type: "string" }
        }
      },
			functionEvents: [
				{ name: "alb", schema: { anyOf: [{ type: "string" }, { type: "object", properties: { foo: { type: "string" } }, additionalProperties: false }] } },
				{ name: "other", schema: { type: "string" } }
			]
    });
  }
};

