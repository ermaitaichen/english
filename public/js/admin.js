;(function() {
	$(function() {
		$('.createTeacher').on('click', function() {
			$('.userForm').hide();
			$('.teacherForm').show();
		});

		$('.createStudent').on('click', function() {
			$('.userForm').hide();
			$('.studentForm').show();
		});

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

		$('.teacherName').on('input', function() {
			username = $(this).val();
		});

		$('.teacherPassword').on('input', function() {
			password = $(this).val();
		});

		$('.teacherRepPassword').on('input', function() {
			repPassword = $(this).val();
		});

		$('.teacherSex').on('change', function() {
			sex = Number($(this).val());
		});

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
					if(msg.mark == true) {
						$('.msg').text(msg.msg);
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
				error: function(msg) {}
			});
		});

		$('.studentSubmit').on('click', function() {
			$.ajax({
				url: '',
				type: 'POST',
				data: {},
				success: function(msg) {},
				error: function(msg) {}
			});
		});

		$('.adminSubmit').on('click', function() {
			$.ajax({
				url: '',
				type: 'POST',
				data: {},
				success: function(msg) {},
				error: function(msg) {}
			});
		});

	});
})();