var express = require("express");
var body_parser = require("body-parser");
var app = express();

app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());

app.post("/",function(req,res){
	
	res.send("Hello!"+req.body.name);
	res.end();
});
/*



app.get("/world", function(req,res){
	res.send("World!");
	res.end();
});
*/
app.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');

