const express = require('express');
const pug = require('pug');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// 创建一个服务器
const app = express();

/*
	配置 body parser
*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 连接数据库 E:\data\db
mongoose.connect('mongodb://localhost/english', function(err) {
	if(err) {
		console.log('链接数据库err: ', err);
	}
	else {
		console.log('链接数据库成功');
	}
});

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

// 初始化路由
require('./routes/routes')(app);
