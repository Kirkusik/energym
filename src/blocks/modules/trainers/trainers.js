const trainers = {
  selectArea: document.querySelector(".trainers__select"),
  trainersSelect: document.querySelector(".trainers__select-list"),
  trainersSelectItem: document.querySelectorAll(".trainers__select-item"),
  trainersSelectItemFirst: document.querySelector(
    ".trainers__select-item--first"
  ),
  trainersSelectFirst: document.querySelector(".trainers__select-text"),
  trainerCards: document.querySelectorAll(".trainers-card"),
};

if (trainers.trainersSelectItemFirst) {
  trainers.trainersSelectItemFirst.addEventListener("click", showTrainerSelect);
}

function showTrainerSelect(e) {
  trainers.trainersSelectItem.forEach((e) => {
    e.classList.toggle("trainers__select-item--opened");

    trainers.trainersSelect.classList.add("trainers__select-list--active");
  });
  trainers.selectArea.classList.toggle("trainers__select--opened-menu");
  trainers.trainersSelectItemFirst.classList.toggle("trainers__select-first");
}

if (trainers.trainersSelectItem) {
  trainers.trainersSelectItem.forEach((el) => {
    if (el.classList.contains("trainers__select-item--checked")) {
      el.classList.remove("trainers__select-item--checked");
    }
    el.addEventListener("click", (e) => {
      trainers.trainersSelectFirst.textContent = e.target.closest(
        ".trainers__select-item"
      ).textContent;
      e.target.classList.add("trainers__select-item--checked");
      trainers.trainersSelectItemFirst.setAttribute(
        "data-tab-name",
        e.target.closest(".trainers__select-item").getAttribute("data-tab-name")
      );

      trainers.trainersSelectFirst.setAttribute(
        "data-tab-name",
        e.target.closest(".trainers__select-item").getAttribute("data-tab-name")
      );

      let trainersTabName = e.target.getAttribute("data-tab-name");

      selectTabContent(trainersTabName);
      showTrainerSelect(e);

      trainers.trainersSelect.classList.remove("trainers__select-list--active");
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
