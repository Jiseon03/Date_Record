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
let coupleNameWarn = document.querySelector('.couple-name-warn');
let monthSelect = document.querySelector('.month-Select')

//오늘 날짜
let today  = new Date();
let currentYear = today.getFullYear();

//년, 월, 일 선택 옵션 추가하기
for(let i=currentYear;i>=1920;i--){
    coupleYear.insertAdjacentHTML('beforeend',`<option value="${i}">${i}</option>`)
}
for(let i=1;i<=12;i++){
    coupleMonth.insertAdjacentHTML('beforeend',`<option value="${i}" class="month-Select">${i}</option>`) 
}

//윤년 구현
//월마다 일수가 다른것 구현
coupleMonth.addEventListener('click',function(){
    console.log(coupleYear.value);
    let cy = coupleYear.value;
    let cv = coupleMonth.value;
    if(cv == 1 || cv==3 || cv==5 || cv==7 || cv==8 || cv==10 || cv==12){
        console.log('yes');
        coupleDate.innerHTML = '';
        for(let i=1;i<=31;i++){
                coupleDate.insertAdjacentHTML('beforeend',`<option value="${i}">${i}</option>`)};
    }else if(cv==4|| cv==6 || cv==9 || cv==11){
        coupleDate.innerHTML = '';
        for(let i=1;i<=30;i++){
            coupleDate.insertAdjacentHTML('beforeend',`<option value="${i}">${i}</option>`)};
    }else{
        coupleDate.innerHTML = '';
        if(cy%4==0){
            for(let i=1;i<=29;i++){
                    coupleDate.insertAdjacentHTML('beforeend',`<option value="${i}">${i}</option>`)};
            }else{
                for(let i=1;i<=28;i++){
                    coupleDate.insertAdjacentHTML('beforeend',`<option value="${i}">${i}</option>`)};
            }
        
    }

})



console.log(monthSelect);
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

let main = document.querySelector('main');
//card에 내용 추가
function addContent(content){
    addTxt.innerHTML = '';
    main.insertAdjacentHTML('beforeend',content);
}

coupleSubmitBtn.addEventListener('click',function(e){
    e.preventDefault();
    if(coupleName.value == ''){
        show(coupleNameWarn);   //입력 유효성 검사
    }else{
        remove(coupleNameWarn);
        let coupleDay = createDate(coupleYear,coupleMonth,coupleDate);
        let cardContent = `<div class="card">
                            <div class = card-title>
                                <h1 class="card-name">${coupleName.value}</h1>
                                <div class="card-day">${coupleYear.value}년 ${coupleMonth.value}월 ${coupleDate.value}일</div>
                            </div>
                            <p class="card-txt">만난지 <span>${diffDate(coupleDay,today)}</span>일 째♥</p>
                        </div>`
        addContent(cardContent);
    }
    
    
    
    // for(i=100;i<1001;i+=100){
    //     console.log(날짜계산(coupleDay,i));
    //   }
    
})

function 날짜계산(anniver,num){
    let now1 = new Date(anniver);	// 현재 날짜 및 시간
    let fulldate = new Date(now1.setDate(now1.getDate() + (num-1)));
    let year = fulldate.getFullYear();
    let month = fulldate.getMonth()+1;
    let date = fulldate.getDate();
  
    return ` 만난지 ${num}일 째 : ${year}년 ${month}월 ${date}일 입니다.`;
}
  

//   function 날짜계산(num){
//     let now1 = new Date();	// 현재 날짜 및 시간
//     let fulldate = new Date(now1.setDate(now1.getDate() + num));
//     let month = fulldate.getMonth()+1;
//     let date = fulldate.getDate();
  
    //return ` ${num}일 후는 ${month}월 ${date}일 입니다.`;
    
//   }



