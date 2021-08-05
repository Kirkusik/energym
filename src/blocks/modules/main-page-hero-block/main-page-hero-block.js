(function () {
    let heroArrow = document.querySelector(".hero__arrow");

    if (heroArrow) {
        heroArrow.addEventListener("click", () => {
            document
                .querySelector(".hero__info")
                .classList.remove("hero__info--position");
            document.querySelector(".hero__info").classList.add("hero__info--active");
            document
                .querySelector(".hero__info-title")
                .classList.add("hero__info-title--active");
            document
                .querySelector(".hero__links-box")
                .classList.add("hero__links-box--active");
            document
                .querySelector(".hero__arrow")
                .classList.add("hero__arrow--active");
        });
    }
})();
