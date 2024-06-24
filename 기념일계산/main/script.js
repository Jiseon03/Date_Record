//is-active 클래스를 이용해 컨텐츠를 보여주고 숨겨주는 함수
function show(content) {
    content.classList.add("is-active");
}
function remove(content) {
    content.classList.remove("is-active");
}

//팝업창 열고닫기
let addBtn = document.getElementById('add-btn');
let popupBg = document.querySelector('.popup-bg');
addBtn.addEventListener('click',function(){
    show(popupBg);
})
popupBg.addEventListener('click',function(e){
    //이벤트 버블링 방지 -> popupBg를 눌렀을 때만 실행
    if(e.target == popupBg){
        remove(popupBg);
    }
})

//커플 버튼 눌렀을 때 커플 모달창 보여주기
let selectSection = document.querySelector('.select-section')
let coupleBtn = document.getElementById('couple-btn');
let couple = document.querySelector('.couple')
coupleBtn.addEventListener('click',function(){
    show(couple);
    remove(selectSection);
})

//커플 모달창 입력 값 제출 시
let addTxt = document.querySelector('.add-txt');
let card = document.querySelector('.card');
let coupleName = document.getElementById('couple-name');
let coupleYear = document.getElementById('couple-year');
let coupleMonth = document.getElementById('couple-month');
let coupleDate = document.getElementById('couple-date');
let coupleSubmitBtn = document.getElementById('couple-submit');
//오늘 날짜
let today  = new Date();

//년,월,일 입력한 값을 받아서 Date 객체 생성
function createDate(year,month,date){
    let inputDate = `${year.value}-${month.value}-${date.value}`;
    let newDate = new Date(inputDate);
    return newDate;
}

//date 객체 2개를 받아서 날짜간 간격 계산하기
function diffDate(day1,day2){
    let diffDate = day1.getTime() - day2.getTime();
    let diffDateResult = Math.ceil(Math.abs(diffDate / (1000 * 60 * 60 * 24)));
    return diffDateResult;
}

//card에 내용 추가
function addContent(content){
    addTxt.innerHTML = '';
    card.insertAdjacentHTML('beforeend',content);
}

coupleSubmitBtn.addEventListener('click',function(e){
    e.preventDefault();
    let coupleDay = createDate(coupleYear,coupleMonth,coupleDate);

    let cardContent = `<div>${coupleName.value}</div>
                     <div>${coupleYear.value}년 ${coupleMonth.value}월 ${coupleDate.value}일</div>
                     <div>만난지 ${diffDate(coupleDay,today)}일 째</div>`

    addContent(cardContent);
    
})


function 날짜계산(num){
    let now1 = new Date();	// 현재 날짜 및 시간
    let fulldate = new Date(now1.setDate(now1.getDate() + num));
    let month = fulldate.getMonth()+1;
    let date = fulldate.getDate();
  
    return ` ${num}일 후는 ${month}월 ${date}일 입니다.`;
    
  }
  
