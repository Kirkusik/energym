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

// cards.compareBtn.forEach((el) => {
//     el.addEventListener("click", showModal);
// });

const compareCards = document.querySelector(".compare-cards");
const firstCardImg = compareCards.querySelector('.compare-cards__link--first img');
const secondCardImg = compareCards.querySelector('.compare-cards__link--second img');


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



function changeCardImg(cardId) {
    cards.menu.addEventListener("click", function (event) {
        closeModal();

        // cards.table.forEach((el) => {
        //     el.classList.add("service-table__value--compare");
        // });

        let cardImgSrc;
        if (cardId === 1) {
            cardImgSrc = event.target.getAttribute("src");
            firstCardImg.setAttribute('src', cardImgSrc);
            console.log(firstCardImg);
        } else if (cardId === 2) {
            document.querySelector(".compare-cards__btn").classList.add("invisible");
            document.querySelector(".compare-cards__second-pic").classList.add("active");

            cards.secondItem.forEach((el) => {
                el.classList.remove("service-table__value--compare-second");
            });

            cardImgSrc = event.target.getAttribute("src");
            secondCardImg.setAttribute('src', cardImgSrc);
            console.log(secondCardImg);
        }

    });
}


compareCards.addEventListener("click", (e) => {
    showModal();
    if (e.target.closest('.compare-cards__link--first')) {
        changeCardImg(1);
    }
    if (e.target.closest('.compare-cards__link--second')) {
        changeCardImg(2);
    }
})
