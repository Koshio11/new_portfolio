// ニュースエリア
window.addEventListener('scroll', function () {
    const intro = document.querySelector('.news-area');
    const introPosition = intro.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;

    if (introPosition < screenPosition) {
        intro.classList.add('visible');
    } else {
        intro.classList.remove('visible');
    }
});

// メニューエリア
window.addEventListener('scroll', function () {
    const intro = document.querySelector('.menu-area');
    const introPosition = intro.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;

    if (introPosition < screenPosition) {
        intro.classList.add('visible');
    } else {
        intro.classList.remove('visible');
    }
});