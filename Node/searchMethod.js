const path = require('path');
const fs = require('fs');

exports.world = function(){
	console.log("hello World!");
}


/*
var str = "C:\\temp\\myfile.html";
console.log("basename:"+path.basename(str));// myfile.html
console.log("dirname:"+path.dirname(str));// C:\temp
console.log("extname:"+path.extname(str));// .html
*/


//搜索文件函数
function searchFiles(url){
	fs.readdir(url,function(err,files){
		if(err) throw err;
		//循环读取文件
		files.forEach(function(file){
			let childPath = path.join(url,file);
			fs.stat(childPath,(err,stats) =>{

				//判断是否文件
				if(stats.isFile()){
					console.log(childPath+"(files...)");
				}

				//判断是否目录
				if(stats.isDirectory()){
					console.log(childPath+"(Directory...)");
					searchFiles(childPath);
				}
			});

		});
	
	});

}


exports.searchFiles = searchFiles;