const cards = {
  compareBtn: document.querySelectorAll(".compare-cards__link"),
  modal: document.querySelector(".cards-modal"),
  container: document.querySelector(".cards__container"),
  darkBcground: document.querySelector(".cards-modal__bg-dark"),
  closeBtn: document.querySelector(".cards-modal__close-btn"),
  body: document.querySelector("body"),
  menu: document.querySelector(".cards-modal__cards-wrapper"),
  table: document.querySelectorAll(".service-table__value"),
  secondItem: document.querySelectorAll(
    ".service-table__value--compare-second"
  ),
};

cards.compareBtn.forEach((el) => {
  el.addEventListener("click", showModal);
});

function showModal() {
  cards.modal.classList.add("cards-modal--show");
  cards.container.classList.add("cards__container--modal-open");
  cards.darkBcground.classList.add("cards-modal__bg-dark--show");
  cards.body.classList.add("show-modal");
}

function closeModal() {
  cards.modal.classList.remove("cards-modal--show");
  cards.container.classList.remove("cards__container--modal-open");
  cards.darkBcground.classList.remove("cards-modal__bg-dark--show");
  cards.body.classList.remove("show-modal");
}

if (cards.closeBtn) {
  cards.closeBtn.addEventListener("click", closeModal);
}

cards.menu.addEventListener("click", function (event) {
  closeModal();
  cards.secondItem.forEach((el) => {
    el.classList.remove("service-table__value--compare-second");
  });
  cards.table.forEach((el) => {
    el.classList.add("service-table__value--compare");
  });

document.querySelector(".compare-cards__link--btn").classList.add("invisible");

  document
    .querySelector(".compare-cards")
    .children[+event.target.getAttribute("data-tab-title")].classList.add(
      "active"
    );
  // console.dir(event.target);
  // console.log(event.target.src);
  console.log(event.target.getAttribute("data-tab-title"));
  console.log(
    document.querySelector(".compare-cards").children[
      +event.target.getAttribute("data-tab-title")
    ]
  );
});
