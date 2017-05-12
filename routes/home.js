module.exports = function(app){
	app.get('/',function(req,res){
		var connection = app.infra.dbConnection();
		var produtosDAO = new app.infra.models.ProdutosDAO(connection);

		produtosDAO.lista(function(errors,results){
			res.render('home/index',{livros:results});
		});

		connection.end();
	});
}