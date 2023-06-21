// setAttribute("속성","값")
// getAttribute("속성")

var a = document.querySelectorAll('a');

for(var i=0; i<a.length; i++) {
    a[i].style.backgroundColor=a[i].getAttribute('value');
}

for(var i=0; i<a.length; i++){
    a[i].setAttribute('index',i);
}

// data-    사용자정의속성  dataset 속성
// a태그를 클릭하면 data-color속성을 읽어들여서 글자색 변경
for(var i=0; i<a.length; i++) {
    a[i].addEventListener("click",function() {
        // this.style.color=this.getAttribute('data-color');
        this.style.color=this.dataset.color;
        this.innerHTML=this.dataset.coffeeName;
    });
}

// innerHTML, textContent
// h1.innerHTML="<span>hi</span>" -> 태그적용됨
// h1.textContent="<span>hi</span>" -> 태그적용안됨(그대로 화면에 보여짐)

// 버튼을 하나 만들어서 클릭했을때
// 리스트 목록이 추가되는 예제

var btn = document.querySelectorAll('button');
var str='';
str+="<ul>";
str+="<li>Javascript</li>"
str+="<li>jQuery</li>"
str+="<li>Ajax</li>"
str+="</ul>";

var box=document.getElementById('box');

btn[0].onclick=addList;

function addList() {
    box.innerHTML=str;
}

// 리스트제거버튼, 리스트토글버튼


btn[1].onclick=delList;

function delList() {
    box.innerHTML='';
}

btn[2].onclick=togList;

var i=0;
function togList() {
    i%2==0 ? addList() : delList();
    // 삼항연산자
    // if(j%2==0) {
    //     addList();
    // } else {
    //     delList();
    // }
    i++;
}
