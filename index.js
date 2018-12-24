const express = require('express');

// 创建一个服务器
const app = express();
// 监听端口
app.listen(4000, function(err) {
	if(err) {
		console.log('程序在 400 端口启动出现错误 错误信息: ', err);
	}
	else {
		console.log('系统启动成功');
	}
});

// 监听请求
app.get('/', function(req, res) {
	res.send('系统启动成功 端口 4000');
});
