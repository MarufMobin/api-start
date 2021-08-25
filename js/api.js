// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


/*----------------Using api for Demo Data---------------------*/ 
document.getElementById('output').addEventListener('click',function(){
     fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then( response => response.json())
     .then(demoData => demoDataCollection(demoData))

});

/* 
function loadData(){
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(responce => responce.json())
    .then( data => console.log(data) )
   
} */
/* ---------------Using APi for Users------------------------*/
/* 
function users(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( responce => responce.json() )
    .then( data => console.log(data))
} */

document.getElementById('usersData').addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/users').then( res => res.json()).then( data => displayUsers(data))
});

/*------------ Using Api for Posts ----------*/
// function posts(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then( res => res.json()).then( data => console.log(data))
// }

document.getElementById('posts').addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/posts').then( res => res.json()).then( posts => displayCommnet(posts))

});

// Using api update Ui 
// function displayUsers(data){
//     const ul =  document.getElementById('users');
//     for( const user of data){
//       const li = document.createElement('li');
//         li.innerText = `Name : ${user.name} and email : ${user.email}`;

//       ul.appendChild(li);
       
//     }
// }

// Once More time make a function displayUsers function to
// -------------------------------------------------------
function displayUsers(data){
    const usersBtn = document.getElementById('users');
    for( const singleData of data){
        const mkAli = document.createElement('li');
        mkAli.innerText = singleData.name;
        usersBtn.appendChild(mkAli)
    }
}



function displayCommnet(posts){
    const ulForCom = document.getElementById('users');
    for( const singlePost of posts){
        const mkLi = document.createElement('li');
        mkLi.innerText = singlePost.title;
        ulForCom.appendChild(mkLi)
    }
}

function reload(){
    // location.reload()
    window.location.href='index.html'
}


// Usign api to fetch data for demo 

function demoDataCollection(demoData){
    const demoInput = document.getElementById('users');
    const mkLiOfDemo = document.createElement('li');
    mkLiOfDemo.innerText = demoData.title
    demoInput.appendChild(mkLiOfDemo)  

}

function newPage(){
    location.href = "posts.html";
}