var express = require("express");
var body_parser = require("body-parser");
var path = require("path");
var app = express();

app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());


/* Name */

app.post("/",function(req,res){
	
	res.send("Hello! "+req.body.name + " your email is "+req.body.email+" your phone number is "+req.body.phone);
	res.end();
});


app.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');

