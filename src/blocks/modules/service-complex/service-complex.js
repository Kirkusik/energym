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

serviceComplex.header.addEventListener("click", (e) => {
  serviceMenuClick();
});
console.log(serviceComplex.header);
