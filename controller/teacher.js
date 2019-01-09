const Users = require('../schemas/userSchema');
// 教师首页
exports.teacher = function(req, res) {
	res.render('./teacher/teacher');
};

// 资源管理 图片
exports.resourceImg = function(req, res) {
	res.render('./teacher/resource_img');
}

// 上传图片
exports.uploadImg = function(req, res) {
	console.log('上传被调用');
	console.log('upload: ', upload);
	upload.multer((req, res) => {
 		console.log(req.file, '接收到的文件');
 	});
}