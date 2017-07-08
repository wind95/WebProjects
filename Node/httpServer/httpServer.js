 const http = require('http');
 const fs = require('fs');
 const path = require('path');
 const url = require('url');
 const querystring = require('querystring');//字符串转发

// 创建web浏览器
 const server = http.createServer((req,res)=>{
 	console.log("浏览器访问");
 	let pathurl = url.parse(req.url).pathname;
 	console.log(pathurl);
 	if(pathurl=="/login"){ 
 		let data = fs.readFileSync("login.html");
 		res.write(data);
 		res.end();
 	}else if(pathurl=="/"){
 		let data = fs.readFileSync("index.html");
 		res.write(data);
 		res.end();
 	}else if(pathurl=="/logins"){//登录请求
 		// GET方式请求
 		if(req.method=="GET"){
 			let requ = url.parse(req.url).query;
 			console.log(requ);
 			res.end();
 		}

 		// POST方式请求
 		if(req.method=="POST"){

 			// 获取POST提交数据
 			let querydata = "";
 			req.addListener("data",(chunk)=>{
 				querydata = querydata+chunk;
 			});
			
 			req.addListener("end",(chunk)=>{
 				// 将表单数据转换为json
 				let msg = querystring.parse(querydata);
 				// console.log(msg);

 				// 密码验证，并返回操作结果
 				if(msg.user == '123' && msg.password == '123'){
 					res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
					res.write("登录成功！");
					res.end();
				}else{
					res.writeHead(404,{'Content-Type':'text/html;charset=utf8'});
					res.write("登录失败！");
					res.end();
				}
 			});	
 		}
 	}
 });


// 监听9090端口
 server.listen(9090,(err)=>{
 	if(err){
 		console.log("服务器启动失败");
 		return;
 	}
 	console.log("服务器启动成功");
 });