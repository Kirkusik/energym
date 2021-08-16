const serviceComplex = {
  list: document.querySelector(".services-menu"),
  header: document.querySelector(".services-complex__default"),
  items: document.querySelectorAll(".services-menu__link"),
  defaultItem: document.querySelector(".services-complex__default-item"),
};

function serviceMenuClick() {
  serviceComplex.header.classList.add("services-complex__default--active-menu");
  serviceComplex.list.classList.add("services-menu--active");
}

function serviceMenuClickChoice(e) {
  serviceComplex.defaultItem.innerText = e.target.closest(
    ".services-menu__link"
  ).innerText;
  serviceComplex.items.forEach((e) => {
    e.classList.remove("services-menu__link--active");
  });
  e.target
    .closest(".services-menu__link")
    .classList.add("services-menu__link--active");
  serviceComplex.header.classList.remove(
    "services-complex__default--active-menu"
  );
  serviceComplex.list.classList.remove("services-menu--active");
}

serviceComplex.header.addEventListener("click", serviceMenuClick);

serviceComplex.list.addEventListener("click", serviceMenuClickChoice);
