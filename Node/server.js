var http = require('http');

//返回一个http.Server实例
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('Hello World!');

}).listen(8888);//监听8888端口

console.log('Server running at http://127.0.0.1:8888/');