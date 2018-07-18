var express = require('express');
var app = express();


app.get('/', function(req,res,next){
	res.send("Hello World!");
});

app.get('/quit', function(req,res,next){
	res.send("Server Closed");
	server.close();
});

var router = express.Router();

router.get("/img", function(req,res){
	res.send("Hello Img!");
});

app.use("/", router);

 var server = app.listen(80, function(){
	console.log('Example app listening on port 80!');
});