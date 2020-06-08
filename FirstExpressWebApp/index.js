var http = require('http');
var events = require('events');
const express = require('express');
const app = express();

//var eventEmitter = new events.EventEmitter();
const server = http.createServer((req,res) =>{
	console.log(req.headers);
	 res.statusCode = 200;
	res.setHeader('Context-Type', 'text/html');
	           res.end(('<html><body><h1>welcome</h1></body></html>'));
	// if(req.method == GET) {
	// 	var fileURL ;
	// 	if(req.url == '/'){
	// 	fileURL = './index.html';
	// 	}
	// 	else {
	// 		fileURL = req.url
	// 	}
	// 	var filePath = path.resolve('./public'+fileURL);
	// 	const fileExt = path.extname(filePath);    
	// 	if(fileExt == '.html') {
	// 	fs.exists(filePath,(exists) =>{
	// 		if(!exists){
	// 		  res.statusCode = 404;
	// 		  res.setHeader('Content-Type','text/html');
	// 		  res.end('<h3>Error 404'+fileURL+'</h3>');
	// 		}
	// 	 });
		
	//   }
	//   else {
			
	//  }
	// }
});

//eventEmitter.on('someone requested') // when event occur this will execute

server.listen(3000,'localhost',function(){
  console.log('Server started on port :3000');
});


