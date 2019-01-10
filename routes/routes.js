const path = require('path');
const Users = require('../schemas/userSchema');
const admin = require('../controller/admin');
const teacher = require('../controller/teacher');
const student = require('../controller/student');


module.exports = function(app , upload) {
	// 统一登录页
	app.get('/', function(req, res) {
		res.render('index');
	});
	// 登录请求
	app.post('/login', function(req, res) {
		var reqBody = req.body;
		var username = reqBody.username;
		var password = reqBody.password;
		var option = {
			username: username
		}
		console.log('查询条件: ', option);
		// 根据不同的用户返回不同的页面 admin teacher 或者 student
		Users.find(option, function(err, obj) {
			if(err) {
				console.log('routes line 21 数据查询出错: ', err);
			}
			else {
				console.log('routes line 24 查询到的结果是: ', obj);
				// 判断角色
				// 这里的跳转是不是应该使用重定向呢
				// 管理员
				if(obj[0].role == 1) {
					var option = {
						uId: obj[0]._id,
						role: 1
					};
					if(req.cookies.uId) {
						console.log('cookies 存在');
					}
					else {
						res.cookie('uId', obj[0]._id);
					}
					res.json(option);
				}
				//k 教师
				else if(obj[0].role == 2) {
					var option = {
						uId: obj[0]._id,
						role: 2
					};
					if(req.cookies.uId) {
						console.log('cookies 存在');
					}
					else {
						res.cookie('uId', obj[0]._id);
					}
					res.json(option);
				}
				// 学生
				else if(obj[0].role == 3) {
					var option = {
						uId: obj[0]._id,
						role: 3
					};
					if(req.cookies.uId) {
						console.log('cookies 存在');
					}
					else {
						res.cookie('uId', obj[0]._id);
					}
					res.json(option);
				}
			}
		});
	});

	/*每一个请求都对应一个 controller*/
	// admin 请求
	app.get('/admin', admin.list);
	// admin 创建账户
	app.post('/admin/create', admin.create);
	// 教师请求
	app.get('/teacher', teacher.teacher);
	// 学生请求
	app.get('/student', student.student);
	// 资源管理 图片上传 先做单图片上传 然后在做多图片上传
	// 一个上传功能 然后 上传完成后预览
	app.get('/resource/img', teacher.resourceImg);
	// 上传图片 teacher.uploadImg
	app.post('/teacher/upload/img', upload.single('upload_img'), teacher.uploadImg);
}
