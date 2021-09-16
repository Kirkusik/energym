const cards = {
  compareBtn: document.querySelectorAll(".compare-cards__link"),
  modal: document.querySelector(".cards-modal"),
  container: document.querySelector(".cards__container"),
  darkBcground: document.querySelector(".cards-modal__bg-dark"),
  closeBtn: document.querySelector(".cards-modal__close-btn"),
  body: document.querySelector("body"),
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

if (cards.closeBtn) {
  cards.closeBtn.addEventListener("click", () => {
    cards.modal.classList.remove("cards-modal--show");
    cards.container.classList.remove("cards__container--modal-open");
    cards.darkBcground.classList.remove("cards-modal__bg-dark--show");
    cards.body.classList.remove("show-modal");
  });
}
