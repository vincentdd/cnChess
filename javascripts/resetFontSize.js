$(function() {
		document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
	}
	/*IOS10禁止缩放*/
	document.documentElement.addEventListener('touchstart', function(event) {
		if (event.touches.length > 1) {
			event.preventDefault();
		}
	}, false);

	var lastTouchEnd = 0; document.documentElement.addEventListener('touchend', function(event) {
		var now = Date.now();
		if (now - lastTouchEnd <= 300) {
			event.preventDefault();
		}
		lastTouchEnd = now;
	}, false);
);