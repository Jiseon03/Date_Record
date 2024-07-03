/**is-active 클래스를 추가해 컨텐츠를 보여주는 함수*/
function show(content) {
    content.classList.add("is-active");
}
/**is-active 클래스를 제거해 컨텐츠를 숨겨주는 함수*/
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

//시험 버튼 눌렀을 때 시험 모달창 보여주기
let testBtn = document.getElementById('test-btn');
let test = document.querySelector('.test')
testBtn.addEventListener('click',function(){
    show(test);
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
let coupleDateWarn = document.querySelector('.couple-date-warn');


//오늘 날짜
let today  = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth()+1;
let currentDate = today.getDate();


//년, 월, 일 선택 옵션 추가하기
for(let i=currentYear;i>=1920;i--){
    coupleYear.insertAdjacentHTML('beforeend',`<option value="${i}">${i}</option>`)
}
for(let i=1;i<=12;i++){
        coupleMonth.insertAdjacentHTML('beforeend',`<option value="${i}" class="month-Select">${i}</option>`) 
}
for(let i=1;i<=31;i++){
    coupleDate.insertAdjacentHTML('beforeend',`<option value="${i}">${i}</option>`)
};   

//윤년 구현
//월마다 일수가 다른것 구현
    let cy = coupleYear.value;
    let cm = coupleMonth.value;
    console.log(cy,cm);
    if(cm == 1 || cm==3 || cm==5 || cm==7 || cm==8 || cm==10 || cm==12){
        coupleDate.innerHTML = '';
        for(let i=1;i<=31;i++){
                coupleDate.insertAdjacentHTML('beforeend',`<option value="${i}">${i}</option>`)
            };
    }else if(cm==4|| cm==6 || cm==9 || cm==11){
        coupleDate.innerHTML = '';
        for(let i=1;i<=30;i++){
            coupleDate.insertAdjacentHTML('beforeend',`<option value="${i}">${i}</option>`)};
    }
    
    
coupleYear.addEventListener('change',function(){  
    if(cm==2){
        if(cy%4==0){
            coupleDate.innerHTML = '';
            for(let i=1;i<=29;i++){
                    coupleDate.insertAdjacentHTML('beforeend',`<option value="${i}">${i}</option>`)};
        }else{
            coupleDate.innerHTML = '';
            for(let i=1;i<=28;i++){
                    coupleDate.insertAdjacentHTML('beforeend',`<option value="${i}">${i}</option>`)};
            } 
    }
        
})
      

/**년,월,일 입력한 값을 받아서 Date 객체 생성해주는 함수*/
function createDate(year,month,date){
    let inputDate = `${year.value}-${month.value}-${date.value}`;
    let newDate = new Date(inputDate);
    return newDate;
}

/**date 객체 2개를 받아서 날짜 간 간격을 계산해주는 함수*/
function diffDate(day1,day2){
    let diffDate = day1.getTime() - day2.getTime();
    // let diffDateResult = Math.ceil(Math.abs(diffDate / (1000 * 60 * 60 * 24)));
    let diffDateResult = Math.ceil(diffDate / (1000 * 60 * 60 * 24));
    return diffDateResult;
}

let main = document.querySelector('main');

/**main section(HTML)에 content를 추가해주는 함수*/
function addContent(content){
    addTxt.innerHTML = '';
    main.insertAdjacentHTML('beforeend',content);
}

/**couple - card 추가 */
coupleSubmitBtn.addEventListener('click',function(e){
    e.preventDefault();
    let coupleDay = createDate(coupleYear,coupleMonth,coupleDate);
    let cardContent = `<div class="card">
                            <div class = card-title>
                                <h1 class="card-name">${coupleName.value}</h1>
                                <div class="card-day">${coupleYear.value}년 ${coupleMonth.value}월 ${coupleDate.value}일</div>
                            </div>
                            <p class="card-txt">만난지 <span>${diffDate(today,coupleDay)}</span>일 째♥</p>
                        </div>`

    //입력 유효성 검사  
    let check1 = check2 = false;                  
    if(coupleName.value == ''){ //제목을 입력하지 않았을 때
        show(coupleNameWarn);   
    }else{
        remove(coupleNameWarn);
        check1 = true;
    }
    
   if(diffDate(today,coupleDay)<0){ //미래의 날짜를 입력했을 때
        show(coupleDateWarn);
    }else{
        remove(coupleDateWarn);
        check2 = true;
        
    }

    if(check1&&check2){
        addContent(cardContent);
        remove(couple)
        show(selectSection)
        remove(popupBg);
    }
    
    console.log(coupleDay);
    console.log(calcAnniversary(coupleDay,100));
    
})


/**test - card 추가 */
let testSubmitBtn = document.getElementById('test-submit');
let testTitle = document.getElementById('test-name');
let testYear = document.getElementById('test-year');
let testMonth = document.getElementById('test-month');
let testDate = document.getElementById('test-date');
let testNameWarn = document.querySelector('.test-name-warn');
let testDateWarn = document.querySelector('.test-date-warn');
console.log(testYear);
testSubmitBtn.addEventListener('click',function(e){
    e.preventDefault();
    let testDay = createDate(testYear,testMonth,testDate);
    let cardContent = `<div class="card">
                            <div class = card-title>
                                <h1 class="card-name">${testTitle.value}</h1>
                                <div class="card-day">${testYear.value}년 ${testMonth.value}월 ${testDate.value}일</div>
                            </div>
                            <p class="card-txt">D - ${diffDate(testDay,today)}</p>
                        </div>`

    //입력 유효성 검사  
    let check1 = check2 = false;                  
    if(testTitle.value == ''){ //제목을 입력하지 않았을 때
        show(testNameWarn);   
    }else{
        remove(testNameWarn);
        check1 = true;
    }
    
   if(diffDate(today,testDay)>0){ //과거의 날짜를 입력했을 때
        show(testDateWarn);
    }else{
        remove(testDateWarn);
        check2 = true;
        
    }

    if(check1&&check2){
        addContent(cardContent);
        remove(test)
        show(selectSection)
        remove(popupBg);
    }
    
    console.log(testDay);
    console.log(calcAnniversary(testDay,100));
    
})
/** 기념일(anniver)을 기준으로 몇일(num)지났는지 알려주는 함수*/
function calcAnniversary(anniver,num){
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



