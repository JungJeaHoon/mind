
const gnbBtn = document.querySelector('.gnbBtn');
const gnb_open = document.querySelector('.gnb_open');
const dark = document.querySelector('.dark');


console.log(dark)

//gnb가 왼쪽에서 튀어나오게
gnbBtn.addEventListener('click',()=>{
    gnb_open.style = `transform: translateX(0)`;
    dark.style.display = 'block';
})

//gnb가 왼쪽으로 들어가게

dark.addEventListener('click',()=>{
    gnb_open.style = `transform: translateX(-100%)`;
    dark.style.display = 'none';
})




/************************ section3 슬라이드 ***********************************/

let swiper = new Swiper(".mySwiper", {//두개쓰려면 mySwiper 얘를 바꿔라
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        
        310: {
            slidesPerView: 2,  //브라우저가 768보다 클 때
        },
        560: {
            slidesPerView: 3,  //브라우저가 1024보다 클 때
        },
    },
    
});