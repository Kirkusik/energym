const navigation = document.querySelector(".navigation");
const menu = document.querySelector(".menu");
const menuContact = document.querySelector(".contact_block");
const burgerMenu = document.querySelector(".burger-menu");
const menuButton = document.querySelector(".burger-menu__button");
const closeButton = document.querySelector(".square-btn");
const menuTitle = document.querySelectorAll(".menu__tab-link");
const menuItem = document.querySelectorAll(".menu__item-link");

// const menuItems = document.querySelectorAll(".menu__items");
// const tabs = document.querySelector(".menu__tabs");
// const menuSubItems = document.querySelectorAll(".menu__sub-items");
// const menuSubTitle = document.querySelectorAll(".menu__sub-title-link");
// const divContact = document.querySelector("menu__contact");

function toggleMenu(e) {
    e.preventDefault();
    navigation.classList.toggle("navigation--active");
    menu.classList.toggle("menu--active");
    menuContact.classList.toggle("contact_block--active");
    burgerMenu.classList.toggle("active");
}

function onMenuClick(e) {
    e.preventDefault();
    activeItem = e.target.closest(".menu__tab-link");
    activeSubItem = e.target.closest(".menu__item-link");
    //on item click
    if (activeItem) {
        [...menuTitle].forEach((item) => {
            if (item === activeItem) {
                item.classList.toggle("menu__tab-link--active");
                item.nextElementSibling.classList.toggle("menu__items--active");
            }
        });
        // on subItem click
    } else if (activeSubItem) {
        [...menuItem].forEach((item) => {
            if (
                item === activeSubItem &&
                //only if subItem contains child items
                activeSubItem.nextElementSibling.classList.contains(
                    "menu__sub-items"
                )
            ) {
                item.classList.toggle("menu__item-link--active");
                item.classList.toggle("menu__sub-title-link--active");
                item.nextElementSibling.classList.toggle("menu__items--active");
            } else {
                return;
            }
        });
    }
}

menuButton.addEventListener("click", (e) => toggleMenu(e));
closeButton.addEventListener("click", (e) => toggleMenu(e));
navigation.addEventListener("click", onMenuClick);

// tabs.addEventListener("click", function (event) {
//     let target = event.target;
//     const mediaDesk = window.matchMedia("(min-width: 1000px)");
//     if (mediaDesk.matches) {
//         menuTitle.forEach(function (el) {
//             if (target.closest(".menu__tab-link") === el) {
//                 target.classList.toggle("menu__tab-link--active");
//                 target.nextElementSibling.classList.toggle(
//                     "menu__items--active"
//                 );
//             } else {
//                 el.classList.remove("menu__tab-link--active");
//                 el.nextElementSibling.classList.remove("menu__items--active");
//             }
//         });
//     } else {
//         menuTitle.forEach((link) => {
//             if (target.closest(".menu__tab-link") === link) {
//                 target.classList.toggle("menu__tab-link--active");
//                 target.nextElementSibling.classList.toggle(
//                     "menu__items--active"
//                 );
//             }
//             openSubMenu(target);
//             // else {
//             //     link.classList.remove('menu__tab-link--active');
//             //     link.nextElementSibling.classList.remove('menu__items--active')
//             // }
//         });
//     }
// });

// menuContact.addEventListener("click", function (event) {
//     let target = event.target;
//     const mediaDesk = window.matchMedia("(min-width: 1000px)");
//     if (mediaDesk.matches) {
//         menuTitle.forEach(function (el) {
//             if (target.closest(".menu__tab-link") === el) {
//                 target.classList.toggle("menu__tab-link--active");
//                 target.nextElementSibling.classList.toggle(
//                     "menu__items--active"
//                 );
//             } else {
//                 el.classList.remove("menu__tab-link--active");
//                 el.nextElementSibling.classList.remove("menu__items--active");
//             }
//         });
//     } else {
//         menuTitle.forEach((link) => {
//             if (target.closest(".menu__tab-link") === link) {
//                 target.classList.toggle("menu__tab-link--active");
//                 target.nextElementSibling.classList.toggle(
//                     "menu__items--active"
//                 );
//                 target.nextElementSibling.classList.toggle(
//                     "menu__contact--active"
//                 );
//                 // divContact.classList.toggle('menu__contact--active')
//             }
//             openSubMenu(target);
//             // else {
//             //     link.classList.remove('menu__tab-link--active');
//             //     link.nextElementSibling.classList.remove('menu__items--active')
//             // }
//         });
//     }
// });

// const openSubMenu = function (target) {
//     menuSubTitle.forEach((activeNestedLink) => {
//         if (target.closest(".menu__sub-title-link") === activeNestedLink) {
//             target.classList.add("menu__tab-link--active");
//             target.nextElementSibling.classList.add("menu__sub-items--active");
//             // if(target.nextElementSibling.className === "menu__sub-items menu__sub-items--active") {
//             //     target.nextElementSibling.className = "menu__sub-items"
//             // } else {
//             //     target.nextElementSibling.className = "menu__sub-items menu__sub-items--active"
//             // }
//         } else {
//             activeNestedLink.classList.remove("menu__tab-link--active");
//             activeNestedLink.nextElementSibling.classList.remove(
//                 "menu__sub-items--active"
//             );
//         }
//     });
// };
