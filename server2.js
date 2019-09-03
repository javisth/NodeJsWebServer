var express = require("express");
var body_parser = require("body-parser");
var path = require("path");
var app = express();

app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());

app.post("/form-posted",function(req,res){
	
	res.send("Hello!"+req.body.name);
	res.end();
});




app.get("/", function(req,res){
	/*res.sendFile("/Users/javisth/node-app2/azad.html");*/
	res.render("form.html");
	res.end();
});

app.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');

