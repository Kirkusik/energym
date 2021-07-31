(function () {
    document.querySelector('.hero__arrow').addEventListener('click', () => {
        document.querySelector('.hero__info-title').classList.add('hero__info-title--active');
        document.querySelector('.hero__links-box').classList.add('hero__links-box--active');
        document.querySelector('.hero__arrow').classList.add('hero__arrow--active');
    });
})();
