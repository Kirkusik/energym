(function () {
	document.querySelector('.hero__arrow').addEventListener('click', () => {
		document.querySelector('.hero__info-title').classList.add('active');
		document.querySelector('.hero').classList.add('active');
		document.querySelector('.hero__arrow').classList.add('active');
		document.querySelectorAll('.hero__info-link').forEach(i => i.classList.add('active'));
	});
})();


