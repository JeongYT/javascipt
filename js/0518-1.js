// for in 반복문
// window
for(var i in window){
    console.log(`${i} : ${window[i]}`);
}

var user =[{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},
{
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
}];
console.log(user[0].title);

for(var i=0; i<user.length; i++) {
    document.write("title : " + user[i].title);
    document.write("<br>");
}

for(var i=0; i<user.length; i++) {
    document.write(user[i].id + " : " + user[i].title);
    document.write("<br>");
}

for(var i=0; i<user.length; i++) {
    document.write(user[i]);
    document.write("<br>");
}

for(var i in user) {
    document.write(user[i]);
    console.log(user[i]);
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json));

