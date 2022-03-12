// posts = [
//     {title : "Post One"},
//     {title : "Post Two"}
// ];

// function getPosts(){
//     let output = '';
//     posts.forEach(post => {
//         output += `<li>${post.title}</li>`;
//     });
//     document.getElementById("data").innerHTML = output;
// }



// async function createPost(post){
//             return new Promise((resolve, reject)=> {
//                 posts.push(post);
//                 resolve();        
//             });
// };

// createPost({title: "post three"}).then(getPosts);

async function displayContent(){
    var fetchResponse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    var json = await fetchResponse.json();
    document.getElementById("data").innerHTML = json;
    console.log(json);
}

displayContent();


