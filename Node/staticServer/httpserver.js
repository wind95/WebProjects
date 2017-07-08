const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req,res)=>{
	// 1.获取请求地址
	let req_url = req.url;
	// console.log(req_url);
	if(req_url=="/"){
		req_url = "index.html";
	}


	// 2.获取文件路径
	let filepath = path.join(__dirname,"public",req_url);
	// console.log(filepath);
	fs.readFile(filepath,(err,data)=>{
		res.writeHead(200,{"Content-Type":"text/html;charset=utf8"})
		res.end(data);
	});
});



server.listen(9090,(err)=>{
	if(err){
		console.log("服务器启动失败");
		return;
	}
	console.log("服务器启动成功")
});