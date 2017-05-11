module.exports = function(app){
	app.get('/produtos',(req,res)=>{
		var connection = app.infra.dbConnection();
		var produtos = new app.infra.models.ProdutosDAO(connection);

		produtos.lista(function(errors,results){
			res.render('produtos/lista',{lista:results});
		});
		connection.end();
	});

	app.get('/produtos/form',function(req,res){
		res.render('produtos/form');
	});

	app.post('/produtos/salva',function(req,res){
		var connection = app.infra.dbConnection();
		var produtos = new app.infra.models.ProdutosDAO(connection);

		var produto = req.body; 
		console.log(produto);

		produtos.salva(produto,function(errors,results){
			res.redirect('/produtos');
		})
	});
}