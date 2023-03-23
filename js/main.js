// 장바구니 드롭다운

const basketStarterEl = document.querySelector("header .basket-starter");
const basketEl = basketStarterEl.querySelector(".basket");

basketStarterEl.addEventListener("click", function (event) {
  // 상위 객체인 window 까지 이벤트가 발생하지 않도록 지정
  event.stopPropagation();
  // show 라는 클래스가 있나?
  if (basketEl.classList.contains("show")) {
    // hide
    basketEl.classList.remove("show");
  } else {
    // show
    basketEl.classList.add("show");
  }
});

basketEl.addEventListener("click", function (event) {
  // 장바구니 영역에서 선택 시, 이벤트 발생(사라지지) 않도록 하기
  event.stopPropagation();
});

window.addEventListener("click", function () {
  basketEl.classList.remove("show");
});

// ------------------------------------------------------------------

// 검색창

const headerEl = document.querySelector("header");
// 전개 연산자
const headerMenuEls = [...headerEl.querySelectorAll("ul.menu > li")];
const searchWrapEl = headerEl.querySelector(".search-wrap");
const searchStarterEl = headerEl.querySelector(".search-starter");
const searchCloserEl = searchWrapEl.querySelector(".search-closer");
const searchShadowEl = searchWrapEl.querySelector(".search-shadow");
const searchInputEl = searchWrapEl.querySelector("input");
const searchDelayEls = [...searchWrapEl.querySelectorAll("li")];

searchStarterEl.addEventListener("click", showSearch);
searchCloserEl.addEventListener("click", hideSearch);
searchShadowEl.addEventListener("click", hideSearch);

function showSearch() {
  headerEl.classList.add("searching");
  // html 문서의 최상위 요소
  document.documentElement.classList.add("fixed");
  headerMenuEls.reverse().forEach(function (el, index) {
    el.style.transitionDelay = (index * 0.4) / headerMenuEls.length + "s";
  });
  searchDelayEls.forEach(function (el, index) {
    el.style.transitionDelay = (index * 0.4) / searchDelayEls.length + "s";
  });
  setTimeout(function () {
    searchInputEl.focus();
  }, 600);
}

function hideSearch() {
  headerEl.classList.remove("searching");
  document.documentElement.classList.remove("fixed");
  headerMenuEls.reverse().forEach(function (el, index) {
    el.style.transitionDelay = (index * 0.4) / headerMenuEls.length + "s";
  });
  searchDelayEls.reverse().forEach(function (el, index) {
    el.style.transitionDelay = (index * 0.4) / searchDelayEls.length + "s";
  });
  // 돌려진 배열 다시 되돌리기
  searchDelayEls.reverse();
  // 인풋창 초기화
  searchInputEl.value = "";
}
