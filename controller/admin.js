const express = require('express');
const Users = require('../schemas/userSchema');


exports.list = function(req, res) {
	// 去查询跟这个管理员有关的 教师账号 和 学生账号
	res.render('admin');
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
		if(obj.length == 0) {
			if(role == 1) { // 管理员
				userHandle = new Users({
					username: username,
					passWord: reqBody.password,
					role: role
				});
			}
			else if(role == 2) { // 教师
				userHandle = new Users({
					username: username,
					passWord: reqBody.password,
					sex: reqBody.sex,
					role: role
				});
			}
			else if(role == 3) { // 学生
				userHandle = new Users({
					username: username,
					passWord: reqBody.password,
					sex: reqBody.sex,
					schoolYear: reqBody.schoolYear,
					major: reqBody.major,
					role: role
				});
			}
			userHandle.save(function(err) {
				if(err) {
					console.log('保存创建账户的信息错误 admin.js line 51');
				}
				else {
					console.log('保存成功 admin.js line 54');
					res.json({
						mark: true,
						msg: '保存成功'
					});
				}
			});
		}
		else {
			res.json({
				mark: false,
				msg: '用户名已经存在'
			})
		}
	});
}