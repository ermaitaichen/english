const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
	pId, // 属于哪个老师
	media, // 音视频的路径
	tab, // 选项卡的内容 应该是一个数组 数组中存放对象
	answer, // 答案
	score, // 得分
	time, // 作答时间 这个时间 指的是音视频播放完后的时间
	itemList, // 题干的内容 数组中存放对象
});

const Test = mongoose.model('Test', testSchema);

Test.statics = {
	add: function(option) {
		// 监测参数  option 必须是一个 object 类型
		if() {}
		Test.add(option);
	}
}

module.exports = Test;