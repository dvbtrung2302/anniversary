AOS.init();

window.addEventListener('scroll', onScrollE);
var about = document.getElementById('scroll-about');
var loveline = document.getElementById('scroll-loveline');
var moments = document.getElementById('scroll-moments');
var momentsHeight = document.getElementById('moments-height').offsetTop;
var aboutHeight = document.getElementById('about-height').offsetTop;
var lovelineHeight = document.getElementById('loveline-height').offsetTop;
function onScrollE() {
	if (window.pageYOffset <  aboutHeight) {
		about.classList.remove('scroll-active');
		loveline.classList.remove('scroll-active');
		moments.classList.remove('scroll-active');
	}
	if (window.pageYOffset  > aboutHeight - 500 && window.pageYOffset < lovelineHeight - 500) {
		about.classList.add('scroll-active');
		loveline.classList.remove('scroll-active');
		moments.classList.remove('scroll-active');
	} else if (window.pageYOffset  > lovelineHeight - 500 && window.pageYOffset < momentsHeight - 500) {
		loveline.classList.add('scroll-active');
		about.classList.remove('scroll-active');
		moments.classList.remove('scroll-active');
	} else if (window.pageYOffset  > momentsHeight - 500) {
		moments.classList.add('scroll-active');
		loveline.classList.remove('scroll-active');
		about.classList.remove('scroll-active');
	}
}

