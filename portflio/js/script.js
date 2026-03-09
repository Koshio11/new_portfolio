/** ローディング画面 */
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.scrolling-text').style.display = 'block';
    }, 3000);
});

window.addEventListener('load', () => {
    // ページのロードが完了したら.loaderの透明度を0にする
    const loader = document.querySelector('.loader');
    loader.style.opacity = 3;

    // アニメーションが終了したら、.loader要素をDOMから削除する
    loader.addEventListener('transitionend', () => {
        loader.parentNode.removeChild(loader);
    });
});


/**自己紹介スクロール */
window.addEventListener('scroll', function () {
    const intro = document.querySelector('.self-introduction');
    const introPosition = intro.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;

    if (introPosition < screenPosition) {
        intro.classList.add('visible');
    } else {
        intro.classList.remove('visible');
    }
});


/**カフェサイトスクロール */
window.addEventListener('scroll', function () {
    const cafe = document.querySelector('.cafe');
    const cafePosition = cafe.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;

    if (cafePosition < screenPosition) {
        cafe.classList.add('cafe-visible');
    } else {
        intro.classList.remove('cafe-visible');
    }
});

/**カフェサイトスクロール */
window.addEventListener('scroll', function () {
    const cafe = document.querySelector('.fashion');
    const cafePosition = cafe.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;

    if (cafePosition < screenPosition) {
        cafe.classList.add('fashion-visible');
    } else {
        intro.classList.remove('fashion-visible');
    }
});


/**美容室バナースクロール */
window.addEventListener('scroll', function () {
    const cafe = document.querySelector('.beauty');
    const cafePosition = cafe.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;

    if (cafePosition < screenPosition) {
        cafe.classList.add('beauty-visible');
    } else {
        intro.classList.remove('beauty-visible');
    }
});

document.querySelector('.top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function () {
    var portfolio = document.querySelector('.my-portfolio');
    portfolio.style.transform = 'translateY(-' + window.scrollY + 'px)';
});