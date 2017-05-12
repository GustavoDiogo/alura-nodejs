var app = require('./config/express.js')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io',io);

http.listen(4000,function(){
	console.log("localhost:" + 4000);
});

