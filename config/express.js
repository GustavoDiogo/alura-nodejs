var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function(){
	var app = express();

	app.set('view engine', 'ejs');
	app.set('views', 'views');

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	load('routes')
		.then('infra')
		.into(app);

	return app;
};