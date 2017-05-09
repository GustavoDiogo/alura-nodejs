var app = require('./config/express.js')();

app.listen(4000,function(){
	console.log("localhost:" + 4000);
});

