const burger = {
    menu: document.querySelector(".burger-menu"),
    button: document.querySelector(".burger-menu__button"),
};

const menu = {
    navigation: document.querySelector(".navigation"),
    box: document.querySelector(".menu"),
    button: document.querySelector(".square-btn"),
};

const title = {
    links: [...document.querySelectorAll(".menu__tab-link")],
    activeClass: "menu__tab-link--active",
    subListsActiveClass: "menu__items--active",
};

const subtitle = {
    links: [...document.querySelectorAll(".menu__item-link")],
    activeClass: "menu__item-link--active",
    subListsActiveClass: "menu__sub-items--active",
    subListsClass: "menu__sub-items",
    activeArrowClass: "menu__sub-title-link--active",
};

const location = {
    btn: document.getElementById("location__btn"),
    box: document.getElementById("location"),
    activeClass: "location--active",
    list: document.querySelector(".location__list"),
    header: document.querySelectorAll(".location__header"),
    items: document.querySelectorAll("location__item"),
    defaultItem: document.querySelector(".location__default-item"),
    activeBtnClass: "location__btn-pseudo--active",
    pseudoBtn: document.getElementById("location__btn-pseudo"),
};

const search = {
    btn: document.getElementById("search__btn"),
    input: document.getElementById("search"),
    activeClass: "search__input--active",
    activeBtnClass: "search__btn--active",
};
//---------to show/hide menu links on tablet/mb ---------
function onMenuLinkClick(activeLink) {
    title.links.forEach((link) => {
        if (
            link === activeLink &&
            //close link in case second click
            !link.classList.contains(title.activeClass)
        ) {
            link.classList.add(title.activeClass);
            link.nextElementSibling.classList.add(title.subListsActiveClass);
        } else {
            link.classList.remove(title.activeClass);
            link.nextElementSibling.classList.remove(title.subListsActiveClass);
        }
    });
}

function onMenuSublinkClick(activeSublink) {
    const activeSubLists = document.querySelectorAll(
        ".menu__sub-items--active"
    );
    subtitle.links.forEach((link) => {
        if (
            link === activeSublink &&
            //set active class only if subItem contains child items
            activeSublink.nextElementSibling.classList.contains(
                subtitle.subListsClass
            ) &&
            //close link in case second click
            !link.classList.contains(subtitle.activeClass)
        ) {
            link.classList.add(subtitle.activeClass);
            link.classList.add(subtitle.activeArrowClass);
            link.nextElementSibling.classList.add(subtitle.subListsActiveClass);
        } else {
            link.classList.remove(subtitle.activeClass);
            link.classList.remove(subtitle.activeArrowClass);
            activeSubLists.forEach((list) => {
                if (
                    //to prevent to hide list in active sublinks
                    !list.previousElementSibling.classList.contains(
                        subtitle.activeClass
                    )
                ) {
                    list.classList.remove(subtitle.subListsActiveClass);
                }
            });
        }
    });
}

function onMenuClick(e) {
    const tabletDesk = window.matchMedia("(max-width: 999px)");
    activeItem = e.target.closest(".menu__tab-link");
    activeSubItem = e.target.closest(".menu__item-link");
    //on item click
    if (activeItem && tabletDesk.matches) {
        onMenuLinkClick(activeItem);
    }
    // on subItem click
    else if (activeSubItem && tabletDesk.matches) {
        onMenuSublinkClick(activeSubItem);
    } else {
        return;
    }
}

//---------to show/hide menu---------
function toggleMenu(e) {
    e.preventDefault();
    menu.navigation.classList.toggle("navigation--active");
    menu.box.classList.toggle("menu--active");
    burger.menu.classList.toggle("burger-menu--active");
}

//---------to show/hide location and search forms on mb and tablet---------
function onLocationFormBtnClick(
    element,
    activeClass,
    acctiveButton,
    activeBtnClass,
    prevEl,
    prevElClass
) {
    const tabletDesk = window.matchMedia("(max-width: 999px)");
    if (tabletDesk.matches) {
        if (prevEl.classList.contains(prevElClass)) {
            prevEl.classList.remove(prevElClass);
        }
        element.classList.toggle(activeClass);
        acctiveButton.classList.toggle(activeBtnClass);
    }
}

function onSearchFormClick(
    element,
    activeClass,
    pseudoBtn,
    pseudoBtnClass,
    prevEl,
    prevElClass
) {
    const tabletDesk = window.matchMedia("(max-width: 999px)");
    if (tabletDesk.matches) {
        if (prevEl.classList.contains(prevElClass)) {
            prevEl.classList.remove(prevElClass);
        }
        if (pseudoBtn.classList.contains(pseudoBtnClass)) {
            pseudoBtn.classList.remove(pseudoBtnClass);
        }
        element.classList.toggle(activeClass);
    }
}
//---------to show/hide location list on desktop---------
(function selectList() {
    location.header.forEach((el) => {
        el.addEventListener("click", function () {
            this.parentElement.classList.toggle("location--selected");
        });
    });
})();

//---------select location item text---------
function onLocationItemClick(e) {
    location.defaultItem.innerText =
        e.target.closest(".location__item").innerText;
}

burger.button.addEventListener("click", (e) => toggleMenu(e));
menu.button.addEventListener("click", (e) => toggleMenu(e));
menu.navigation.addEventListener("click", onMenuClick);
location.btn.addEventListener("click", () =>
    onLocationFormBtnClick(
        location.box,
        location.activeClass,
        location.pseudoBtn,
        location.activeBtnClass,
        search.input,
        search.activeClass
    )
);
search.btn.addEventListener("click", () =>
    onSearchFormClick(
        search.input,
        search.activeClass,
        location.pseudoBtn,
        location.activeBtnClass,
        location.box,
        location.activeClass
    )
);
location.list.addEventListener("click", onLocationItemClick);
