(function () {
    'use strict'
    let codexVideo = document.querySelector('.codex__video-wrapper');

    if (codexVideo) {
        setupVideo(codexVideo);
    }

    function setupVideo(video) {
        let link = video.querySelector('.codex__video-link');
        let media = video.querySelector('.codex__video-cover');
        let button = video.querySelector('.codex__video-btn');
        // take id in the embed code on YouTube
        let id = 'ZF9S6Bc1wBI';

        // by clicking on the video, the entire link with the image is deleted, the video is placed instead
        video.addEventListener('click', () => {
            let iframe = createIframe(id);
            link.remove();
            button.remove();
            codexVideo.classList.remove('codex__video--icon');
            video.appendChild(iframe);
        });

        // classes for remove/show play btn and add an interactive cursor to the whole video
        video.classList.add('codex__video-wrapper--enabled');
        codexVideo.classList.add('codex__video--icon');
    };

    // create iframe element
    function createIframe(id) {
        let iframe = document.createElement('iframe');

        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('src', generateURL(id));
        iframe.classList.add('codex__video-cover');

        return iframe;
    }
    // generate url for iframe by id + attr
    function generateURL(id) {
        let query = '?rel=0&showinfo=0&autoplay=1';
        return 'https://www.youtube.com/embed/' + id + query;

    }
})();