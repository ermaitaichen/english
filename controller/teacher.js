const Users = require('../schemas/userSchema');
const Imgs = require('../schemas/imgSchema');
// 教师首页
exports.teacher = function(req, res) {
	res.render('./teacher/teacher');
};

// 资源管理 图片
exports.resourceImg = function(req, res) {
	var pId = req.cookies.uId;
	// 查询一下所有的图片
	Imgs.find({pId: pId, fileType: 'img'}, function(err, obj) {
		if(err) {
			console.log('查询教师关联的图片出现问题');
			console.log('错误代码是: ', err);
		}
		else {
			console.log('拿到所有的图片数据: ', obj);
			res.render('./teacher/resource_img', {
				imgArr: obj
			});
		}
	});
}

// 上传图片
exports.uploadImg = function(req, res) {
	var pId = req.cookies.uId;
	var fileType = req.file.originalname.split('.');
		fileType = fileType[fileType.length - 1];
	if(fileType == 'jpg' || fileType == 'png' || fileType == 'gif') {
		fileType = 'img';
	}
	var imgHandle = new Imgs({
		pId: pId,
		fieldname: req.file.fieldname,
		originalname: req.file.originalname,
		encoding: req.file.encoding,
		mimetype: req.file.mimetype,
		destination: req.file.destination,
		filename: req.file.filename,
		path: req.file.path,
		size: req.file.size,
		fileType: fileType
	});
	imgHandle.save(function(err, obj) {
		if(err) {
			console.log('保存上传的图片错误');
			console.log('错误代码是: ', err);
			// 这里应该返回一个错误信息的页面
		}
		else {
			console.log('保存图片成功');
			console.log('保存的图片的信息是: ', obj);
			// 将图片的地址返回去
			res.redirect('/resource/img');
		}
	});
}