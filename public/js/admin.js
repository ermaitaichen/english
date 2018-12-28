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
			console.log($(this).val());
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
					role: 1
				},
				success: function(msg) {
					console.log('创建账户成功: ', msg);
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