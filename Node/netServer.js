// 引进net模块
const net = require('net');

let scoketList = [];

// 创建服务器对象,发送消息给客户端
const server = net.createServer((socket)=>{
	scoketList.push(socket);
	console.log("客户端连接了");
	socket.write("Welcome to chatRoom\r\n");

	// 接收客户端消息并转发
	socket.on("data",(chunk)=>{
		scoketList.forEach((socket1)=>{
			if(socket==socket1) return;
				socket1.write(chunk);
			});
	});
});

// 监听控制台，发送控制台数据
process.stdin.on("data",(chunk)=>{
	scoketList.forEach((socket)=>{
		socket.write(chunk);
	});	
});


// 监听9090端口
server.listen(9090,(err)=>{
	if(err){
		console.log("服务器启动失败");
		return;
	}
	console.log("9090端口服务器启动成功");
});