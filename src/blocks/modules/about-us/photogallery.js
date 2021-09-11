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
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: swiperNext,
            prevEl: swiperPrev,
        },
        keyboard: {
            enabled: true,
        }

    });


    swiper.on('activeIndexChange', function () {
        setTimeout(() => {
            const activeSlide = photogallery.querySelector('.swiper-slide-active');
            changeSeparateZoneTitle(activeSlide);
        }, 0)
    });

    // Change slides zones name according to data-attr  -> data-zone
    const slides = document.querySelectorAll('.photogallery__slide');
    setZoneTitlesToSlides(slides);

    // init lightbox
    baguetteBox.run('.lightbox-group', {
        captions: false,
        animation: 'fideIn',
        // syncs swiper slide and zoom photo
        onChange: function (currentIndex) {
            swiper.slideTo(currentIndex, 400, true)
            createFigureCaptions();
        }
    });
}


function createFigureCaptions() {
    const figureCaptions = document.querySelectorAll('.full-image figure');
    figureCaptions.forEach((elem) => {
        const figureWrapper = elem.querySelector('.baguetteBox-img-wrapper');

        if (figureWrapper) return;
        // add capture to img block for centering
        const baguetteBoxHtml = elem.innerHTML;
        const img = elem.querySelector('img')
        elem.innerHTML = `
                <div class="baguetteBox-img-wrapper">
                    ${baguetteBoxHtml}
                    <span class="baguetteBox-caption section-text__h2">${img.alt}</span>
                </div>`;
    })
    return;
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