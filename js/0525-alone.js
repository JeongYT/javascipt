  var str1='뜰에 뜰에 뜰에는 닭이 있다.';

  document.write(str1+'<br>');

  document.write('str1.indexOf(뜰) : '+str1.indexOf('뜰')+'<br>');

  document.write('str1.lastIndexOf(뜰) : ' + str1.lastIndexOf('뜰')+'<br>');

  document.write('str1.indexOf( 뜰,3) : ' + str1.indexOf(' 뜰',3)+'<br>');

  document.write('str1.lastIndexOf(에,5) : ' + str1.lastIndexOf('에',5)+'<br>');

  document.write('str1.indexOf(가든) : '+str1.indexOf('가든')+'<br>');

  document.write('<br>');

  var str2='Wings프로젝트'  ;

  document.write(str2+'<br>');

  document.write('str2.charAt(4) : '+str2.charAt(4)+'<br>');

  document.write('str2.slice(5,8) : '+str2.slice(5,8)+'<br>');

  document.write('str2.substring(5,8) : '+str2.substring(5,8)+'<br>');

  document.write('str2.substr(5,3) : '+str2.substr(5,3)+'<br>');

  document.write('str2.split(s) : '+str2.split('s')+'<br>');

  document.write('str1.split(뜰,3) : '+str1.split('뜰',3)+'<br>');

  document.write('str2.link(http://www.daum.net) : ' + str2.link('http://www.daum.net')+'<br>');

  document.write('10.sub()' + '10'.sub()+'<br>');    

  document.write('위로.anchor(top) : '+'위로'.anchor('top')+'<br>');

  document.write('str.concat(유한회사) : '+str2.concat('유한회사')+'<br>');      

  document.write('str2.length : ' + str2.length);

  //////////////////////////////////////////////////////
  document.write("<hr>");


  var ary1 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh'];

  var ary2 = ['Yubuki', 'Aoki', 'MoriOsada', 'Yamada'];

  document.write('<hr>');

  document.write('ary1 : ' + ary1+'<br>');

  document.write('ary2 : ' + ary2+'<br>');

  document.write('<hr>');

  document.write('ary1.concat(ary2) : '+ary1.concat(ary2)+'<br>');

  document.write('ary1.join(/) : '+ary1.join('/')+'<br>');

  document.write('ary1.slice(1) : '+ary1.slice(1)+'<br>');

  document.write('ary1.slice(1, 2) :'+ary1.slice(1, 2)+'<br>');

  document.write("ary1.splice(1, 2, 'Kakeya', 'Yamaguchi') :"+ary1.splice(1, 2, 'Kakeya', 'Yamaguchi')+'<br>');

  document.write('ary1 : ' + ary1+'<br>');

  document.write('ary1.pop() : '+ary1.pop()+'<br>');

  document.write('ary1 : '+ary1+'<br>');

  document.write("ary1.push('Kondo') : " +ary1.push('Kondo')+'<br>');

  document.write('ary1 : ' + ary1+'<br>');

  document.write('ary1.shift() : '+ary1.shift()+'<br>');

  document.write('ary1 : ' + ary1+'<br>');

  document.write("ary1.unshift('Ozawa', 'Kuge') : "+ary1.unshift('Ozawa', 'Kuge')+'<br>');

                                          //  추가했을경우 전체배열의 개수가 리턴된다

  document.write('ary1 : ' + ary1+'<br>');

  document.write('ary1.reverse() : '+ary1.reverse()+'<br>');

  document.write('ary1 : ' + ary1+'<br>');

  document.write('ary1.sort() : '+ary1.sort()+'<br>');

  document.write('ary1 : ' + ary1+'<br>');

  document.write('ary1.concat(ary2) : '+ary1.concat(ary2)+'<br>');

  document.write('ary1 : ' + ary1+'<br>');

  document.write('ary1.length :'+ary1.length+'<br>');

  document.write('ary1.toString() : ' + ary1.toString()+'<br>');

  document.write(`<a name='top'>위로</a>`);
