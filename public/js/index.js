(function() {
	$(function() {
		var userName = '';
		var passWord = '';

		$('.username').on('input', function() {
			userName = $(this).val();
		});

		$('.password').on('input', function() {
			passWord = $(this).val();
		});

		$('.submit').on('click', function() {
			$.ajax({
				type: 'POST',
				url: '/login',
				data: {
					username: userName,
					password: passWord
				},
				success: function(msg) {
					console.log('成功信息: ' ,msg);
					if(msg.role == 1) {
						// 页面跳转
						window.location.href = '/admin';
					}
					else if(msg.role == 2) {
						// 页面跳转
						window.location.href = '/teacher';
					}
					else if(msg.role == 3) {
						// 页面跳转
						window.location.href = '/student';
					}
				},
				error: function(msg) {
					console.log('错误信息: ' ,msg);
				}
			});
		});
	});

})();