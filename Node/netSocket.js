const net = require('net');

const client = net.createConnection({port:9090,host:"localhost"},
(err)=>{
	if(err){
		client = net.createConnection({port:9091,host:"localhost"},()=>{});
	}
	console.log("连接成功");

	// 接收服务器数据
	client.on("data",(chunk)=>{
		console.log(chunk.toString().trim());
	});
});

// 监听控制台，发送控制台数据
process.stdin.on("data",(chunk)=>{
	client.write(chunk);
});