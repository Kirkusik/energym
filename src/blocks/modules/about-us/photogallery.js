// // core version + navigation, pagination modules:
import SwiperCore, { Navigation } from 'swiper/core';
// // configure Swiper to use modules
SwiperCore.use([Navigation]);

// photoswipe init func
import { initPhotoSwipe } from '../../../js/import/photoswipe';

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


    const cancelModalBtn = document.querySelector('.photogallery__modal--close');


    // init photoswype modal gallery
    initPhotoSwipe(".zoom-gallery", true, swiper);

    getDynamicTopPosition(cancelModalBtn);
    window.addEventListener('resize', getDynamicTopPosition);
    window.addEventListener('resize', () => setZoneTitlesToSlides());

}


// find out the value by which the modal img is shifted from the top of viewport 
// and set this value as the top property for the close modal button
function getDynamicTopPosition(btn) {
    // elements for getting dynamic top position of img and set it to close modal btn
    const photoswypeZoomWrapper = document.querySelector('.pswp__zoom-wrap');
    if (photoswypeZoomWrapper) {
        // tranformProperty format: translate3d(0px, 258px, 0px) scale(1)
        let tranformProperty = photoswypeZoomWrapper.style.transform;
        let currentTopPositon = tranformProperty.split(' ')[1].slice(0, -1);
        btn.style.top = currentTopPositon;

    }

}

// Change slides zones name according to data-attr  -> data-zone
const slides = document.querySelectorAll('.photogallery__slide');
const outerZoneTitle = document.querySelector('.photogallery__zone-title--outer')

setZoneTitlesToSlides();


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

