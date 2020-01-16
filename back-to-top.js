var backToTopButton = document.querySelector('#back-to-top-btn');
window.addEventListener('scroll', onScroll);

function onScroll() {
	if (window.pageYOffset > 660) {
		if (!backToTopButton.classList.contains('btnEntrance')) {
			backToTopButton.classList.remove('btnExit');
			backToTopButton.classList.add('btnEntrance');
			backToTopButton.style.display = 'block';
			backToTopButton.style.backgroundColor='rgba(178, 201, 211, 0.7)';
		}
	} else {
		if (backToTopButton.classList.contains('btnEntrance')) {
			backToTopButton.classList.remove('btnEntrance');
			backToTopButton.classList.add('btnExit');			
			setTimeout(function() {
				backToTopButton.style.display = 'none';
			}, 250);
		}
	}
}

backToTopButton.addEventListener('click', backToTop);

function backToTop() {
	backToTopButton.style.backgroundColor='#b2c9d3';
	window.scrollTo({
	  top: 0,
	  behavior: 'smooth'
	});
}