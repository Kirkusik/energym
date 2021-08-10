"use strict";

const menu = {
    navigation: document.querySelector(".menu-wrapper"),
    button: document.querySelector(".square-btn"),
    burgerButton: document.querySelector(".menu__burger-button"),
};

const title = {
    links: [...document.querySelectorAll(".menu__link")],
    activeClass: "menu__link--active",
    subListsActiveClass: "submenu__list--active",
};

const subtitle = {
    links: [...document.querySelectorAll(".submenu__link")],
    activeClass: "submenu__link--active",
    subListsActiveClass: "submenu__list-first--active",
    subListsClass: "submenu__list-first",
    activeArrowClass: "submenu__link--pseudo-active",
};

const location = {
    btn: document.getElementById("location__btn"),
    box: document.getElementById("location"),
    activeClass: "location--active",
    list: document.querySelector(".location__list"),
    header: document.querySelectorAll(".location__header"),
    items: document.querySelectorAll("location__item"),
    defaultItem: document.querySelector(".location__default-item"),
};

const search = {
    btn: document.getElementById("search__btn"),
    form: document.getElementById("search"),
    activeClass: "search__input--active",
    activeBtnClass: "search__btn--active",
};
//---------to show/hide menu links on tablet and mb ---------

//menu
function addLinkClass(link) {
    link.classList.add(title.activeClass);
    link.nextElementSibling.classList.add(title.subListsActiveClass);
}

function removeLinkClass(link, activeArrow, activeSubItem, activeSubLists) {
    link.classList.remove(title.activeClass);
    link.nextElementSibling.classList.remove(title.subListsActiveClass);
    if (activeArrow) {
        activeArrow.classList.remove(subtitle.activeArrowClass);
    }
    if (activeSubItem) {
        activeSubItem.classList.remove(subtitle.activeClass);
    }
    activeSubLists.forEach((list) => {
        list.classList.remove(subtitle.subListsActiveClass);
    });
}

function onMenuLinkClick(activeLink) {
    title.links.forEach((link) => {
        if (
            link === activeLink &&
            //close link in case second click
            !link.classList.contains(title.activeClass)
        ) {
            addLinkClass(link);
        } else {
            removeLinkClass(
                link,
                document.querySelector(".submenu__link--pseudo-active"),
                document.querySelector(".submenu__link--active"),
                document.querySelectorAll(".submenu__list-first--active")
            );
        }
    });
}
//submenu
function addSublinkClass(link) {
    link.classList.add(subtitle.activeClass);
    link.classList.add(subtitle.activeArrowClass);
    link.nextElementSibling.classList.add(subtitle.subListsActiveClass);
}

function removeSublinkClass(link, activeSubLists) {
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

function onMenuSublinkClick(activeSublink) {
    //set active class only if subItem contains child items
    if (!activeSublink.nextElementSibling) {
        return;
    }
    subtitle.links.forEach((link) => {
        if (
            link === activeSublink &&
            !link.classList.contains(subtitle.activeClass)
        ) {
            addSublinkClass(link);
        } else {
            removeSublinkClass(
                link,
                document.querySelectorAll(".submenu__list-first--active")
            );
        }
    });
}

function onMenuClick(e) {
    const tabletDesk = window.matchMedia("(max-width: 999px)");
    const activeItem = e.target.closest(".menu__link");
    const activeSubItem = e.target.closest(".submenu__link");

    //on item click
    if (activeItem && tabletDesk.matches) {
        onMenuLinkClick(activeItem);
    }
    // on subItem click
    if (activeSubItem && tabletDesk.matches) {
        onMenuSublinkClick(activeSubItem);
    }

    return;
}

//---------to show/hide menu---------
function toggleMenu(e) {
    e.preventDefault();
    menu.navigation.classList.toggle("menu-wrapper--active");
}

//---------to show/hide location and search forms on mb and tablet---------
function onFormClick(element, activeClass, prevEl, prevElClass) {
    const tabletDesk = window.matchMedia("(max-width: 999px)");
    if (tabletDesk.matches) {
        if (prevEl.classList.contains(prevElClass)) {
            prevEl.classList.remove(prevElClass);
        }
        element.classList.toggle(activeClass);
    }
}
//---------to show/hide location list on click---------
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
//---------remove borders in search input---------

menu.burgerButton.addEventListener("click", (e) => toggleMenu(e));
menu.button.addEventListener("click", (e) => toggleMenu(e));
menu.navigation.addEventListener("click", onMenuClick);
location.btn.addEventListener("click", () =>
    onFormClick(
        location.box,
        location.activeClass,
        search.form,
        search.activeClass
    )
);
search.btn.addEventListener("click", () =>
    onFormClick(
        search.form,
        search.activeClass,
        location.box,
        location.activeClass
    )
);
location.list.addEventListener("click", onLocationItemClick);
