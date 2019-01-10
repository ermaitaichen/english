const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 定义 上传 img 的 schema
const imgSchema = new Schema({
	pId: String,
	fieldname: String,
	originalname: String,
	encoding: String,
	mimetype: String,
	destination: String,
	filename: String,
	path: String,
	size: String,
	fileType: String,
	createAt: {
		type: Date,
		default: Date.now()
	}
});

const Imgs = mongoose.model('Imgs', imgSchema);

module.exports = Imgs;