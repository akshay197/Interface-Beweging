const snijdenBtn = document.querySelector('.snijden');
const panBtn = document.querySelector('.pan');
const schotelBtn = document.querySelector('.schotel');
const carousel = document.querySelector('.video-carousel');

const panVideo = document.querySelector('.video-pan video')
const snijdenVideo = document.querySelector('.video-snijden video')
const schotelVideo = document.querySelector('.video-schotel video')
const loader = document.querySelector('.loader');

panBtn.addEventListener('click', () => {
    carousel.classList.remove('snijden-position');
    carousel.classList.remove('schotel-position');
    carousel.classList.add('pan-position');

    schotelVideo.pause();
    snijdenVideo.pause();
    schotelVideo.currentTime = 0;
    snijdenVideo.currentTime = 0;

    setTimeout(() => {
        panVideo.play();
    }, 750);
});

snijdenBtn.addEventListener('click', () => {
    carousel.classList.remove('pan-position');
    carousel.classList.remove('schotel-position');
    carousel.classList.add('snijden-position');

    schotelVideo.pause();
    panVideo.pause();
    schotelVideo.currentTime = 0;
    panVideo.currentTime = 0;

    setTimeout(() => {
        snijdenVideo.play();
    }, 750);
});

schotelBtn.addEventListener('click', () => {
    carousel.classList.remove('pan-position');
    carousel.classList.remove('snijden-position');
    carousel.classList.add('schotel-position');

    snijdenVideo.pause();
    panVideo.pause();
    snijdenVideo.currentTime = 0;
    panVideo.currentTime = 0;

    setTimeout(() => {
        schotelVideo.play();
    }, 750);
});

setTimeout(() => {
    loader.classList.add('opacity');
    console.log('test')
}, 3000);

setTimeout(() => {
    loader.remove();
}, 4500);

setTimeout(() => {
    loader.remove();
}, 4500);