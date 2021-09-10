import SwiperCore, { Navigation } from 'swiper/core';
SwiperCore.use([Navigation]);

import baguetteBox from 'baguettebox.js';

const photogallery = document.querySelector('.photogallery__wrapper')
if (photogallery) {

    const gallerySliderContainer = photogallery.querySelector('.photogallery__slider');
    const swiperNext = photogallery.querySelector(".photogallery__btn-next");
    const swiperPrev = photogallery.querySelector(".photogallery__btn-prev");

    const swiper = new SwiperCore(gallerySliderContainer, {
        spaceBetween: 15,
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

    setZoneTitlesToSlides(slides);

    // window.addEventListener('resize', () => setZoneTitlesToSlides());

    // init lightbox
    baguetteBox.run('.lightbox-group', {
        captions: false,
        // syncs swiper slide and zoom photo
        onChange: function (currentIndex) {
            swiper.slideTo(currentIndex, 400, true)
        }
    });


}


function setZoneTitlesToSlides(slides) {
    [...slides].forEach(slide => {
        changeInnerZoneTitle(slide);
    })
}

function changeInnerZoneTitle(zoneItemEl) {
    const zoneTitle = zoneItemEl.dataset.zone;
    zoneItemEl.querySelector('.photogallery__zone-title').innerText = zoneTitle;
}

function changeSeparateZoneTitle(zoneItemEl) {
    const outerZoneTitle = document.querySelector('.photogallery__zone-title--outer')
    const zoneTitle = zoneItemEl.dataset.zone;
    outerZoneTitle.innerText = zoneTitle;
}