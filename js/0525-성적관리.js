// 1. 생성자 함수 선언
// 2. 학생배열제작
// 3. 전체학생출력

function Student(name,html,css,js,java) {
    this.name=name;
    this.html=html;
    this.css=css;
    this.js=js;
    this.java=java;

    this.getSum=function() {
        return this.html+this.css+this.js+this.java
    }
    this.getAvg=function() {
        return this.getSum()/4
    }
    // toString override
    this.toString=function() {
        return this.name + " " + this.getSum() + " " + this.getAvg()
    }
}

// 학생 정보 데이터
var Students=[];
Students.push(new Student('연태',100,95,90,100));
Students.push(new Student('원빈',90,95,90,80));
Students.push(new Student('동건',80,90,80,80));
Students.push(new Student('호동',60,65,90,60));
Students.push(new Student('재석',100,85,80,95));
Students.push(new Student('유리',90,75,100,80));
Students.push(new Student('태연',80,85,80,80));
Students.push(new Student('정재',60,55,100,70));
Students.push(new Student('시원',100,70,60,80));
Students.push(new Student('아라',60,65,80,90));
Students.push(new Student('지연',70,55,60,70));

// 전체 성적
function allStudent() {
    var output="이름 총점 평균 <br> <hr>";
    for(var i in Students) {
        output += (parseInt(i)+1) + " : " + Students[i].toString()+"<br>";
    }
    output += "<hr>";
    list.innerHTML=output;
}
// 장학금 1등~3등
function goodStudent() {
    var output="이름 총점 평균 <br> <hr>";
    var Students2=Students.sort(function (a,b) {
        return b.getSum() - a.getSum();
    }).slice(0,3);


    for(var i in Students2) {
        output += (parseInt(i)+1) + " : " + Students2[i].toString()+"<br>";
    }
    output += "<hr>";
    list.innerHTML=output;
}
// 퇴학생 뒤에서 3명
function badStudent() {
    var output="이름 총점 평균 <br> <hr>";
    var Students3=Students.sort(function (a,b) {
        return a.getSum() - b.getSum();
    }).slice(0,3);


    for(var i in Students3) {
        output += (parseInt(Students.length)-i) + " : " + Students3[i].toString()+"<br>";
    }
    output += "<hr>";
    list.innerHTML=output;
}
// 장려상 4~6등
function sosoStudent() {
    var output="이름 총점 평균 <br> <hr>";
    var Students4=Students.sort(function (a,b) {
        return b.getSum() - a.getSum();
    }).slice(3,6);


    for(var i in Students4) {
        output += (parseInt(i)+4) + " : " + Students4[i].toString()+"<br>";
    }
    output += "<hr>";
    list.innerHTML=output;
}

function del() {
    Students.splice(0,1)

    var output="이름 총점 평균 <br> <hr>";
    for(var i in Students) {
        output += (parseInt(i)+1) + " : " + Students[i].toString()+"<br>";
    }
    output += "<hr>";
    list.innerHTML=output;
}

function reload() {
    location.reload();
}

var time=document.getElementById('time');

var date=new Date();
var year=date.getFullYear();
var month=date.getMonth()+1;
var day=date.getDate();
var 요일=date.getDay();

switch(요일) {
    case 0: 요일 = "일요일"
    break;
    case 1: 요일 = "월요일"
    break;
    case 2: 요일 = "화요일"
    break;
    case 3: 요일 = "수요일"
    break;
    case 4: 요일 = "목요일"
    break;
    case 5: 요일 = "금요일"
    break;
    case 6: 요일 = "토요일"
    break;
}

time.innerHTML=year+"년 " + month + "월 " + day + "일 " + 요일;

setInterval(function() {
    time2.innerHTML=new Date().toLocaleTimeString()
},1000)


