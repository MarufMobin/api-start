// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


/*----------------Using api for Demo Data---------------------*/ 
// document.getElementById('output').addEventListener('click',function(){
//      fetch('https://jsonplaceholder.typicode.com/todos/1')
//      .then( response => response.json())
//      .then(json => console.log(json))

// });


function loadData(){
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(responce => responce.json())
    .then( data => console.log(data) )
   
}
/* ---------------Using APi for Users------------------------*/
/* 
function users(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( responce => responce.json() )
    .then( data => console.log(data))
} */

document.getElementById('usersData').addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( data => displayUsers(data))
});

/*------------ Using Api for Posts ----------*/
// function posts(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then( res => res.json()).then( data => console.log(data))
// }

document.getElementById('posts').addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/posts').then( res => res.json()).then( data => console.log(data))
});


function displayUsers(data){
    console.log(data)
}