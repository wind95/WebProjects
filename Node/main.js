const search = require('./searchMethod');

search.world();
// console.log(module);

// console.log(fs);
var url = "F:\\BaiduYunDownload\\lesson02"+
		"\\node_lesson02\\nodelesson02";

//调用子模块搜索方法		
search.searchFiles(url);