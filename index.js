var express = require('express');
var app = express();
app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');

});
app.get('/hello',function(req,res){
	res.sendFile(__dirname+'/new 1.html');
});
var port = process.env.PORT || 8080;
var server = app.listen(port,function(req,res){
	console.log("catch the action at http://localhost:"+port);
});