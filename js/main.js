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
