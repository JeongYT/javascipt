// createElement()
// createTextNode()
// <h1> welcome </h1>
// append 나 appendChild

// 문서객체 만들기
// 객체를 생성
// var header=document.createElement('h1');
// var text=document.createTextNode('welcome');

// // 노드를 연결
// header.appendChild(text);
// // document.body.appendChild(header);

// var box=document.getElementById('box');
// var box2=document.getElementById('box2');

// // box.innerHTML="header";
// box.appendChild(header);
// box2.appendChild(header);

// box.innerHTML=header.innerHTML;
// box2.innerHTML=header.innerHTML;

// 이벤트
// add.onclick=function(){ }
// 고전 이벤트

// 표준 이벤트
// add.addEventListener('click',function(){ });

var add=document.getElementById('add');
var del=document.getElementById('del');
var i=0;

add.addEventListener('click', function() {
    i++;
    var h2=document.createElement('h2');
    var text=document.createTextNode('welcome' + i);
    h2.appendChild(text);
    document.body.appendChild(h2);
    
});

del.addEventListener('click',function() {
    var h2=document.getElementsByTagName('h2');
    var i=h2.length-1
    if(i<0) return false;
    //for(var i=0; i<h2.length; i++)
    //{
        document.body.removeChild(h2[i]);
    //}
});

function StarCraft(level, name, gender, life, med)
{
    this.life=life;
    this.name=name;
    this.level=level;
    this.gender=gender;
    this.med=med;

    this.attack=function() {
        this.level+=1;
        if(this.gender=="테란" && this.name=="마린"&& this.name=="파이어뱃" && this.level==3){
            document.write(this.name+"이(가) 스팀백을 배웠다.<br>");
        } else {
            document.write(this.name+"이(가) 공격했다.<br>");
        }
        
    }
    this.defend=function() {
        this.life -= 5;
        if(this.life<1) {
            document.write(this.name+"이(가) 죽었다.<br>")
        }
    }

    this.care=function() {
        this.med -= 10;
        if(this.name=="매딕")
        {
            if(this.med>0) {
                document.write(this.name+"이(가) 치료했다.<br>");
            } else {
                document.write("기력이 떨어졌다<br>");
            }
        }
    }

    this.정찰=function() {
        document.write("정찰 나간다 <br>");
    }
}

var SCV = new StarCraft(1,"마린","SCV",5);
var Marin = new StarCraft(1,"마린","테란",10);
var Medic = new StarCraft(1, "매딕", "테란",15,50);
var Firebat = new StarCraft(1, "파이어뱃", "테란",15);
var Dragon = new StarCraft(1,"드라군","프로토스",21);
var Mutalisk = new StarCraft(1, "뮤탈리스크","저그",33);


setInterval(SCV.정찰, 3000);
