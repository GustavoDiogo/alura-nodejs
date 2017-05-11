module.exports = function(app){
	app.get('/produtos',(req,res)=>{
		var connection = app.infra.dbConnection();
		var produtos = new app.infra.models.ProdutosDAO(connection);

		produtos.lista(function(errors,results){
			res.render('produtos/lista',{lista:results});
		});

		connection.end();

	});
}