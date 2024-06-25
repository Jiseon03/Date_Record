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
let coupleDateWarn = document.querySelector('.couple-date-warn');
let numberWarn = document.querySelector('.number-warn');
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

let main = document.querySelector('main');
//card에 내용 추가
function addContent(content){
    addTxt.innerHTML = '';
    main.insertAdjacentHTML('beforeend',content);
}
//let 모두작성 = (coupleName.value != 0) && (coupleYear.value != 0) && (coupleMonth.value != 0) && (coupleDate.value != 0);
//let 모두숫자 = (isNaN(coupleYear.value)==false) && (isNaN(coupleMonth.value)==false) && (isNaN(coupleDate.value)==false);
//isNaN -> 숫자이면 'false'반환 숫자가 아닌 다른 것 'true'반환
coupleSubmitBtn.addEventListener('click',function(e){
    e.preventDefault();
    console.log(isNaN(coupleYear.value));
    console.log(isNaN(coupleMonth.value));
    console.log(isNaN(coupleDate.value));
    
    //네가지 입력칸을 모두 작성했을 경우
    if((coupleName.value != 0) && (coupleYear.value != 0) && (coupleMonth.value != 0) && (coupleDate.value != 0)&&(isNaN(coupleYear.value)==false) && (isNaN(coupleMonth.value)==false) && (isNaN(coupleDate.value)==false)){
        remove(coupleNameWarn);
        remove(coupleDateWarn);
        
        let coupleDay = createDate(coupleYear,coupleMonth,coupleDate);
        let cardContent = `<div class="card">
                            <div class = card-title>
                                <h1 class="card-name">${coupleName.value}</h1>
                                <div class="card-day">${coupleYear.value}년 ${coupleMonth.value}월 ${coupleDate.value}일</div>
                            </div>
                            <p class="card-txt">만난지 <span>${diffDate(coupleDay,today)}</span>일 째♥</p>
                        </div>`
        addContent(cardContent);
    }else{//네가지 중 한가지라도 작성하지 않았을 경우

        
        if(coupleName.value == 0){//제목을 입력 안했을 떄
            show(coupleNameWarn);
        }
        else{
            remove(coupleNameWarn);
        }

        if(coupleYear.value==0 || coupleMonth.value==0 || coupleDate.value==0){//날짜만 입력 안했을 때(년,월,일 중 하나라도)
            show(coupleDateWarn);
             
        }

        if((isNaN(coupleYear.value))||(isNaN(coupleMonth.value))||(isNaN)(coupleDate.value)){//년월일이 숫자로 작성되지 않은 경우
            show(numberWarn);
        }else{
            remove(numberWarn)
        }
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



