"use strict";

const serverless = require("serverless-http");
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	console.log("test from root");
	console.log("event ", req.body);
	return res.status(200).json({ message: "Hello from root!" });
});

app.get("/hello", (req, res) => {
	console.log("test from hello");
	console.log("event ", req.body);
	return res.status(200).json({ message: "Hello from path!" });
});

app.post("/testdestination", (req, res) => {
	console.log(JSON.stringify(req.body));
	return res.status(200).json({ msg: "hello" });
});

app.use((req, res) => res.status(404).json({ error: "Not Found" }));

module.exports.handler = serverless(app);
