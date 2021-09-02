"use strict";
import { createVideo } from "../../../js/import/video";
//------kids-hero section------
let kidsHeroVideo = document.querySelector(".kids-hero__video-wrapper");

if (kidsHeroVideo) {
    createVideo(kidsHeroVideo);
}

//------kids-numbers section------

let kidsForesterVideo = document.querySelector(".video-wrapper--forester");

if (kidsForesterVideo) {
    createVideo(kidsForesterVideo);
}

let kidsCinderellaVideo = document.querySelector(".video-wrapper--cinderella");

if (kidsCinderellaVideo) {
    createVideo(kidsCinderellaVideo);
}
let kidsLullabyVideo = document.querySelector(".video-wrapper--lullaby");

if (kidsLullabyVideo) {
    createVideo(kidsLullabyVideo);
}

let kidsColorStripesVideo = document.querySelector(".video-wrapper--color-stripes");

if (kidsColorStripesVideo) {
    createVideo(kidsColorStripesVideo);
}