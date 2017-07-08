const fs = require('fs');
const path = require('path');
let srcUrl = "README.md";
// readFile(srcUrl);
// readFileSync(srcUrl);

let desUrl = 'input.txt';
let data = 'This is data';
let appendData = 'This is appendData';


dirCopy("F:\\BaiduYunDownload\\lesson02"+
		"\\node_lesson02\\nodelesson02",
	"F:\\BaiduYunDownload\\lesson02"+
		"\\node_lesson02\\nodelesson03");

// writeFile();
// writeFileSync();
// appendFile(desUrl,appendData);
// openFile(desUrl);

//创建文件夹
function mkDir(){
	fs.mkdir("F:\\BaiduYunDownload\\lesson02"+
		"\\node_lesson02\\nodelesson02\\node_mo4",(err)=>{
		console.log("success...")
	})
}


//单个文件复制
function fileCopy(srcUrl,desUrl){
	fs.readFile(srcUrl,(err,data) =>{
		fs.writeFile(desUrl,data,(err)=>{
			if(err) throw err;
		});
	});
}

//文件夹复制
function dirCopy(srcUrl,desUrl){
	//判断目标目录是否存在
	fs.access(desUrl,fs.constants.F_OK,(err)=>{
		if(err){
			//创建目录
			fs.mkdir(desUrl,(err)=>{
				if(err) throw err;
				console.log("创建"+desUrl+"目录");
			});
		}		
	});
	readDir(srcUrl);
	function readDir(srcUrl){
		fs.readdir(srcUrl,(err,files)=>{
			// console.log(srcUrl);
			files.forEach((item)=>{
				let fileName = path.join(srcUrl,item);
				fs.stat(fileName,(err,stats)=>{
					if(stats.isFile()){
						//执行文件复制
						let desFile = path.join(desUrl,item);
						fileCopy(fileName,desFile);
					}
					if(stats.isDirectory()){
						//复制目录
						dirCopy(fileName,path.join(desUrl,item));
					}
				});
			});
		});
	}
}

console.log("程序执行完毕!");

/*
* 读取文件
*/

//异步读取文件
function readFile(url){
	fs.readFile(url,'utf-8',(err,data) =>{
		console.log(data.toString());
		console.log("文件异步读取成功! ");
	});
}

//同步读取文件
function readFileSync(url){
	let data = fs.readFileSync(url);
		console.log(data.toString());
		console.log("文件同步读取成功! ");
}

/*
* 写文件
*/

// 异步写文件
function writeFile(url,data){
	fs.writeFile(url,data,(err) =>{
		if(err) throw err;
		console.log("数据异步写入成功！");
	});
}

// 同步写入文件
function writeFileSync(url,data){
	fs.writeFileSync(url,data);
	console.log("数据异同步写入成功！");
}

// 追加写入数据
function appendFile(url,appendData){
	fs.appendFile(url,appendData,(err) =>{
		if(err) throw err;
	});
}



//打开文件
function openFile(url){
	fs.open(url,'a+',(err,fd) =>{
		if(err) throw err;
		// console.log(fd);
		console.log("文件打开成功！");
	});
}