'use strict'
import { createVideo } from '../../../js/import/video';

let codexVideo = document.querySelector('.codex__video-wrapper');

if (codexVideo) {
    createVideo(codexVideo);
}
