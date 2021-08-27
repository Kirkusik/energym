// // core version + navigation, pagination modules:
import SwiperCore, { Navigation } from 'swiper/core';
// // configure Swiper to use modules
SwiperCore.use([Navigation]);


const photogallery = document.querySelector('.photogallery__wrapper')
if (photogallery) {

    const gallerySliderContainer = photogallery.querySelector('.photogallery__slider');
    const swiperNext = photogallery.querySelector(".photogallery__btn-next");
    const swiperPrev = photogallery.querySelector(".photogallery__btn-prev");

    const swiper = new SwiperCore(gallerySliderContainer, {
        spaceBetween: 15,
        loop: true,
        slidesPerView: 'auto',
        slideToClickedSlide: false,
        navigation: {
            nextEl: swiperNext,
            prevEl: swiperPrev,
        },
        keyboard: {
            enabled: true,
        }

    });


    swiper.on('slideChange', function () {
        const activeSlide = document.querySelector('.swiper-slide-active');
        const duplicateActiveSlide = document.querySelector('.swiper-slide-duplicate-active');
        changeSeparateZoneTitle(activeSlide || duplicateActiveSlide);
    });


    // Change slides zones name according to data-attr  -> data-zone
    const slides = document.querySelectorAll('.photogallery__slide');
    const outerZoneTitle = document.querySelector('.photogallery__zone-title--outer')

    setZoneTitlesToSlides();

    window.addEventListener('resize', () => setZoneTitlesToSlides());

    function setZoneTitlesToSlides() {
        [...slides].forEach(slide => {
            changeInnerZoneTitle(slide);

        })
    }

    function changeInnerZoneTitle(zoneItemEl) {
        const zoneTitle = zoneItemEl.dataset.zone;
        zoneItemEl.querySelector('.photogallery__zone-title').innerText = zoneTitle;
    }

    function changeSeparateZoneTitle(zoneItemEl) {
        const zoneTitle = zoneItemEl.dataset.zone;
        outerZoneTitle.innerText = zoneTitle;
    }
}






