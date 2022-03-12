//Example - 1
function getName() {
    var name = "Devendra Kumar Yadav";
    return name;
}

console.log(getName());

//Using arrow same logic

let getName1 = () => {
    var name = "Devendra Kumar Yadav";
    return name;
}

console.log(getName1());

//Example - 2
function addNumbers(a, b){
    return a+b;
}

console.log(addNumbers(3,4));

//Using arrow functions
let addTwo = (a,b) => {
    return a+b;
}

console.log(addTwo(4,5));

//Example - 3

function myName() {
    
    name = "Rohit";
    setTimeout(function(){
        console.log(this.name);
    }, 1000);
}

myName();