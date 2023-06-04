function fadeGridItems() {
	var gridItems = document.getElementsByTagName('div');
	var windowHeight = window.innerHeight;
  
	for (var i = 0; i < gridItems.length; i++) {
	  var position = gridItems[i].getBoundingClientRect().top;
	  if (position - windowHeight <= 0) {
		gridItems[i].classList.add('fade-in');
	  }
	}
  }
  
  function throttle(callback, limit) {
	var waiting = false;
	return function() {
	  if (!waiting) {
		callback.apply(this, arguments);
		waiting = true;
		setTimeout(function() {
		  waiting = false;
		}, limit);
	  }
	}
  }
  
  window.addEventListener('scroll', throttle(fadeGridItems, 200));
  
  fadeGridItems();