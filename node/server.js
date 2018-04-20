/*eslint no-console: 0, no-unused-vars: 0, no-undef:0*/
/*eslint-env node, es6 */

"use strict";
var xsenv = require("@sap/xsenv");
var port = process.env.PORT || 3000;
var server = require("http").createServer();
global.__base = __dirname + "/";

//Initialize Express App for XSA UAA and HDBEXT Middleware
var passport = require("passport");
var xssec = require("@sap/xssec");
var express = require("express");

//logging
var logging = require("@sap/logging");
var appContext = logging.createAppContext();

//Initialize Express App for XS UAA and HDBEXT Middleware
var app = express();

passport.use("JWT", new xssec.JWTStrategy(xsenv.getServices({
	uaa: {
		tag: "xsuaa"
	}
}).uaa));
app.use(logging.expressMiddleware(appContext));
app.use(passport.initialize());
app.use(
	passport.authenticate("JWT", {
		session: false
	})
);

//Setup Routes
var router = require("./router")(app, server);

//Start the Server 
server.on("request", app);
server.listen(port, function() {
	console.info(`HTTP Server: ${server.address().port}`);
});
