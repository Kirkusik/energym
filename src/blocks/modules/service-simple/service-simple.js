"use strict";
import { createVideo } from "../../../js/import/video";

let serviceSimpleHeroVideo = document.querySelector(".service-simple__hero-block--video-wrapper");

if (serviceSimpleHeroVideo) {
    createVideo(serviceSimpleHeroVideo);
}