(function () {
    const heroArrow = document.querySelector(".hero__arrow");
    const heroInfo = document.querySelector(".hero__info");
    const heroTitle = document.querySelector(".hero__info-title");
    const linksBox = document.querySelector(".hero__links-box");

    if (heroArrow) {
        heroArrow.addEventListener("click", () => {

            heroInfo.classList.remove("hero__info--position");
            heroInfo.classList.add("hero__info--active");
            heroTitle.classList.add("hero__info-title--active");
            linksBox.classList.add("hero__links-box--active");

            heroArrow.classList.add("hero__arrow--active");
        });
    }
})();
