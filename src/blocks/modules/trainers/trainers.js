const trainers = {
    trainersSelect: document.querySelector(".trainers__select-list"),
    trainersSelectItem: document.querySelectorAll(".trainers__select-item"),
    trainersSelectItemFirst: document.querySelector(
        ".trainers__select-item--first"
    ),
    trainersSelectFirst: document.querySelector(".trainers__select-text"),
    trainersSelectArrow: document.querySelector(".trainers__arrow"),
    trainersSelectArrowClose: document.querySelector(".trainers__arrow--close"),
    trainerCards: document.querySelectorAll(".trainers-card"),
};

if (trainers.trainersSelectItemFirst) {
    trainers.trainersSelectItemFirst.addEventListener(
        "click",
        showTrainerSelect
    );
}

function showTrainerSelect(e) {
    trainers.trainersSelectItem.forEach((e) => {
        e.classList.toggle("trainers__select-item--opened");
        trainers.trainersSelectItemFirst.classList.toggle(
            "trainers__select-item--hiden"
        );
        trainers.trainersSelect.classList.add("trainers__select-list--active");
    });
}

if (trainers.trainersSelectItem) {
    trainers.trainersSelectItem.forEach((el) => {
        el.addEventListener("click", (e) => {
            trainers.trainersSelectFirst.textContent = e.target.closest(
                ".trainers__select-item"
            ).textContent;

            trainers.trainersSelectItemFirst.setAttribute(
                "data-tab-name",
                e.target
                    .closest(".trainers__select-item")
                    .getAttribute("data-tab-name")
            );

            trainers.trainersSelectFirst.setAttribute(
                "data-tab-name",
                e.target
                    .closest(".trainers__select-item")
                    .getAttribute("data-tab-name")
            );

            trainers.trainersSelectArrow.setAttribute(
                "data-tab-name",
                e.target
                    .closest(".trainers__select-tab")
                    .getAttribute("data-tab-name")
            );

            trainers.trainersSelectArrowClose.setAttribute(
                "data-tab-name",
                e.target
                    .closest(".trainers__select-tab")
                    .getAttribute("data-tab-name")
            );

            let trainersTabName = e.target.getAttribute("data-tab-name");

            selectTabContent(trainersTabName);
            showTrainerSelect(e);
            trainers.trainersSelect.classList.remove(
                "trainers__select-list--active"
            );
        });
    });
}

function selectTabContent(trainersTabName) {
    trainers.trainerCards.forEach((item) => {
        item.classList.contains(trainersTabName)
            ? item.classList.add("trainers-card--active")
            : item.classList.remove("trainers-card--active");
    });
}
