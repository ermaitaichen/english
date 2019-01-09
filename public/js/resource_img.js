;(function() {
	$(function() {
		$('.upload').on('click', function() {
			// 触发一下
			$('input[name="upload_img"]').trigger('click');
		});
		$('input[name="upload_img"]').on('change', function() {
		console.log('change');
		$('.upload_img').trigger('click');
		});
		$('.upload_img').on('click', function() {
			alert(456);
		});
	});
})();