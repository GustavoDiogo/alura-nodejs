module.exports = function(app){
	app.get('/promocoes/form',function(req,res){
		var connection = app.infra.dbConnection();
		var produtosDAO = new app.infra.models.ProdutosDAO(connection);

		produtosDAO.lista(function(errors,results){
			res.render('promocoes/form',{lista:results});
		});

		connection.end();
	});

	app.post('/promocoes',function(req,res){
		var promocao = req.body;
		app.get('io').emit('novaPromocao',promocao);
		res.redirect('/promocoes/form');
	});
}