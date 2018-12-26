const mongoose = require('mongoose');

// 定义 scheme
const userScheme = new mongoose.Schema({
	username: String,
	password: String,
	role: Number
});

// 初始化 scheme
const User = mongoose.model('Users', userScheme);

module.exports = User;