// Taken from serverless documentation here:
// https://serverless.com/framework/docs/providers/aws/guide/plugins/#custom-variable-types

"use strict";

module.exports = class EchoTestVarPlugin {
	constructor() {
		this.variableResolvers = {
			echo: this.getEchoTestValue,
			// if a variable type depends on profile/stage/region/credentials,
			// to avoid infinite loops in
			// trying to resolve variables that depend on themselves, specify as such by setting a
			// dependendServiceName property on the variable getter
			echoStageDependent: {
				resolver: this.getDependentEchoTestValue,
				serviceName: "echo that isnt prepopulated",
				isDisabledAtPrepopulation: true
			}
		};
	}

	async getEchoTestValue(src) {
		console.log(`EchoTestVarPlugin resolving ${ src }`);
		return src.slice(5);
	}
	async getDependentEchoTestValue(src) { return src.slice(5); }
};
