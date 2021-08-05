(function () {
    'use strict'
    console.log('hello');
    let video = document.querySelector('.codex__video-wrapper');
    setupVideo(video);

    function setupVideo(video) {
        let link = video.querySelector('.codex__video-link');
        let media = video.querySelector('.codex__video-cover');
        let button = video.querySelector('.codex__video-btn');
        let id = parseMediaURL(media);

        video.addEventListener('click', () => {
            let iframe = createIframe(id);

            link.remove();
            button.remove();
            video.appendChild(iframe);
        });

        link.removeAttribute('href');
    };
})();