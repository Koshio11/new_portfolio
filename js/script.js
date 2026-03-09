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

/**ファッションサイトスクロール */
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


/**元祖ポートフォリオスクロール */
window.addEventListener('scroll', function () {
    const cafe = document.querySelector('.previous');
    const cafePosition = cafe.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;

    if (cafePosition < screenPosition) {
        cafe.classList.add('previous-visible');
    } else {
        intro.classList.remove('previous-visible');
    }
});


/**DEEPスクロール */
window.addEventListener('scroll', function () {
    const cafe = document.querySelector('.deep');
    const cafePosition = cafe.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;

    if (cafePosition < screenPosition) {
        cafe.classList.add('deep-visible');
    } else {
        intro.classList.remove('deep-visible');
    }
});


/**kindergartenスクロール */
window.addEventListener('scroll', function () {
    const cafe = document.querySelector('.kindergarten');
    const cafePosition = cafe.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;

    if (cafePosition < screenPosition) {
        cafe.classList.add('kindergarten-visible');
    } else {
        intro.classList.remove('kindergarten-visible');
    }
});


/**カガミロックスクロール */
window.addEventListener('scroll', function () {
    const cafe = document.querySelector('.kagamirock');
    const cafePosition = cafe.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;

    if (cafePosition < screenPosition) {
        cafe.classList.add('kagamirock-visible');
    } else {
        intro.classList.remove('kagamirock-visible');
    }
});

/**スキルマスタースクロール */
window.addEventListener('scroll', function () {
    const cafe = document.querySelector('.skillmaster');
    const cafePosition = cafe.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;

    if (cafePosition < screenPosition) {
        cafe.classList.add('skillmaster-visible');
    } else {
        intro.classList.remove('skillmaster-visible');
    }
});

/**未来スクロール */
window.addEventListener('scroll', function () {
    const cafe = document.querySelector('.future');
    const cafePosition = cafe.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2.2;

    if (cafePosition < screenPosition) {
        cafe.classList.add('future-visible');
    } else {
        intro.classList.remove('future-visible');
    }
});

/**シーハートスクロール */
window.addEventListener('scroll', function () {
    const cafe = document.querySelector('.seahaert');
    const cafePosition = cafe.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2.6;

    if (cafePosition < screenPosition) {
        cafe.classList.add('seahaert-visible');
    } else {
        intro.classList.remove('seahaert-visible');
    }
});

/*** 厳島スクロール */
window.addEventListener('scroll', function () {
    const cafe = document.querySelector('.itukushima');
    const cafePosition = cafe.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2.6;

    if (cafePosition < screenPosition) {
        cafe.classList.add('itukushima-visible');
    } else {
        intro.classList.remove('itukushima-visible');
    }
});


/*** 不明スクロール */
window.addEventListener('scroll', function () {
    const cafe = document.querySelector('.none');
    const cafePosition = cafe.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;

    if (cafePosition < screenPosition) {
        cafe.classList.add('none-visible');
    } else {
        intro.classList.remove('none-visible');
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

