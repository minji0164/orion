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
  spaceBetween: 30,
});

//aos--------------------------------------------------------------------------
AOS.init({
  duration: 1200,
})

//count--------------------------------------------------------------------------
var counter1 = new CountUp("counter1", 0, 38, 0, 5, {  
  useEasing: true,
  useGrouping: true,
  separator: ',',
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
element: document.getElementById('waypoint1'),
handler: function(direction) {

  if (direction == "up") {
    counter1.reset();
  } else {
    counter1.start();
  }

},
offset: '50%'
});

var waypoint1 = new Waypoint({
element: document.getElementById('waypoint1'),
handler: function(direction) {

  if (direction == "up") {
    counter2.reset();
  } else {
    counter2.start();
  }

},
offset: '50%'
});

var waypoint1 = new Waypoint({
element: document.getElementById('waypoint1'),
handler: function(direction) {

  if (direction == "up") {
    counter3.reset();
  } else {
    counter3.start();
  }

},
offset: '50%'
});

var waypoint1 = new Waypoint({
element: document.getElementById('waypoint1'),
handler: function(direction) {

  if (direction == "up") {
    counter4.reset();
  } else {
    counter4.start();
  }

},
offset: '50%'
});

//newsroom--------------------------------------------------------------------------
var swiper = new Swiper(".news-slide", {
  slidesPerView: 1.25,
});

//header--------------------------------------------------------------------------
var header = document.getElementById('header');
var materialSymbolsOutlined = document.querySelector('.material-symbols-outlined');
var bars = document.querySelectorAll('.bar')
var navLinks = document.querySelectorAll('#gnb a');

header.style.transition = 'background-color 0.5s ease';

// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', function() {
  // 현재 스크롤 위치 가져오기
  var scrollPosition = window.scrollY;

  // 스크롤 위치에 따라 헤더의 배경 색상 변경
  if (scrollPosition > 640) {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; // 스크롤 위치가 0보다 크면 배경색 변경
    header.classList.add('blur-background'); //블러 먹이기
    materialSymbolsOutlined.style.color = '#57575b';
    bars.forEach(function(bar) {
      bar.style.backgroundColor = '#57575b';
    });
    navLinks.forEach(function(link) {
      link.style.color = '#212126';
    });
  } else {
    header.style.backgroundColor = 'transparent'; // 스크롤 위치가 0이면 배경 다시 투명으로
    header.classList.remove('blur-background');
    materialSymbolsOutlined.style.color = '#fff';
    bars.forEach(function(bar) {
      bar.style.backgroundColor = '#fff';
    });
    navLinks.forEach(function(link) {
      link.style.color = '#fff';
    });
  }
});

navLinks.forEach(function(link) {
  link.addEventListener('mouseover', function() {
    link.style.color = '#e30512'; // 마우스 오버 시의 원하는 색상으로 변경
  });

  link.addEventListener('mouseout', function() {
    // 마우스 아웃 시 스크롤 상태에 따라 원래 색상으로 변경
    link.style.color = window.scrollY > 640 ? '#57575b' : '#fff';
  });
});