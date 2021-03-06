const http = require('http');

http.createServer(
	(request, response) => {

		// 发送 HTTP 头部
		// HTTP 状态值: 200 : OK
		// 内容类型: text/plain
		response.writeHead(200, {
			'Content-Type': 'text/html',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': '*',
			'Cache-Control': "max-age=5",
		});

		// 发送响应数据 "Hello World"
		response.end('i am hello world form 8881');
	}).listen(8881);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8881/');
