var mysql = require('mysql');

function createDBConnection(){
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123',
		database: 'alura_nodejs'
	});
}

module.exports = function(){
	return createDBConnection;
}