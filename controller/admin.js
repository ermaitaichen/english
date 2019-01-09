const Users = require('../schemas/userSchema');
exports.list = function(req, res) {
	// 去查询跟这个管理员有关的 教师账号 和 学生账号
	// 查询一下当前有的所有的 与该角色关联的 教师账号 管理员账号 以及学生账号
	Users.find({pId: req.params.id}, function(err, obj) {
		if(err) {
			res.render('./admin/admin', {pId: req.params.id});
		}
		else {
			console.log('admin line 10 查询到当前账号下的数据: ', obj);
			res.render('./admin/admin', {pId: req.params.id, users: obj});
		}
	});
};

exports.create = function(req, res) {
	// 如果存在 则返回
	// 如果不存在 则创建
	// 获取请求体
	var reqBody = req.body;
	// 获取角色
	var role = Number(reqBody.role);
	// 获取账号
	var username = reqBody.username;
	// 查询一下 是否存在
	Users.find({username: username}, function(err, obj) {
		console.log(obj, 'admin.js line 21');
		var userHandle = null;
		console.log(req.params);
		// 用户名不存在
		if(obj.length == 0) {
			if(role == 1) { // 管理员
				userHandle = new Users({
					username: username,
					passWord: reqBody.password,
					role: role,
					pId: reqBody.pId
				});
			}
			else if(role == 2) { // 教师
				userHandle = new Users({
					username: username,
					passWord: reqBody.password,
					sex: reqBody.sex,
					role: role,
					pId: reqBody.pId
				});
			}
			else if(role == 3) { // 学生
				userHandle = new Users({
					username: username,
					passWord: reqBody.password,
					sex: reqBody.sex,
					schoolYear: reqBody.schoolYear,
					major: reqBody.major,
					role: role,
					pId: reqBody.pId
				});
			}
			userHandle.save(function(err, obj) {
				if(err) {
					console.log('保存创建账户的信息错误 admin.js line 51');
					res.json({
						mark: false,
						msg: '保存失败'
					});
				}
				else {
					console.log('保存成功 admin.js line 54');
					res.json({
						mark: true,
						msg: '保存成功',
						obj: obj
					});
				}
			});
		}
		// 用户名存在
		else {
			res.json({
				mark: false,
				msg: '用户名已经存在'
			})
		}
	});
}
