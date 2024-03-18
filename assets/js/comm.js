//slide-visure--------------------------------------------------------------------------
var swiper = new Swiper(".slide-intro2", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000, // 슬라이드 간의 간격 (밀리초 단위)
    disableOnInteraction: false, // 유저 상호 작용 후에도 자동 재생을 계속 활성화할지 여부
  },
});

//slide-biz--------------------------------------------------------------------------
var swiper = new Swiper(".slide-biz", {
  spaceBetween: 40,
});

//aos--------------------------------------------------------------------------
AOS.init({
  duration: 1200,
});

//count--------------------------------------------------------------------------
var counter1 = new CountUp("counter1", 0, 38, 0, 5, {
  useEasing: true,
  useGrouping: true,
  separator: ",",
});

var counter2 = new CountUp("counter2", 0, 4667, 0, 5, {
  useEasing: true,
  useGrouping: true,
});

var counter3 = new CountUp("counter3", 0, 11, 0, 5, {
  useEasing: true,
  useGrouping: true,
});

var counter4 = new CountUp("counter4", 0, 475, 0, 5, {
  useEasing: true,
  useGrouping: true,
});

var waypoint1 = new Waypoint({
  element: document.getElementById("waypoint1"),
  handler: function (direction) {
    if (direction == "up") {
      counter1.reset();
    } else {
      counter1.start();
    }
  },
  offset: "50%",
});

var waypoint1 = new Waypoint({
  element: document.getElementById("waypoint1"),
  handler: function (direction) {
    if (direction == "up") {
      counter2.reset();
    } else {
      counter2.start();
    }
  },
  offset: "50%",
});

var waypoint1 = new Waypoint({
  element: document.getElementById("waypoint1"),
  handler: function (direction) {
    if (direction == "up") {
      counter3.reset();
    } else {
      counter3.start();
    }
  },
  offset: "50%",
});

var waypoint1 = new Waypoint({
  element: document.getElementById("waypoint1"),
  handler: function (direction) {
    if (direction == "up") {
      counter4.reset();
    } else {
      counter4.start();
    }
  },
  offset: "50%",
});

//newsroom--------------------------------------------------------------------------
var swiper = new Swiper(".news-slide", {
  slidesPerView: 1.25,
});

//header--------------------------------------------------------------------------
window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var essenceSection = document.querySelector(".sec-essence");
  var depth1Links = document.querySelectorAll(".depth1");
  var lang = document.querySelector(".lang-icon");
  var bars = document.querySelectorAll(".bar");

  // 특정 섹션에 도달하면 헤더에 백그라운드 및 텍스트 컬러 변경
  if (window.scrollY >= essenceSection.offsetTop) {
    lang.style.color = "#212126";
    bars.forEach(function (bar) {
      // 모든 .bar 요소에 스타일 적용
      bar.style.background = "#212126";
    });
    header.style.background = "rgba(255, 255, 255, 0.9)"; // 투명도 변경 가능
    header.style.backdropFilter = "blur(8px)"; // 블러 효과 적용
    header.style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
    depth1Links.forEach(function (link) {
      link.style.color = "#212126"; // 텍스트 컬러 변경
    });
  } else {
    lang.style.color = "#fff";
    bars.forEach(function (bar) {
      // 모든 .bar 요소에 스타일 적용
      bar.style.background = "#fff";
    });
    header.style.background = "rgba(255, 255, 255, 0.1)"; // 초기 배경 투명 설정으로 복원
    header.style.backdropFilter = "blur(8px)"; // 블러 효과 제거
    depth1Links.forEach(function (link) {
      link.style.color = ""; // 초기 텍스트 컬러로 복원
    });
  }
});
//---------------------------------------------------------------
const gnb = document.getElementById("gnb");

gnb.addEventListener("mouseover", function () {
  gnb.classList.add("active");
});

gnb.addEventListener("mouseout", function () {
  gnb.classList.remove("active");
});
//---------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".biz-name button");
  const swiper = new Swiper(".slide-biz", {
    // Swiper 설정
  });

  function setActiveButton(index) {
    buttons.forEach((button, i) => {
      if (i === index) {
        button.style.color = "#212126"; // 활성화된 버튼의 텍스트 색상 변경
      } else {
        button.style.color = "#c3c3c5"; // 비활성화된 버튼의 텍스트 색상 변경
      }
    });
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      setActiveButton(index);
      swiper.slideTo(index); // Swiper로 해당 슬라이드로 이동
    });
  });
});
