const Users = require('../schemas/userSchema');
const admin = require('../controller/admin');

module.exports = function(app) {
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
		Users.find(option, function(err, obj) {
			if(err) {
				console.log('routes line 21 数据查询出错: ', err);
			}
			else {
				console.log('routes line 24 查询到的结果是: ', obj);
				// 判断角色
				// 管理员
				if(obj[0].role == 1) {
					var option = {
						uId: obj[0]._id
					};
					res.json(option);
				}
				//k 教师
				else if(obj[0].role == 2) {

				}
				// 学生
				else if(obj[0].role == 3) {

				}
			}
		});
	});

	/*每一个请求都对应一个 controller*/
	// admin 请求
	app.get('/admin/:id', admin.list);
	// admin 创建账户
	app.post('/admin/create', admin.create);
	// 教师请求
	app.get('/teacher/:id', function(req, res) {});
	// 学生请求
	app.get('/student/:id', function(req, res) {});
}
