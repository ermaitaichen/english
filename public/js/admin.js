;(function() {
	$(function() {
		// 创建教师账号
		$('.createTeacher').on('click', function() {
			$('.userForm').hide();
			$('.teacherForm').show();
		});
		// 创建学生账号
		$('.createStudent').on('click', function() {
			$('.userForm').hide();
			$('.studentForm').show();
		});
		// 创建管理员账号
		$('.createAdmin').on('click', function() {
			$('.userForm').hide();
			$('.adminForm').show();
		});

		var
			username = '',
			password = '',
			repPassword = '',
			sex = '',
			schoolYear = '',
			major = '';
		// 教师账号
		$('.teacherName').on('input', function() {
			username = $(this).val();
		});
		// 教师密码
		$('.teacherPassword').on('input', function() {
			password = $(this).val();
		});
		// 教师确认密码
		$('.teacherRepPassword').on('input', function() {
			repPassword = $(this).val();
		});
		// 教师性别
		$('.teacherSex').on('change', function() {
			sex = Number($(this).val());
		});

		// 学生账号
		$('.studentName').on('input', function() {
			username = $(this).val();
		});
		// 学生密码
		$('.studentPassword').on('input', function() {
			password = $(this).val();
		});
		// 学生确认密码
		$('.studentRepPassword').on('input', function() {
			repPassword = $(this).val();
		});
		// 学生年级
		$('.studentSchoolYear').on('input', function() {
			schoolYear = $(this).val();
		});
		// 学生专业
		$('.studentMajor').on('input', function() {
			major = $(this).val();
		});
		// 学生性别
		$('.studentSex').on('change', function() {
			sex = Number($(this).val());
		});

		// 管理员账号
		$('.adminName').on('input', function() {
			username = $(this).val();
		});
		// 管理员密码
		$('.adminPassword').on('input', function() {
			password = $(this).val();
		});
		// 管理员确认密码
		$('.adminRepPassword').on('input', function() {
			repPassword = $(this).val();
		});

		// 创建教师账号的提交
		$('.teacherSubmit').on('click', function() {
			$.ajax({
				url: '/admin/create',
				type: 'POST',
				data: {
					username: username,
					password: password,
					repPassword: repPassword,
					sex: sex,
					schoolYear: schoolYear,
					major: major,
					role: 2,
					pId: $('#pId').val()
				},
				success: function(msg) {
					$('.msg').text(msg.msg);
					if(msg.mark == true) {
						console.log('返回创建的用户信息: ', msg.obj);
						var str = '';
						str += '<li>'
							+ '<span>角色</span> '
							+ '<span>'+ msg.obj.role +'</span> '
							+ '<span>姓名</span> '
							+ '<span>'+ msg.obj.username +'</span> '
							+ '<span>性别</span> '
							+ '<span>'+ msg.obj.sex +'</span> '
						+'</li>';
						$('.teacherList').append(str);
					}
					else {
						$('.msg').text(msg.msg);
					}
				},
				error: function(msg) {
					console.log('ajax 请求错误');
				}
			});
		});

		// 创建学生账号的提交
		$('.studentSubmit').on('click', function() {
			$.ajax({
				url: '/admin/create',
				type: 'POST',
				data: {
					username: username,
					password: password,
					repPassword: repPassword,
					sex: sex,
					schoolYear: schoolYear,
					major: major,
					role: 3,
					pId: $('#pId').val()
				},
				success: function(msg) {
					$('.msg').text(msg.msg);
					console.log('创建学生账号成功: ', msg);
					if(msg.mark == true) {
						var str = '';
						str += '<li>'
							+ '<span>角色</span> '
							+ '<span>'+ msg.obj.role +'</span> '
							+ '<span>姓名</span> '
							+ '<span>'+ msg.obj.username +'</span> '
							+ '<span>性别</span> '
							+ '<span>'+ msg.obj.sex +'</span> '
							+ '<span>年级</span> '
							+ '<span>'+ msg.obj.schoolYear +'</span> '
							+ '<span>专业</span> '
							+ '<span>'+ msg.obj.major +'</span> '
						+'</li>';
						$('.studentList').append(str);
					}
				},
				error: function(msg) {
					console.log('创建学生账号失败: ', msg);
				}
			});
		});

		// 创建管理员账号的提交
		$('.adminSubmit').on('click', function() {
			$.ajax({
				url: '/admin/create',
				type: 'POST',
				data: {
					username: username,
					password: password,
					repPassword: repPassword,
					sex: sex,
					schoolYear: schoolYear,
					major: major,
					role: 1,
					pId: $('#pId').val()
				},
				success: function(msg) {
					$('.msg').text(msg.msg);
					if(msg.mark == true) {
						var str = '';
						str += '<li>'
							+ '<span>角色</span> '
							+ '<span>'+ msg.obj.role +'</span> '
							+ '<span>姓名</span> '
							+ '<span>'+ msg.obj.username +'</span> '
							+ '<span>性别</span> '
							+ '<span>'+ msg.obj.sex +'</span> '
						+'</li>';
						$('.adminList').append(str);
					}
				},
				error: function(msg) {}
			});
		});

	});
})();