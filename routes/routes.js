module.exports = function loadRoutes(app){
	app.get('/produtos',(request,response)=>{
		var conn = app.infra.dbConnection();
		
		conn.query('SELECT * FROM LIVROS',function(err,results){
			response.render('produtos/lista',{lista:results});
		});

		conn.end();

	});
}