// // core version + navigation, pagination modules:
import SwiperCore, { Navigation } from 'swiper/core';
// // configure Swiper to use modules
SwiperCore.use([Navigation]);
// import 'swiper/swiper-bundle.css';
// Photoswipe init
import PhotoSwipe from "photoswipe";
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

import { initPhotoSwipe } from '../../../js/import/photoswipe';

const photogallery = document.querySelector('.photogallery__wrapper')
if (photogallery) {

    const gallerySliderContainer = photogallery.querySelector('.photogallery__slider');
    const swiperNext = photogallery.querySelector(".photogallery__btn-next");
    const swiperPrev = photogallery.querySelector(".photogallery__btn-prev");

    const swiper = new SwiperCore(gallerySliderContainer, {
        spaceBetween: 15,
        // // loop: true,
        slidesPerView: 'auto',
        // centeredSlides: true,
        slideToClickedSlide: false,
        navigation: {
            nextEl: swiperNext,
            prevEl: swiperPrev,
        },
        keyboard: {
            enabled: true,
        }

    });

    initPhotoSwipe(".zoom-gallery", true, swiper);
}
