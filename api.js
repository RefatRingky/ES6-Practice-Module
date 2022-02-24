function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}
// load user from json placholder
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => diplayUser(data))
}
// display user individually
function diplayUser(data) {
    for(const user of data){
        console.log(user.name);
    }
}
// load post from json placholder
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))
}
