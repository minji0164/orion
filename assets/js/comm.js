var swiper = new Swiper(".slide-intro2", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
//   autoplay: {
//     delay: 3000, // 슬라이드 간의 간격 (밀리초 단위)
//     disableOnInteraction: false, // 유저 상호 작용 후에도 자동 재생을 계속 활성화할지 여부
// },
});

var swiper = new Swiper(".slide-biz", {
  spaceBetween: 30,
});

AOS.init({
  duration: 1200,
})


