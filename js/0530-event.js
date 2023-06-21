// window.onload=function(){ }
// load 이벤트 이름, 이벤트 타입
// onload 이벤트 속성
// 할당된함수 : 이벤트리스너, 이벤트핸들러
// 이벤트 연결한다.

// 이벤트 관련속성
// click, mouseover, mouseenter, focus

// 이벤트 모델
// DOM Level 0
// 인라인 이벤트 모델, 기본 이벤트 모델(고전이벤트)
// 한 객체에 두번이상 적용할 수 없다.

// DOM Level 2
// 표준 이벤트 모델, 익스플로러 이벤트 모델
// addEventListener(type,listener,false)
// attachEvent

// 익스플로러면 attachEvent를 사용하고
// 그외에는 addEventListener를 사용해라
// 크로스브라우징위한 코드구현하자.

// 이벤트 제거
header.onclick=function(e) {
    console.log(this);
    console.log(window.event); // e, window.event(고전)
    var event=e || window.event;

    header.onclick = null; // 이벤트 제거
    for(var key in e) {
        box.innerHTML += `<p>${key} : ${e[key]} </p>`
    }
    console.log(e.target); // 자식
    console.log(e.currentTarget); // 부모
}

// 이벤트 강제실행
a.onclick=function() {
    ca.innerHTML = Number(ca.innerHTML)+1
}
b.onclick=function() {
    cb.innerHTML = parseInt(cb.innerHTML)+1
    a.onclick(); // 강제실행
}
// 자동실행
var stop=setInterval(b.onclick,1000);
c.onclick=function() {
    clearInterval(stop);
}
d.onclick=function() {
    stop=setInterval(b.onclick,1000);
}
// 기본이벤트제거
// 이벤트전달제거
// preventDefault();
// stopPropagation();

// 기본이벤트 -> a태그 클릭
// form -> submit
// daum.onclick=function(e) {
//     this.style.background='pink';
//     // e.preventDefault();
//     // return false;
// }

daum.addEventListener('click',function() {
    this.style.background='pink';
});

function naver() {
    naver2.style.background='red';
    return false;
}
// 한글입력시에 전송한다.
form.onsubmit=function(e) {
    var val=name2.value;
    if(val==""){
        alert("공백은 안됩니다");
        e.preventDefault();
    }
    if(val.replace(/[가-힣]/g,"").length==0){
        return true; // 다음단계로 실행
    }else{
        // return false;
        alert("한글이름을 입력하세요");
        e.preventDefault();
    }
}

form.addEventListener('submit',function(e) {
    if(val.replace(/[가-힝]/g,"").length==0){
        return true;
    }else{
        // return false;
        alert("한글이름을 입력하세요");
        e.preventDefault();
    }
})

// 이벤트 전달(버블링/캡쳐링)
// 이벤트버블링 : 자식 -> 부모
// 이벤트캡쳐링 : 부모 -> 자식
// eventPhase

// button.addEventListener('click',function(e) {
//     console.log(e.eventPhase);
// },false);
// field.addEventListener('click',function(e){
//     console.log(e.eventPhase);
// },false);
// body.addEventListener('click',function(e){
//     console.log(e.eventPhase);
// },true);
// html.addEventListener('click',function(e){
//     console.log(e.eventPhase);
// },true);

// 1 -> 캡처링, 2 -> target, 3 -> 버블링

function handler(e) {
    var phase=['캡쳐링','타겟','버블링'];
    console.log(e.target.nodeName,this.nodeName,phase[e.eventPhase-1]);
}

// button.addEventListener('click',handler,true);
// field.addEventListener('click',handler,true);
// body.addEventListener('click',handler,true);
// html.addEventListener('click',handler,true);

// e.target.nodeName -> e.target 최종자식 엘리먼트
// this.nodeName -> e.currentTarget 이벤트가 호출된 엘리먼트(부모)

button.addEventListener('click',handler,false);
field.addEventListener('click',handler,false);
body.addEventListener('click',function(e) {
    e.stopPropagation();
},false);
html.addEventListener('click',handler,false);
// 이벤트 전달방지
// event.stopPropagation();
// 이벤트 버블링 제거
// 익스플로러 -> event.cancelBubble=ture;

a2.onclick=function(e) {
    this.style.background='gold';
    e.stopPropagation();
    return false;
}
p2.onclick=function(e) {
    this.style.background='cyan';
    e.stopImmediatePropagation();
}
div2.onclick=function() {
    this.style.background='pink';
}