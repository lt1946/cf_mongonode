var ejs = require('ejs'),
	express = require('express'),
	csrf = require('../lib/csrf'),
	mysql = new require('mysql'), 
	db = null;

exports.port = 31;
exports.email='lt1946@gmail.com';
exports.site_name = 'Node Fuck';
exports.site_desc = '';
exports.session_secret = 'tsoedsosisession_secretonsheecfrxedta';
var db_options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'todo'
};
if(mysql.createClient) {
    db = mysql.createClient(db_options);
} else {
    db = new mysql.Client(db_options);
    db.connect(function(err) {
        if(err) {
            console.error('connect db ' + db.host + ' error: ' + err);
            process.exit();
        }
    });
}
exports.db = db;
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
}
