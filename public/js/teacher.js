;(function() {
	$(function() {
		// 给 container 设置高度
		var
			h = $(window).height();
		$('#container').height(h);

		// 读取本地的 sessionStorage
		var resourceOnoff = sessionStorage.getItem('resource');
		if(resourceOnoff == 'true') {
			$('.resource_children').show();
		}
		else {
			$('.resource_children').hide();
		}

		$('#resource_manager').on('click', function() {
			if($('.resource_children').is(':hidden')) {
				$('.resource_children').show();
				// 通过 本地存储 sessionstorage 来存储左侧开关的控制变量
				sessionStorage.setItem('resource', 'true');
			}
			else {
				$('.resource_children').hide();
				// 通过 本地存储 sessionstorage 来存储左侧开关的控制变量
				sessionStorage.setItem('resource', 'false');
			}
		});

	});
})();