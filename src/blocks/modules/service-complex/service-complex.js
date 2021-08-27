// Open and close menu on service-complex
const serviceComplex = {
  list: document.querySelector(".services-menu"),
  header: document.querySelector(".services-complex__default"),
  items: document.querySelectorAll(".services-menu__link"),
  defaultItem: document.querySelector(".services-complex__default-item"),
  closeBtn: document.querySelector(".services-complex__arrow--close"),
};

function serviceMenuClick() {
  if (serviceComplex.header) {
    serviceComplex.header.classList.add(
      "services-complex__default--active-menu"
    );
    serviceComplex.list.classList.add("services-menu--active");
  }
}

function serviceMenuClickChoice(e) {
  if (serviceComplex.list) {
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
}

function serviceMenuClose(e) {
  if (serviceComplex.closeBtn) {
    serviceComplex.header.classList.remove(
      "services-complex__default--active-menu"
    );
    serviceComplex.list.classList.remove("services-menu--active");
  }
}

serviceComplex.header.addEventListener("click", serviceMenuClick);

serviceComplex.list.addEventListener("click", serviceMenuClickChoice);

serviceComplex.closeBtn.addEventListener("click", serviceMenuClose);

// input video on service-complex
import { createVideo } from "../../../js/import/video";

let servicesComplexVideo = document.querySelector(
  ".services-complex__video-wrapper"
);

if (servicesComplexVideo) {
  createVideo(servicesComplexVideo);
}
