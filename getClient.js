var http = require('http');

var config = {
	hostname: 'localhost',
	port: 4000,
	path: '/produtos',
	headers: {
		'Accept':'application/json'
	}
};

http.get(config,function(res){
	console.log('Status da requisição:' + res.statusCode + '\n');
	res.on('data',function(body){
		console.log('Resposta: '+ body);
	});
});