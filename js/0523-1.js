// json 파일요청 - 비동기
// fetch, ajax(jQuery), axios
// fetch().then().then()
// json server

function search() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      
      var output="<table border='1'>";
      output+="<tr><th>순번</th><th>이름</th><th>전화번호</th><th>이메일</th></tr>"
      data.forEach((ele,i) => {
          output += `<tr><td><a href='#' onclick=detail(${i+1})>${i+1}</a></td><td>${ele.username}</td><td>${ele.phone}</td><td>${ele.email}</td></tr>`
          
      });
      output+="</table>";
      content.innerHTML=output;
    }); 
}
// 순번 사용자이름, 전화번호, 이메일
// username, email, phone

function detail(id) {
    fetch('https://jsonplaceholder.typicode.com/users/'+id)
      .then(response => response.json())
      .then(data => {

        var output="<table border='1'>";
        output+="<tr><th>순번</th><th>이름</th><th>전화번호</th><th>이메일</th></tr>"
        output += `<tr><td>${data.id}</td><td>${data.username}</td><td>${data.phone}</td><td>${data.email}</td></tr>`

        output+="</table>";
        content2.innerHTML=output;
      });
}

var btn=document.querySelectorAll('button');
btn[0].addEventListener('click',search);

function search2() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      
      var output="<table border='1'>";
      output+="<tr><th>순번</th><th>아이디</th><th>제목</th><th>완료여부</th></tr>"
      data.forEach((ele,i) => {
        if(i<10){
          output += `<tr><td><a href='#' onclick=detail2(${i+1})>${i+1}</a></td>`
          output += `<td>${ele.id}</td><td>${ele.title}</td>`
          output += "<td>" + `${ele.completed==true ? "완료" : "미완성"}</td></tr>`
        }
      });
      output+="</table>";
      content3.innerHTML=output;
    }); 
}
btn[1].addEventListener('click',search2);

function detail2(id) {
    fetch('https://jsonplaceholder.typicode.com/todos/'+id)
      .then(response => response.json())
      .then(data => {
        var output="<table border='1'>";
            output+="<tr><th>순번</th><th>아이디</th><th>제목</th><th>완료여부</th></tr>"
            output += `<tr><td>${data.id}</td><td>${data.id}</td><td>${data.title}</td><td>${data.completed==true ? "완료" : "미완성"}</td></tr>`

        output+="</table>";
        content4.innerHTML=output;
      });
}