var express = require("express");
var app = express();
var http = require("http").Server(app).listen(3000);
var upload = require("express-fileupload");

app.use(upload())

console.log("Server Started");

app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
	if(req.files){
		var file = req.files.fileUpload,
			filename = file.name;
			console.log(file);
		file.mv("./upload/"+filename,function(err){
			if(err){
				console.log(err)
				res.send("error occured"+err)
			}
			else{
				res.send("Done....")
			}
		})
	}
})