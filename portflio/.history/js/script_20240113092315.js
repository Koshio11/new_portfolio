document.addEventListener('DOMContentLoaded', function () {
    const scrollImage = document.getElementById('scrollImage');
    
    window.addEventListener('scroll', function () {
      const scrollValue = window.scrollY;
      const opacityValue = 1 - (scrollValue / 500); /* スクロールに応じて透明度を変更 */
      scrollImage.style.transform = `translateY(${scrollValue}px)`;
      scrollImage.style.opacity = opacityValue > 0 ? opacityValue : 0; /* 透明度が0未満にならないように制御 */
    });
  });
  