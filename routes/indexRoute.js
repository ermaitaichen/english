const express = require('express');
const Users = require('../schemes/userScheme');
const router = express.Router();
const app = express();

router.get('/', function(req, res) {
	res.render('index');
});

router.post('/login', function(req, res) {
	console.log('进入都登录流程');
	var reqBody = req.body;
	var username = reqBody.username;
	var password = reqBody.password;
	var option = {
		username: username
	}
	console.log('查询条件: ', option);
	Users.find(option, function(err, obj) {
		if(err) {
			console.log('数据查询出错: ', err);
		}
		else {
			console.log('查询到的结果是: ', obj);
		}
	});
});

module.exports = router;