var args = process.argv.slice(2);
if(args[1] == '+'){
	console.log(args[0]+args[1]+args[2]+"="+
		(parseInt(args[0])+parseInt(args[2])));
}else if(args[1] == '-'){
	console.log(args[0]+args[1]+args[2]+"="+
		(parseInt(args[0])-parseInt(args[2])));
}else if(args[1] == '*'){
	console.log(args[0]+args[1]+args[2]+"="+
		(parseInt(args[0])*parseInt(args[2])));
}else if(args[1] == '/'){
	console.log(args[0]+args[1]+args[2]+"="+
		(parseInt(args[0])/parseInt(args[2])));
}

