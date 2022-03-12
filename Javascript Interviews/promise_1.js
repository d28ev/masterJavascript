

console.log("Before : Fetch api");

fetch('https://api.github.com/users')
.then(function(response){
    console.log("Promise1 is fullfilled");
    return response.json();})
.then(function(response1){
    console.log("Promise2 is also fullfilled");
    console.log(response1);
    var ans = [];
    for(var i=0;i<response1.length;i++){
        ans.push(response1[i].login);
        ans.push('<br>')
    }
    document.getElementById('data').innerHTML = ans;})
.catch(function(error){
    console.log("Error occured : "+ error);
});
//console.log(users);
console.log("After :  Fetch api");