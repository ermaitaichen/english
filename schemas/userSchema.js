const mongoose = require('mongoose');

/*
	0 代表没有这个属性
	1或2代表有
*/
// 定义 teacher schema
const userSchema = new mongoose.Schema({
	username: String,
	password: String,
	sex: {
		type: Number,
		default: 0
	},
	schoolYear: {
		type: String,
		default: '0'
	},
	major: {
		type: String,
		default: '0'
	},
	role: {
		type: String,
		default: '0'
	},
	pId: String
});


// 初始化 scheme
const Users = mongoose.model('Users', userSchema);

module.exports = Users;