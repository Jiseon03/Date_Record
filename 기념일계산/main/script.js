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
coupleSubmitBtn.addEventListener('click',function(e){
    e.preventDefault();
    addTxt.innerHTML = '';
    addDday.insertAdjacentHTML('beforeend',`<div>안녕하세야</div>`);
})