const path = require('path');
const express = require('express');
const pug = require('pug');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');

// 创建一个服务器
const app = express();
// const upload = multer({dest: path.join(__dirname,'uploads/')});
// 配置 multer模块
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		// cb(null, 'F:\\workspace\\english\\uploads');
		cb(null, path.join(__dirname,'uploads/'));
	},
	filename: function(req, file, cb) {
		console.log('file: ', file);
		// 在这里判断一下 是什么媒体类型的文件
		// 根据不同的媒体类型 做不同的处理
		cb(null, file.fieldname + '.ogv');
	}
})

const upload = multer({
	storage: storage
});
/*
	配置 multer 模块
*/


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
app.use('/static', express.static('public'));
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

// app.get('/upload', function(req, res) {
// 	res.render('upload');
// });

// // 接收上传的文件
// app.post('/upload1', upload.single('avatar'), function(req, res) {
// 	// upload.multer((req, res) => {
// 	// 	console.log(req.file, '接收到的文件');
// 	// });
// 	console.log('进入到上传 \n');
// 	console.log('req.file: ', req.file);
// 	// 这里将图片的路径返回到前端
// 	res.json({});
// });
