var express = require("express");
var app = express();
var http = require("http").Server(app).listen(3000);
var upload = require("express-fileupload");
var fs = require("fs");

app.use(upload())

console.log("Server Started");

app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
	if(req.files){
		var file = req.files.fileUpload,
			filename = file.name;
			var temp = filename.split(".")
			var final = temp[0]+"_PTO."+temp[1];
			console.log(file);
			console.log(temp[1]);
			if(temp[1] == "csv"){
					file.mv("./upload/"+final,function(err){
				if(err){
					console.log(err)
					res.send("error occured"+err)
				}
				else{
					res.send("Done....");
					}
				})
			}
			else{
				res.send("Wrong File Format.");
			}
		
	}
})