window.onload=function(){
    const SHOW="show";
    const firstSlide=document.querySelector('.item:first-child');
    console.log(firstSlide);

    function slide(){
        var currentSlide=document.querySelector("."+SHOW);
        var currentSlide=document.querySelector(`.${SHOW}`);
        
        if(currentSlide){
            currentSlide.classList.remove(SHOW);
            var nextSlide=currentSlide.nextElementSibling;
            // 다음슬라이드가 있으면 다음슬라이드에 클래스를 추가하고
            // 없으면 처음슬라이드에 클래스를 추가한다.
            if(nextSlide){
                nextSlide.classList.add(SHOW);
            } else{
                firstSlide.classList.add(SHOW);
            }
        }else{
            firstSlide.classList.add(SHOW);
        }
    }
    slide();

    var STOP=setInterval(slide,2000);
    // mouse event로 마우스를 올리면 슬라이드 중지
    // 마우스가 다시 나가면 슬라이드 재개
    var slider=document.getElementById('slider');
    slider.addEventListener('mouseenter',function(){
        clearInterval(STOP);
    });
    slider.addEventListener('mouseleave',function(){
        STOP=setInterval(slide,2000);
    });

    var LI=document.querySelectorAll('ul>li');
    var LEFT=document.querySelector('p button:first-child');
    var RIGHT=document.querySelector('p button:last-child');

    var prev=0;
    var current=0;
    var next=0;

    LEFT.onclick=function(){
        var prev=LI[current];
        //prev.style.left="0";
        prev.style.left="100%";
        current++;
        if(current%5 == 0){
            current=0; Linit();
        }

        var next=LI[current];
        //next.style.left="-100%";
        next.style.left="0";
    }
    // Right
    RIGHT.onclick=function(){
        var prev=LI[current];
        //prev.style.left="0";
        prev.style.left="100%";
        current++;
        if(current%5 == 0){
            current=0; Rinit();
        }

        var next=LI[current];
        //next.style.left="100%";
        next.style.left="0";
    }

    // 이미지 왼쪽으로 모두 배치하기
    function Linit(){
        for(var i=0; i<LI.length; i++){
            LI[i].style.left="-100%";
        }
    }
    // 이미지 오른쪽으로 모두 배치하기
    function Rinit(){
        for(var i=0; i<LI.length; i++){
            LI[i].style.left="100%";
        }
    }
}

