var clickBtn = document.getElementById('menu-button');
var subMenu = document.getElementById('dropdown-menu');

clickBtn.addEventListener('click', showOnMenu);

function showOnMenu() {
	if (subMenu.style.height === '200px') {
		subMenu.style.height = '0';		
	} else {
		subMenu.style.height = '200px';
	}
}