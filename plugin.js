"use strict";

module.exports = class TestPlugin {
	constructor(serverless, options) {
		this.serverless = serverless;
		this.options = options;

		this.commands = {
			foo: {
				usage: "Some Foo Usage",
				lifecycleEvents: ["functions"],
				options: {
					someString: {
						usage: "Look at a string option",
						shortcut: "x",
						required: true,
						type: "string"
					}
				}
			}
		};

		this.hooks = { "foo:functions": this.fooFunction.bind(this) };
	}

	fooFunction() { console.log("Foo!"); }
};
