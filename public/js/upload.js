;(function() {
	// DOM 加载
	$(function() {
		$('#imgForm').on('change', function() {
			var imgData = $('#imgForm')[0].files[0];
			console.log('imgData: ', imgData);
			var formdata = new FormData();
			formdata.append('name1', imgData);
			// 拿到数据 通过 ajax 请求
			$.ajax({
				type: 'POST',
				url: '/upload1',
				data: formdata,
				processData:false,
				contentType:false,
				dataType: 'multipart/form-data',
				success: function(msg) {
					console.log('成功后返回的值', msg);
				},
				error: function(err) {
					console.log('错误信息: ', err);
				}
			});
		});
	});
})()