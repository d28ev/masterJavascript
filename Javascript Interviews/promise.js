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



function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            posts.push(post);
            let error = false;
            if(!error){
                resolve();
            }
            else{
                reject("Error : While creating post");
            }
        }, 2000);
    });
}

createPost({title : "Post Three"})
.then(getPosts)
.catch(err => console.log(err));
