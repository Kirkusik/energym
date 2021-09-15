const trainers = {
  trainersSelect: document.querySelector(".trainers__select-list"),
  trainersSelectItem: document.querySelectorAll(".trainers__select-item"),
  trainersSelectFirst: document.querySelector(".trainers__select-text"),
  trainersSelectArrow: document.querySelector(".trainers__arrow"),
  trainerCards: document.querySelectorAll(".trainers-card"),
};

if (trainers.trainersSelect) {
  trainers.trainersSelect.addEventListener("click", showTrainerSelect);
}

function showTrainerSelect(e) {
  trainers.trainersSelectItem.forEach((e) => {
    e.classList.toggle("trainers__select-item--opened");
    trainers.trainersSelectFirst
      .closest(".trainers__select-item--first")
      .classList.toggle("trainers__select-item--hiden");
  });

  trainers.trainersSelectFirst.textContent = e.target.closest(
    ".trainers__select-item"
  ).textContent;

  e.target.setAttribute(
    "data-tab-name",
    e.target.closest(".trainers__select-item").getAttribute("data-tab-name")
  );

  trainers.trainersSelectFirst
    .closest(".trainers__select-item")
    .setAttribute(
      "data-tab-name",
      e.target.closest(".trainers__select-item").getAttribute("data-tab-name")
    );

  trainers.trainersSelectFirst.setAttribute(
    "data-tab-name",
    e.target.closest(".trainers__select-item").getAttribute("data-tab-name")
  );
  trainers.trainersSelectArrow.setAttribute(
    "data-tab-name",
    e.target.closest(".trainers__select-item").getAttribute("data-tab-name")
  );

  trainers.trainersSelectArrow.classList.toggle("trainers__arrow--close");

  let trainersTabName = e.target.getAttribute(`data-tab-name`);

  selectTabContent(trainersTabName);
}

function selectTabContent(trainersTabName) {
  trainers.trainerCards.forEach((item) => {
    item.classList.contains(trainersTabName)
      ? item.classList.add(`trainers-card--active`)
      : item.classList.remove(`trainers-card--active`);
  });
}
