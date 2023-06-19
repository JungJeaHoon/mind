
/*
이메일 한글 안됨
1.이메일,에러시 메세지 변수지정
2.이메일에 이벤트 주는 함수 작성
    - 이메일 벨류값 받아오는 변수 지정
    -이메일이 한글을 제거하는 함수를 변수 지정
    -if 입력값에 한글이 아직 남아있어??색바꾸고 디스플레이 보여주고!
    -만약 아니라면 다시 반대...
*/
const email =document.querySelector('.email');
const emailError =document.querySelector('.emailError');

email.addEventListener('input',function(){
    const emailValue = email.value;
    const checkEmail = emailValue.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');//한글문자제거식
    console.log('checkEmail?',checkEmail)

    if(emailValue !== checkEmail){   
        email.value = checkEmail;
        emailError.textContent = '이메일에는 한글을 포함 할수 없습니다';
        emailError.style.display = 'block';
        emailError.style.color = 'red';
        emailError.style.fontSize = 11 + 'px';
    }else{
        emailError.textContent = '';
        emailError.style.display ='none';
    }
});

/*
이메일 적합한지
1.이메일에 이벤트 실행
2.입력값,이메일적합성 변수 지정
3.if 문 작성
    -입력된 이메일이 적합성에 맞지않을경우.각종 에러메세지 등장
    -정상일경우 원래대로
*/
email.addEventListener('blur',()=>{
    const emailValue = email.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!emailRegex.test(emailValue)){
        emailError.textContent = '입력예시(djsagh@gmail.com)';
        emailError.style.display = 'block';
        emailError.style.color = 'red';
        emailError.style.fontSize = 11 + 'px';
    }else{
        emailError.textContent = '';
        emailError.style.display = 'none';
    }
})


/*
비밀번호 체크하자
1. 인풋 변수 지정, 비밀번호 정규식패턴 변수
2.인풋에 이벤트발생
3.인풋 입력값 벨류 지정
4. if 정규식 패턴 일치 안해? 그럼 경고
5. else 아님 반대
*/


const password = document.querySelector('.password');
const passwordError = document.querySelector('.passwordError');
const repassword = document.querySelector('.repassword');
const repasswordError = document.querySelector('.repasswordError');

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;  
//비밀번호 정규식검사 8자리이상.대소문자,숫자 한개이상 포함


password.addEventListener('input',()=>{
    const passwordValue = password.value;
    console.log('passwordValue',passwordValue)

    if(!passwordRegex.test(passwordValue)){
        passwordError.textContent = '비밀번호는 영문자와 숫자를 포함하여 8자 이상이어야 합니다.';
        passwordError.style.display = 'block';
        passwordError.style.color = 'red';
        passwordError.style.fontSize = 11 + 'px';
    }else{
        passwordError.textContent = '';
        passwordError.style.display = 'none';
    }
})

repassword.addEventListener('input',()=>{
    const passwordValue = password.value;
    const repasswordValue = repassword.value; 

    if(passwordValue !== repasswordValue){
        repasswordError.textContent = '비밀번호가 일치하지 않습니다';
        repasswordError.style.display = 'block';
        repasswordError.style.color = 'red';
        repasswordError.style.fontSize = 11 + 'px';
    }else{
        repasswordError.textContent = '';
        repasswordError.style.display = 'none';
    }
})



/*
버튼전송
1.버튼 상수 정하기
2.이벤트 걸기
3.입력값 상수 설정
4.if문 - 입력란이 비어있는지? 에러인지 확인 후
5.입력값 각각 에러일경우 메세지를 띄워라
6.로컬에 정보 저장
7.다음 페이지 이동코드 
*/

const account_btn =  document.querySelector('.account_btn');

account_btn.addEventListener('click', ()=>{
    const emailValue = email.value;
    const passwordValue = password.value;
    const repasswordValue = repassword.value;

    if(
        emailValue === '' ||
        passwordValue === ''||
        repasswordValue === '' ||
        emailError.style.display === 'block' ||
        passwordError.style.display === 'block' ||
        repasswordError.style.display === 'block' 
    ) {
        if(emailValue === ''){
            emailError.textContent = '이메일을 입력해주세요';
            emailError.style.display = 'block';
            emailError.style.color = 'red';
            emailError.style.fontSize = 11 + 'px';
        }
        if(passwordValue === ''){
            passwordError.textContent = '비밀번호를 입력해주세요';
            passwordError.style.display = 'block';
            passwordError.style.color = 'red';
            passwordError.style.fontSize = 11 + 'px';
        }
        elert('입력값을 확인해 주세요');
    }else{// 로컬 스토리지에 회원 정보 저장
        localStorage.setItem('email',emailValue)
        localStorage.setItem('password',passwordValue)
        localStorage.setItem('repassword',repasswordValue)

        //다음 페이지 이동 코드
        window.location.href = 'login2.html';
    }
})














