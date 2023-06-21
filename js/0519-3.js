img.style.width="200px";
img.style.height="200px";

var i = 0; // 전역변수
function change() {
    if(i % 2 == 0)
    img.src="./imgs/HDI.jpg";
    else {
        img.src="./imgs/SJG.png";
    }
    i++;
}

// 클로저, 내부함수호출

function hide() {
    img.style.visibility="hidden";
}
function show() {
    img.style.visibility="visible";
}
function changeStyle() {
    var h2=document.querySelector('h2');
    h2.style.backgroundColor='pink';
    h2.style.fontStyle='italic';
    h2.style.color='red';
    h2.style.fontSize='30px';
    // h2.style={
    //     backgroundColor:'pink',
    //     fontStyle:'italic',
    //     color:'red',
    //     fontSize:'30px',
    //     boxShadow:"3px 3px gray",
    // }
}
