var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/produtos',(request,response)=>{
	response.render("produtos/lista");
});

var port = 3000;

serverInit(3000);

function serverInit(port){
	app.listen(port,function(){
		console.log("localhost:" + port);
	});
}