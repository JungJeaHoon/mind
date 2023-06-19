
//하트누르면 색 바뀌게
const add = document.querySelector('.fa-heart');
let isRed = false;

add.addEventListener("click", function() {
    if (isRed) {
        add.style.color = ""; // 원래대로 돌아가는 경우, 스타일 속성 제거
    } else {
        add.style.color = "red"; // 빨간색으로 변경
    }
    
  isRed = !isRed; // isRed 변수 값을 반대로 변경
});

