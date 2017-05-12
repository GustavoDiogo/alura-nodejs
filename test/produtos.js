var express = require('../config/express')();
var request = require('supertest')(express);

describe('ProdutosController', function(){
	beforeEach(function(done){
		var conn = express.infra.dbConnection();
		conn.query("DELETE FROM LIVROS",function(ex,result){
			if(!ex){
				done();
			}
		});
	});

	it('#Listagem de produtos', function(done){
		request.get('/produtos')
			.set('Accept','application/json')
			.expect('Content-Type',/json/)
			.expect(200,done);
	});
	it('#Cadastro de novo produto com dados invalidos',function(done){
		request.post('/produtos')
			.send({
				titulo:'',
				descricao:''
			})
			.expect(400,done);
	});
		it('#Cadastro de novo produto com dados validos',function(done){
		request.post('/produtos')
			.send({
				titulo:'ronaldinho',
				preco: 20.05,
				descricao:'eh golll'
			})
			.expect(302,done);
	});
});