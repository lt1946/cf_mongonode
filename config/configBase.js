var ejs = require('ejs');
var	express = require('express');
var	csrf = require('../lib/csrf');

exports.port = (process.env.VMC_APP_PORT || 3003);
exports.host = (process.env.VCAP_APP_HOST || 'localhost');
exports.email='lt1946@gmail.com';
exports.site_name = 'cf_mongonode';
exports.site_desc = '';
exports.session_secret = 'tsoedsosisession_secretonshecf_mongonode';
exports.init=function(app){
	app.use(express.static(__dirname + '/../public', {maxAge: 3600000 * 24 * 30}));
	app.use(express.cookieParser());
	app.use(express.bodyParser());
	app.use(express.session({
	    secret: this.session_secret
	}));
	/**
	 * Fixed CSRF
	 *  add '<input type="hidden" name="csrf" value="<%- it.csrf %>" />' to form
	 */
	app.use(csrf.check());
	app.dynamicHelpers({
	    csrf: csrf.token
	});
	app.helpers({
	    config: this
	});
	app.set("view engine", "html");
	app.set("views", __dirname + '/../views');
	app.register("html", ejs);
};
