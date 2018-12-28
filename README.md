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
3. 作业管理
   1. 正在进行的考试
   2. 已经结束的
   3. 未开始的
   4. 安排作业
4. 班级管理
   1. 数据导入
   2. 分组管理
   3. 数据统计

5. 后台管理
	1. 教师账号和学生账号的列表显示
	2. 增加账号
	3. 修改账号
	4. 删除账号
	5. 查看账号详情
		教师
			账号(工号)
			id
			性别
		学生
			账号(学号)
			id
			年级
			专业
		管理员
			账号
			id
	6. 密码修改
	7. 批量导入


注册和登录    账号和角色
数据库

注册时选择角色
可以在后台管理中开通账号

注册时需要判断 注册账号是否已经存在
角色 1 是管理员 2 是教师 3 是学生

每个注册账号都是唯一的
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
# 路由设计

	'/' 统一入口页

	'/login' 登录接口

	'/admin/:id' 管理员登录页

	'/teacher/:id' 教师登录页

	'/student/:id' 学生登录页