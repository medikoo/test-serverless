"use strict";

module.exports = class CustomProvider {
  constructor(serverless) {
		if (!serverless.configSchemaHandler) return;
    serverless.configSchemaHandler.defineProvider("custom", {
      provider: {
        properties: {
					stage: { type: "string" },
					variableSyntax: { type: "string" },
					versionFunctions: { type: "boolean" },
					remoteFunctionData: { type: "null" }
        }
      },
      function: {
        properties: {
          handler: { type: "string" }
        }
      }
    });
  }
};

