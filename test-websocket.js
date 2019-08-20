"use strict";

const WebSocket = require("ws");

const url = "wss://j3smkwd843.execute-api.us-east-1.amazonaws.com/dev";

const ws = new WebSocket(url);

ws.on("open", ev => {
	console.log("Opened", ev);
	console.log("SEND RESULT", ws.send("some message"));
	setTimeout(() => ws.close(), 1000);
});

ws.on("close", ev => {
	console.log("closed", ev);
});

ws.on("message", ev => {
	console.log("message", ev);
});
