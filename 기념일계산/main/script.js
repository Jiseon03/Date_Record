//팝업창 열고닫기
let addBtn = document.getElementById('add-btn');
let popup = document.querySelector('.which-day-popup');
let blackBg = document.querySelector('.black-bg');
addBtn.addEventListener('click',function(){
    popup.classList.add("is-active")
})
blackBg.addEventListener('click',function(){
    popup.classList.remove("is-active")
})

//커플 버튼 눌렀을 때 날짜 선택 보여주기
let selectSection = document.querySelector('.select-section')
let coupleBtn = document.getElementById('couple-btn');
let couple = document.querySelector('.couple')
coupleBtn.addEventListener('click',function(){
    couple.classList.add("is-active")
    selectSection.classList.add('is-none');
})

//커플 날짜 제출 시
let coupleSubmitBtn = document.getElementById('couple-submit');
let addTxt = document.querySelector('.add-txt');
let addDday = document.querySelector('.add-D-day');
let coupleName = document.getElementById('couple-name');
let coupleYear = document.getElementById('couple-year');
let coupleMonth = document.getElementById('couple-month');
let coupleDate = document.getElementById('couple-date');



coupleSubmitBtn.addEventListener('click',function(e){
    e.preventDefault();
    addTxt.innerHTML = '';
    addDday.insertAdjacentHTML('beforeend',`<div>${coupleName.value}</div>
                                            <div>${coupleYear.value}년 ${coupleMonth.value}월 ${coupleDate.value}일</div>`);
    
})


function 날짜계산(num){
    let now1 = new Date();	// 현재 날짜 및 시간
    let fulldate = new Date(now1.setDate(now1.getDate() + num));
    let month = fulldate.getMonth()+1;
    let date = fulldate.getDate();
  
    return ` ${num}일 후는 ${month}월 ${date}일 입니다.`;
    
  }
  
  console.log(날짜계산(100));