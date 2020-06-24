"use strict";

class MyPlugin {
  constructor(serverless, options) {
		console.log("LOAD");
    this.serverless = serverless;
    this.options = options;
    this.variableResolvers = {
      foo: {
        isDisabledAtPrepopulation: true,
        resolver: async path => {
          console.trace(this.serverless.service.provider.stackName);
					return { bar: "foo" };
        },
        serviceName: "Not prepopulated..."
      }
    };
  }
}
module.exports = MyPlugin;
