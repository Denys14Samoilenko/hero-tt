AOS.init({ once: true });

const toggle = document.getElementsByClassName('navbar-toggle')[0];
toggle.addEventListener('click', function (event) {
	event.preventDefault();
	let scrollMenu = toggle.classList.toggle('is-active');
	if (scrollMenu === true) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'visible';
	}
});
