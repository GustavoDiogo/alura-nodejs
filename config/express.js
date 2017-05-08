var express = require('express');
var load = require('express-load');

module.exports = function(){
	var app = express();

	app.set('view engine', 'ejs');
	app.set('views', 'views');

	load('routes')
		.then('infra')
		.into(app);

	return app;
}