# git使用的基本流程
   1. 首先在本地创建仓库 git init
   2. 然后再远程创建仓库
   3. 为本地仓库添加远程仓库 git remote add origin 远程仓库的地址
   4. 提交文件 git add 【文件名】 git commit -m "提交的描述"
   5. 修改文件 git add 【文件名】git commit -m "提交描述"
   6. 删除文件 git rm 【文件名】rm 【文件名】 git commit -m "提交描述"
   7. 将代码提交到远程仓库 git push origin master

# 需求
1. 资源管理
	1. 富媒体资源库
		1. 图库
		2. 视频库
		3. 音频库
	2. 考试资源
	3. 试题库
	4. 试题模板管理
	5. 试卷库
2. 考试管理
   1. 正在进行的考试
   2. 已经结束的
   3. 未开始的
   4. 安排考试
3.作业管理
   1. 正在进行的考试
   2. 已经结束的
   3. 未开始的
   4. 安排作业
4. 班级管理
   1. 数据导入
   2. 分组管理
   3. 数据统计


注册和登录    账号和角色
数据库

注册时选择角色
可以在后台管理中开通账号
# 数据库
1. mongodb 启动命令

	mongod --dbpath [db目录]
2. mongodb 基本命令

	mongod 进入命令行模式

	show dbs 显示数据库

	show tables 显示数据库中的集合

	use [name] 创建数据库 如果数据库存在则切换当当前的数据库

	db.dropDatabase() 删除当前的数据库

	db.[collectionName].drop() 删除集合

	db.createCollection([collectionName]) 创建集合

	数据库 集合 文档

	文档是插入的