function updateWebviews() {
	var webview = document.querySelector('webview');
	webview.style.height = document.documentElement.clientHeight + 'px';
	webview.style.width = document.documentElement.clientWidth + 'px';
}

var webview = document.querySelector('#wv1');
webview.addEventListener('newwindow', function(e) {
  window.open(e.targetUrl);
});

onload = updateWebviews;
window.onresize = updateWebviews;
