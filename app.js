var app = require('./config/express.js')();

app.listen(3000,function(){
	console.log("localhost:" + 3000);
});

