// Object.assign()
// Object.keys()
// Object.values()
// Object.entries()
// Object.fromEntries()

// 객체복제
// 얕은복사, 깊은복사
var user={
    name:"원빈",
    age:40,
}
var user2=user;
console.log(user);
console.log(user2);

user2.name="장동건";
console.log(user);
console.log(user2);
// 얕은 복사 - 메모리주소값 복사, 원본변경
console.log(user==user2);

var user3=Object.assign({},user);
console.log(user3);
console.log(user==user3);
user3.name="이정재";
console.log(user3);
console.log(user);
// 깊은복사 - 새로운 메모리 공간확보
// user와 user3은 같은 객체가 아니다.

var user4=Object.assign({gender:"남성"},user);
console.log(user4);

var user5={name:"강호동"}
var info1={나이:30}
var info2={성별 : "남성"}

var user6=Object.assign(user5,info1,info2);
console.log(user6);

// Object.keys() 키 배열 반환
// key value 쌍 형태
console.log(Object.keys(user6));
// Object.values() 값 배열 반환
console.log(Object.values(user6));
// Object.entries() 키/값을 배열 반환
console.log(Object.entries(user6));
console.log(user6);
var user7=Object.entries(user6);
console.log(user7); // 2차원 배열
console.log(user7[0][1]); // 강호동

// 배열을 객체로 변환
// Ojbect.fromEntries()
var user8=Object.fromEntries(user7);
console.log(user8);
// var user9=Object.fromEntries(user8);
// console.log(user9); // object is not iterable

function makeObj(key,val) {
    return{
        [key]:val
    }
}
// computed property
var obj=makeObj("나이",33);
console.log(obj);
var obj2=makeObj("성별","여성");
console.log(obj2);
var obj3=Object.assign({},obj,obj2);
console.log(obj3);

// 심볼
// 다른 사람이 만들어 놓은 객체에 영향을 주지 않고
// 속성을 추가할 수 있다.
// 특정 객체에 원본데이터를 건드리지 않고
// 속성을 추가한다.
// 유일한 프로퍼티를 추가할때 사용한다.
const id=Symbol("id입니다");

const user10={
    name:"원빈",
    age:30,
    [id] : "myid"
}

console.log(user10);
console.log(id.description);
console.log(user10[id]);

// 배열과 api
// sort() - 배열을 재정렬, 원본이 변경
// reduce()
var arr=[1,2,3,4,5,6,7,8];

// 배열의 모든 수 합치기
// for, for of, for in, forEach, reduce
console.time("start");
var result=0;
for(var i=0; i<arr.length; i++){
    result += arr[i];
}
console.log(result);
console.timeEnd("start");

console.time("start");
var result=0;
for(var i of arr) {
    result += i;
}
console.log(result);
console.timeEnd("start");

console.time("start");
var result=0;
for(var i in arr) {
    result += arr[i];
}
console.log(result);
console.timeEnd("start");

console.time("start");
var result=0;
arr.forEach(a => {
    result += a;
})
console.log(result);
console.timeEnd("start");

// reduce()
console.time("reduce");
var result=arr.reduce((prev,cur)=> {
    return prev+cur
},0);
console.log(result);
console.timeEnd("reduce");

console.time("reduce");
var result=arr.reduce((prev,cur)=> prev+cur);
console.log(result);
console.timeEnd("reduce");

// reduce 예문
var userList=[
    { name:"won1", age:10},
    { name:"won22", age:20},
    { name:"won333", age:30},
    { name:"won4444", age:40},
    { name:"won55555", age:50},
    { name:"won666666", age:60}
]
// age>30이상인 이름을 가져와라
var result=userList.reduce((prev,cur) => {
    if(cur.age>=40) {
        prev.push(cur.name);
    }
    return prev;
},[])
console.log(result);

// 모든 나이를 더해라
var result=userList.reduce((prev,cur) => {
    return prev+=cur.age;
},0)
console.log(result);

// map, filter, reduce, forEach
// 이름의 길이가 5개이상인 값을 출력
var result=userList.reduce((prev,cur) => {
    if(cur.name.length >= 5) {
        prev.push(cur.name);
    }
    return prev;
},[]) // 배열로 초기화
console.log(result);

// filter 메소드를 이용해서
// age가 40이상 출력
// name이 6글자이상 출력
var result=result.filter(name => name.length>=6);
console.log(result);

var arr=[10,20,30,40,50,60];

var result=arr.filter(a => {
    return a>=40;
});
console.log(result);


var result=userList.reduce((prev,cur) => {
    if(cur.age >= 10) {
        prev.push(cur.age)
    }
    return prev;
},[])
console.log(result);

var result=result.filter(age => age>=40);
console.log(result);

// 구조분해할당
// destructuring assignment
// 배열이나 객체의 속성을 분해해서 그 값을
// 변수에 담을 수 있게 하는 표현식 expression
// 문장은 statement

// 배열 구조분해
var [x,y]=[1,2]
console.log(x,y);
var 배우들=['원빈','장동건','이정재'];
var [배우1,배우2,배우3]=배우들;
console.log(배우1);
console.log(배우2);
console.log(배우3);
console.log(배우들[0]);

var 가수="소녀시대-원더걸스-BTS";
var [가수1,가수2,가수3,가수4]=가수.split("-");
console.log(가수1);
console.log(가수2);
console.log(가수3);
console.log(가수4);

// 변수 a=100, b=200
// a와 b의 값을 바꿔치기 해보자.
var a=100;
var b=200;
var c
console.log(a,b);

c=b;
b=a;
a=c
console.log(a,b);

[a,b]=[b,a]
console.log(a,b);

var x=100;
var y=200;
console.log("x = "+x);
console.log("y = "+y);

[x,y]=[y,x]
console.log("x = "+x);
console.log("y = "+y);

// 객체구조분해할당
var user={name:"welcome",age:40}
var { name, age} = user;
var name=user.name;
var age=user.age;
console.log(name);
console.log(age);

var {name:userName, age:userAge}=user;
console.log(userName);
console.log(userAge);
var userName=user.name;

var { name:name, age:age} = user;
var { name, age, gender="남성"} = user;
// 할당객체의 키이름이 같으면 하나로 줄일수 있다.
console.log(gender);

// 나머지 매개변수, 전개구문
// rest parameters
// ... 점 세개 찍어준다.

function showName(name) {
    document.write(name);
    document.write("<br>");
    console.log(name);
}

showName("원빈");
showName("원빈","장동건");
showName();
document.write("<hr>");

function showName2(name) {
    document.write(arguments.length);
    document.write("<br>");
    document.write(arguments[0]);
    document.write("<br>");
    document.write(arguments[1]);
    document.write("<br>");
}

showName2("원빈");
showName2("원빈","장동건");
showName2();

// 자바스크립트는 함수에 넘겨주는 인수의 제약이 없다.
// 인수를 넣는 방법이 두가지
// 1. arguments 객체로 접근하기
// 2. 나머지 매개변수를 사용하기
// 단, 화살표함수에는 argument가 없다.

document.write("<hr>");

function showName3(...name) {
    document.write(name+"<br>");
    console.log(name);
}
// rest parameter
showName3("원빈");
showName3("원빈","장동건");
showName3();
// 아무것도 전달하지 않으면 빈배열이 나타난다.

// 기본파라미터
function showName4(name) {
    var name=name || "강호동";
    // name값이 있으면 좌측항 실행, 없으면 우측항 실행
    document.write(name+"<br>");
    console.log(name);
}
showName4();
showName4('원빈');

// 기본파라미터 default parameter
function showName5(name="강호동") {
    document.write(name+"<br>");
    console.log(name);
}
showName5();
showName5('원빈');

// ES6 버젼
// var name=name && "강호동"
// name값이 있으면 강호동
// name값이 없으면 name으로

// 나머지 매개변수 에제
add(1,2,3);
document.write("<br>");
add(1,2,3,4,5,6,7,8,9);
function add(...num) {
    let result=0;
    num.forEach((num)=> (result+=num));
    document.write(result);
}
document.write("<br>");
add(1,2,3,4,5,6,7,8,9);

function add2(...num) {
    let result=num.reduce((prev,cur) => (prev+=cur));
    document.write(result);
}
document.write("<br>");
add2(1,2,3,4,5,6,7,8,9);
// reduce 줄이다

// 나머지매개변수 - 객체
function User(name, age, ...skills) {
    this.name=name;
    this.age=age;
    this.skills=skills;
    this.toString=function(){
        return this.name+"는 " + this.age + "이고 " + 
        this.skills+" 할수있다.";
    }
}
var user1=new User('연태',28,'html','css','javascript');
var user2=new User('유나',30,'html');
var user3=new User('동건',40,'html','css');
// user1 user2 user3 -> 인스턴스
document.write("<br>");
document.write(user1.toString()+"<br>");
console.log(user1);
console.log(user2);
console.log(user3);
document.write(user2.toString()+"<br>");
document.write(user3.toString()+"<br>");

// 전개구문 (spread syntax) : 배열

var arr1=[1,2,3];
var arr2=[4,5,6];
var arr3=[...arr1, ...arr2];

// arr.push(), arr.splice(), arr.concat()
// 넣고, 빼고, 병합
document.write(arr3);

// 전개구문 : 객체
var user={name:"mike"};
var mike={...user, age:20};
console.log(mike);

// 전개구문 : 복제
var arr4=[...arr];
console.log(arr4);
var user4={...user};
var user5={...mike};
console.log(user4);
console.log(user5);

// 상품리스트, 할일목록, 리스트추가
// 기존데이터 -> push()
var arr5=[1,2,3];
var arr6=[4,5,6];
arr6.forEach((num)=> {
    arr5.unshift(num);
})
console.log(arr5); // 6,5,4,1,2,3
// unshift <-> push, shift <-> pop

var arr5=[1,2,3];
var arr6=[4,5,6];
arr6.reverse().forEach((num)=> {
    arr5.unshift(num);
})
console.log(arr5); // 4,5,6,1,2,3

var 사용자={name:"원빈"};
var 정보={age:10};
var it=["자바스크립트","java"];
var 언어=["영어","중국어"];

var user={
    ...사용자, 
    ...정보, 
    기술: [...it, ...언어]
}
console.log(user);

var user1=Object.assign({},사용자,정보,{기술:[]});
console.log(user1);

it.forEach((a)=>{
    user1.기술.push(a);
})
언어.forEach((a)=>{
    user1.기술.push(a);
})
console.log(user1);
