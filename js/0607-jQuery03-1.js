$(document).ready(function() {

    // css초기화
    $('*').css({margin:0, padding:0});
    $('a').css({
        color:'black',
        textDecoration:'none',
        padding:'10px',
        display:'block'
    });
    $('li').css('list-style','none');

    // 메뉴 배치하기 - flex 사용
    $('ul').css('display','flex');
    $('ul>li').css({
        flex:1, textAlign:'center',
        background:'orange'
    });
    $('ol').css({
        background:'cyan',
        display:'none',
        width:'100%'
    });

    // hover효과 이벤트 주기
    // .hover(mouseenter, mouseleave)
    $('ul>li').hover(function(){
        $(this).css('background','gray');
        $(this).find('ol').show();
    }, function(){
        $(this).css('background','orange');
        $(this).find('ol').hide();
    });
    $('ul>li').css('position','relative');
    $('ol').css('position','absolute');
    $('ol>li').hover(function(){
        $(this).css('background','steelblue');
    }, function(){
        $(this).css('background','cyan')
    });
    // css() -> 스타일변경 , attr() -> 속성변경
    $('h2').attr('title','마우스를 올려보세요');
    $('ul>li').attr('title','마우스를 올려보세요');

    // 탭메뉴 만들기
    $('div span').css('display','inline-block')
    .css('padding','10px')
    .css('cursor','pointer');
    $('div span').first().click(function(){
        $('#img img').attr('src','imgs/dochi.jpg')
        .attr('width','200px')
        .attr('height','150px');
    });
    $('div span').last().click(function(){
        $('#img img').attr('src','imgs/cat.jpg')
        .attr('width','200px')
        .attr('height','150px');
    });
    $('div span').eq(1).click(function(){
        $('#img img').attr('src','imgs/cat2.jpg')
        .attr('width','200px')
        .attr('height','150px');
    });





}); // end