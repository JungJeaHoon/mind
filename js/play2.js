
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

//텍스트 써지게
// const textContainer = document.getElementById("textContainer");
// const text = "쳇바퀴처럼 돌아가는 일상속에서 나의 중심을 되찾을 수 있도록 기획된 음악영상입니다. '내마음대로 되는 게 하나도 없다'고 느끼거나 '아직 영상을 잘 모르겠다'면..음악이 이끄는대로 따라가며 내가 온전히 주인인 내면의 정원을 가꿔보세요";

// textContainer.classList.add("text-animation");
// textContainer.textContent = text;
