
//버튼으로 +,- 자리이동하기

// minus_btn 클릭 시 왼쪽으로 이동하는 이벤트 핸들러
document.querySelector(".minus_btn").addEventListener("click", function() {
    var progress = document.querySelector("#jb"); // progress 요소 선택
    var value = parseInt(progress.value); // 현재 value 값 가져오기
    if (value > 0) { // value가 0보다 큰 경우에만 이동
      progress.value = value - 1; // value를 1 감소시킴
    }
    });


    // add_btn 클릭 시 오른쪽으로 이동하는 이벤트 핸들러
document.querySelector(".add_btn").addEventListener("click", function() {
    var progress = document.querySelector("#jb"); // progress 요소 선택
    var value = parseInt(progress.value); // 현재 value 값 가져오기
    if (value < 100) { // value가 100보다 작은 경우에만 이동
      progress.value = value + 1; // value를 1 증가시킴
    }
    });





//progress를 사용자가 직접 움직일때
var progress = document.querySelector("#jb"); // progress 요소 선택
var isDragging = false; // 드래그 여부를 저장하는 변수
var startX = 0; // 드래그 시작 X 좌표
var startValue = 0; // 드래그 시작 시의 progress 값

// progress 요소를 드래그할 때 호출되는 이벤트 핸들러
function handleProgressDrag(event) {
  if (!isDragging) return; // 드래그 중이 아닐 경우 종료

  var offsetX = event.clientX - startX; // 드래그한 거리 계산
  var step = progress.offsetWidth / 100; // progress 요소의 너비를 100단계로 나눈 값

  var newValue = startValue + Math.round(offsetX / step); // 새로운 progress 값 계산
  newValue = Math.max(0, Math.min(100, newValue)); // 값이 0보다 작거나 100보다 크지 않도록 제한

  progress.value = newValue; // progress 값 설정
}

// progress 요소를 드래그 시작할 때 호출되는 이벤트 핸들러
progress.addEventListener("mousedown", function(event) {
  isDragging = true; // 드래그 시작
  startX = event.clientX; // 드래그 시작 X 좌표 저장
  startValue = parseInt(progress.value); // 드래그 시작 시의 progress 값 저장
});

// progress 요소를 드래그 중일 때 호출되는 이벤트 핸들러
document.addEventListener("mousemove", handleProgressDrag);

// progress 요소를 드래그 종료할 때 호출되는 이벤트 핸들러
document.addEventListener("mouseup", function() {
  isDragging = false; // 드래그 종료
});

// progress 요소를 터치하여 드래그 시작할 때 호출되는 이벤트 핸들러
progress.addEventListener("touchstart", function(event) {
  isDragging = true; // 드래그 시작
  startX = event.touches[0].clientX; // 드래그 시작 X 좌표 저장
  startValue = parseInt(progress.value); // 드래그 시작 시의 progress 값 저장
});

// progress 요소를 터치하여 드래그 중일 때 호출되는 이벤트 핸들러
document.addEventListener("touchmove", function(event) {
  handleProgressDrag(event.touches[0]); // 첫 번째 터치 이벤트 정보를 전달하여 handleProgressDrag 호출
});

// progress 요소를 터치하여 드래그 종료할 때 호출되는 이벤트 핸들러
document.addEventListener("touchend", function() {
  isDragging = false; // 드래그 종료
});






//되돌리기 아이콘 눌럿을때 리셋
var resetIcon = document.querySelector(".fa-solid.fa-rotate-left"); // 리셋 아이콘 선택

// 리셋 아이콘을 클릭할 때 호출되는 이벤트 핸들러
resetIcon.addEventListener("click", function() {
  progress.value = 0; // progress 값을 0으로 설정하여 리셋
});
