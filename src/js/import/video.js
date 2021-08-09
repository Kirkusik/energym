function createVideo(video) {

    let link = video.querySelector('.video-link');
    let button = video.querySelector('.video-btn');
    let videoLink = link.href;
    link.removeAttribute('href');

    // YouTube video id 
    let id = getVideoId(videoLink);

    // classes for show play btn and add an interactive cursor to the whole video
    video.classList.add('video-wrapper--enabled');

    // by clicking on the video, the entire link with the image is deleted, the video is placed instead
    video.addEventListener('click', () => {
        let iframe = createIframe(id);
        link.remove();
        button.remove();
        video.appendChild(iframe);
    });


    // get the youtube video id from the link url
    function getVideoId(videoLink) {
        let regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
        return videoLink.match(regExp)[1];
    }

    // create iframe element
    function createIframe(id) {
        let iframe = document.createElement('iframe');

        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('src', generateURL(id));
        iframe.classList.add('video-cover');

        return iframe;
    }


    // generate url for iframe by id + attr
    function generateURL(id) {
        let playerAttr = '?rel=0&showinfo=0&autoplay=1';
        return 'https://www.youtube.com/embed/' + id + playerAttr;
    }
}

export { createVideo };