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

const compareCards = document.querySelector(".compare-cards");
const firstCardImg = compareCards.querySelector('.compare-cards__link--first img');
const secondCardImg = compareCards.querySelector('.compare-cards__link--second img');
let cardId;

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
    if (event.target.closest(".cards-modal__card-img")) {
        closeModal();
        changeCardImg(cardId, event)
    }
});

function changeCardImg(cardId, event) {
    if (cardId === 1) {
        firstCardImg.setAttribute('src', event.target.getAttribute("src"));
    } else if (cardId === 2) {
        document.querySelector(".compare-cards__btn").classList.add("invisible");
        document.querySelector(".compare-cards__second-pic").classList.add("active");

        secondCardImg.setAttribute('src', event.target.getAttribute("src"));

        cards.secondItem.forEach((el) => {
            el.classList.remove("service-table__value--compare-second");
        });
    }
}

compareCards.addEventListener("click", (e) => {
    showModal();
    if (e.target.closest('.compare-cards__link--first')) {
        cardId = 1;
    }
    if (e.target.closest('.compare-cards__link--second')) {
        cardId = 2;
    }
})
