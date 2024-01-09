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

var swiper = new Swiper(".slide-biz", {
  spaceBetween: 30,
});

AOS.init({
  duration: 1200,
})

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

var swiper = new Swiper(".news-slide", {});