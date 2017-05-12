var mysql = require('mysql');

function createDBConnection(){
	if(!process.env.NODE_ENV){
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '123',
			database: 'alura_nodejs'
		});
	}
	if(process.env.NODE_ENV == 'test'){
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '123',
			database: 'alura_nodejs_test'
		});	
	}
}

module.exports = function(){
	return createDBConnection;
}