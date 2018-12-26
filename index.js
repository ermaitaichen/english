const express = require('express');
const pug = require('pug');
// 创建一个服务器
const app = express();


// 监听请求
app.get('/', function(req, res) {
	res.render('admin');
});






// 连接数据库

// 静态资源托管
app.use('/static', express.static('public'))
/*
	设置模板引擎
*/
// 注册模板引擎
app.set('view engine', 'pug');
// 设置模板的访问路径
app.set('views', './views');

// 监听端口
app.listen(4000, function(err) {
	if(err) {
		console.log('程序在 400 端口启动出现错误 错误信息: ', err);
	}
	else {
		console.log('系统启动成功');
	}
});
