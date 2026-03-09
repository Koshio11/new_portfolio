document.addEventListener('DOMContentLoaded', function () {
    const scrollingText = document.querySelector('.scrolling-text');

    window.addEventListener('scroll', function () {
        const scrollValue = window.scrollY;
        scrollingText.style.transform = `translateY(-${scrollValue}px)`;
    });
});
