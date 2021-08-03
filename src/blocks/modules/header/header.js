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
    list: document.getElementById("location"),
    activeClass: "location--active",
};

const search = {
    btn: document.getElementById("search__btn"),
    input: document.getElementById("search"),
    activeClass: "search__input--active",
};
//---------to show/hide menu links---------
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
                    //to prevent hide list in active sublinks
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
    activeItem = e.target.closest(".menu__tab-link");
    activeSubItem = e.target.closest(".menu__item-link");
    //on item click
    if (activeItem) {
        onMenuLinkClick(activeItem);
    }
    // on subItem click
    else if (activeSubItem) {
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
    burger.menu.classList.toggle("active");
}

//---------to show/hide location and search forms---------

function onFormBtnClick(element, activeClass) {
    !element.classList.contains(activeClass)
        ? element.classList.add(activeClass)
        : element.classList.remove(activeClass);
}

burger.button.addEventListener("click", (e) => toggleMenu(e));
menu.button.addEventListener("click", (e) => toggleMenu(e));
menu.navigation.addEventListener("click", onMenuClick);
location.btn.addEventListener("click", () =>
    onFormBtnClick(location.list, location.activeClass)
);
search.btn.addEventListener("click", () =>
    onFormBtnClick(search.input, search.activeClass)
);
