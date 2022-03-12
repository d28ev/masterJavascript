posts = [
    {title : "Post One"},
    {title : "Post Two"}
];

function getPosts(){
    let output = '';
    posts.forEach(post => {
        output += `<li>${post.title}</li>`;
    });
    document.getElementById("data").innerHTML = output;
}



function createPost(post, callback){
    setTimeout(()=> {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title : "Post Three"}, getPosts);
