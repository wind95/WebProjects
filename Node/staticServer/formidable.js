const fs = require('fs');
const http = require('http');
const path = require('path');
const formidable = require('formidable');

const server = http.createServer((req,res)=>{
	let req_url = req.url;
	console.log(req_url);
	if(req_url == "/login.html"){
		let pt = path.join(__dirname,"public",req_url);
		fs.readFile(pt,(err,data)=>{
			res.writeHead(200,{'Content-type':'text/plain;charset=utf8'});
			res.write(data);
			res.end();
		});
	}else if(req_url == "/login"){
		if(req.method == "POST"){
			var form = new formidable.IncomingForm();

			form.uploadDir = "./public/image";
			form.parse(req,function(err,fields,files){
				res.writeHead(200,{'Content-type':'text/plain'});
				res.write('received upload: \n\n');
				res.end();

			});
		}
	}else{
		res.end();
	}
})

server.listen(9090,(err)=>{
	if(err) throw err;
	console.log("服务器启动成功");
});