

console.log("Before : Fetch api");

async function getUsers(){
    var response1 = await fetch('https://api.github.com/users');
    console.log("response1 : "+ response1);
    var response2 = await response1.json();
    console.log("response2 : "+ response2);
    var ans = [];
    for(var i=0;i<response2.length;i++){
        ans.push(response2[i].login);
        ans.push('<br>')
    }
    document.getElementById('data').innerHTML = ans;
}

getUsers();

//console.log(users);
console.log("After :  Fetch api");