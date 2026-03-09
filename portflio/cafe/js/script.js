window.addEventListener('scroll', function () {
    const intro = document.querySelector('.about-area');
    const introPosition = intro.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;

    if (introPosition < screenPosition) {
        intro.classList.add('visible');
    } else {
        intro.classList.remove('visible');
    }
});



// メニューエリアのスクロール
// document.addEventListener('DOMContentLoaded', function() {
//     var food = document.querySelector('.menu-area .food');
//     var dessert = document.querySelector('.menu-area .dessert');
//     var drink = document.querySelector('.menu-area .drink');

//     var showElement = function(element) {
//         element.classList.add('show');
//     };

//     var isElementInViewport = function(element) {
//         var rect = element.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//     };

//     var handleScroll = function() {
//         if (isElementInViewport(food)) {
//             showElement(food);
//         } else if (isElementInViewport(dessert)) {
//             showElement(dessert);
//         } else if (isElementInViewport(drink)) {
//             showElement(drink);
//         }
//     };

//     window.addEventListener('scroll', handleScroll);
// });