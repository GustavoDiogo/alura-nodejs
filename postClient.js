var http = require('http');

var config = {
	hostname: 'localhost',
	port: 4000,
	path: '/produtos',
	method: 'post',
	headers: {
		'Accept':'application/json',
		'Content-type':'application/json'
	}
};

var client = http.request(config,function(res){
	console.log('Status da requisição:' + res.statusCode + '\n');
	res.on('data',function(body){
		console.log('Resposta: '+ body);
	});
});

var produto = {
	titulo:'The Unforgiven I',
	descricao: 'Alberto trocou de lado, todos cairão sobre sua ira',
	preco:100
};

client.end(JSON.stringify(produto));