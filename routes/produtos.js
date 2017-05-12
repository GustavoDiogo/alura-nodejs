module.exports = function(app){
	app.get('/produtos',(req,res)=>{
		var connection = app.infra.dbConnection();
		var produtoDAO = new app.infra.models.ProdutosDAO(connection);

		produtoDAO.lista(function(errors,results){
			res.format({
				html: function(){
					res.render('produtos/lista',{lista:results});
				},
				json: function(){
					res.json(results);
				}
			})			
		});
		connection.end();
	});

	app.get('/produtos/form',function(req,res){
		res.render('produtos/form',{errosValidacao:{},produto:{}});
	});

	app.post('/produtos',function(req,res){
		var produto = req.body; 

		req.assert('titulo','Título é obrigatório').notEmpty();
		req.assert('preco','Preco inválido').isFloat();
		req.assert('descricao','Descrição é obrigatória').notEmpty();


		var erros = req.validationErrors();

		if(erros){
			res.format({
				html: function(){
					res.status(400).render('produtos/form',{errosValidacao:erros,produto:produto});
				},
				json: function(){
					res.status(400).json(erros);
				}
			})			
			return;
		}

		var connection = app.infra.dbConnection();
		var produtoDAO = new app.infra.models.ProdutosDAO(connection);		

		produtoDAO.salva(produto,function(errors,results){
			res.redirect('/produtos');
		})
	});
}