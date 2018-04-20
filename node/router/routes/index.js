/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */
"use strict";
var express = require("express");
var async = require("async");

module.exports = function() {
	var app = express.Router();

	//Hello Router
	app.get("/", (req, res) => {
		var output = `Node.js Starter Template`;
/*			<a href="${req.baseUrl}/example1">/example1</a> - Simple Database Select - In-Line Callbacks</br> 
			<a href="${req.baseUrl}/example2">/example2</a> - Simple Database Select - Async Waterfall</br> 
			<a href="${req.baseUrl}/example3">/example3</a> - Call Stored Procedure</br> 
			<a href="${req.baseUrl}/example4/1">/example4</a> - Call Stored Procedure with Input = Partner Role 1 </br> 
			<a href="${req.baseUrl}/example4/2">/example4</a> - Call Stored Procedure with Input = Partner Role 2 </br> 
			<a href="${req.baseUrl}/example5">/example5</a> - Call Two Stored Procedures in Parallel Because We Can!</br> 
			<a href="${req.baseUrl}/whoAmI">/whoAmI</a> - Look at the session information</br> 
			<a href="${req.baseUrl}/hdb">/hdb</a> - Small DB example - port of hdb.xsjs</br> 
			<a href="${req.baseUrl}/os">/os</a> - Operating System Information - port of os.xsjs</br>`;*/
		res.type("text/html").status(200).send(output);
	});
	return app;
};
