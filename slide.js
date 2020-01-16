var slides = document.getElementsByClassName('item');
var dot1 = document.getElementById('dot-1');
var dot2 = document.getElementById('dot-2');
var dot3 = document.getElementById('dot-3');
dot1.addEventListener('click', changeSlide1);
dot2.addEventListener('click', changeSlide2);
dot3.addEventListener('click', changeSlide3);

setInterval(changeSlide2, 7000);
setInterval(changeSlide3, 14000);
setInterval(changeSlide1, 28000);	

function changeSlide1() {
	for (var slide of slides ) {
		slide.style.transform = 'translateX(0)';
	}
	dot1.style.background = '#92b2c0';
	dot2.style.background = 'rgba(225, 225, 225, .5)';
	dot3.style.background = 'rgba(225, 225, 225, .5)';
}
function changeSlide2() {
	for (var slide of slides ) {
		slide.style.transform = 'translateX(-100%)';
	}
	dot2.style.background = '#92b2c0';
	dot3.style.background = 'rgba(225, 225, 225, .5)';
	dot1.style.background = 'rgba(225, 225, 225, .5)';
}
function changeSlide3() {
	for (var slide of slides ) {
		slide.style.transform = 'translateX(-200%)';
	}
	dot3.style.background = '#92b2c0';
	dot2.style.background = 'rgba(225, 225, 225, .5)';
	dot1.style.background = 'rgba(225, 225, 225, .5)';
}
