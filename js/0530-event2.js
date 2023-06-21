// div.addEventListener('click',function() {
//     console.log("div Click");
// });
// span.addEventListener('click',function() {
//     console.log("span Click");
// });
// btn.addEventListener('click',function() {
//     console.log("btn Click");
// });

// 이벤트위임구현
// div.addEventListener('click',function(e) {
//     var id=e.target.id;
//     console.log(e.currentTarget);
//     console.log(e.target);
//     var tagName=e.target.tagName;
//     if(tagName=="div"){
//         console.log("div Click");
//     }else if(tagName=="span"){
//         console.log("span Click");
//     }else if(tagName=="btn"){
//         console.log("btn Click");
//     }
// });

document.addEventListener('click', function(e){
    //console.log(e.srcElement);
    var target=e.target || e.srcElement;

    if(e.target.tagName=="DIV") {
        console.log("div Click");
    } else if(e.target.tagName=="SPAN") {
        console.log("span Click");
    } else if(e.target.tagName=="BUTTON") {
        console.log("btn cliek");
    }
});

// 키보드관련 이벤트
// event.keyCode
// String.fromCharCode()

window.onkeydown=function(e) {
    console.log(e.keyCode);
    console.log(String.fromCharCode(e.keyCode));
    if(e.keyCode==65) {
        document.querySelector('body').style.background='red';
    }
    if(e.keyCode==66) {
        document.querySelector('body').style.background='blue';
    }
    if(e.keyCode==67) {
        document.querySelector('body').style.background='lime';
    }
    if(e.keyCode==68) {
        document.querySelector('body').style.background='pink';
    }
}

window.onload=function() {
    var count=0;
    var image=document.getElementById('image');
    var frames= [
        'SJG.png', 'cat.jpg', 'cat2.jpg', 'dog.jpg', 'dog2.jpg', 'daram.png', 'dochi.jpg', 'HDI.jpg', 'cala.jpg', 'capu.jpg', 'coffe.jpg', 'milk2.jpg', 'milk.jpg', 'sns1.jpg'
    ];

    setInterval(function() {
        image.src ="./imgs/" +  frames[count % frames.length];
        image.width=200;
        image.height=200;
        count=count+1;
    },1000);
}

var outer=document.querySelector('.outer');
var inner=document.querySelector('.inner');

outer.onmouseover=function() {
    document.body.append("<h1>mouseover</h1>");
}
outer.onmouseout=function() {
    document.body.append("<h1>mouseout</h1>");
}
outer.onmouseenter=function() {
    document.body.append("<h1>mouseenter</h1>");
}
outer.onmouseleave=function() {
    document.body.append("<h1>mouseleave</h1>");
}
// over는 이벤트 버블링이 적용
// enter는 안에 있는지 여부만 따짐

window.onload = function() {
    var input1 = document.querySelectorAll('input')[0];
    var input2 = document.querySelectorAll('input')[1];

    input1.onkeydown = function() {
        if(input1.value.length>=6) {
            input2.focus();
        }
    }

    input2.onkeydown = function(e) {
        // var e = e || window.event
        if(input2.value.length==0 && e.keyCode == 8) {
            input1.focus();
        }
    }
}

window.onload=function() {
    var form1=document.f1;
    var eventObj;
    document.onmousemove=function(e) {
        eventObj=e?e:window.event;
        var cx=eventObj.clientX;
        var cy=eventObj.clientY;
        form1.client_x.value=cx;
        form1.client_y.value=cy;

        var px=eventObj.pageX;
        var py=eventObj.pageY;
        form1.pg_x.value=px;
        form1.pg_y.value=py;
    }
}