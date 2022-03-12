function outer(){
    var outer_var = 10, outer_var2 = 20;
    function inner(){
        console.log(outer_var);
    }
    console.log(outer_var2);
    outer_var= 100;
    return inner;
}

var innerFun = outer();
innerFun();

//Advantage of closures.
// 1.used in currying
// 2. used in module pattern 
// 3. helps in data hiding and encapsulation
// 4. used in memoization and once function(function which is callled only one time)
// 5.

//Disadvantage of closures.

// 1. unnecessary use of closure will lead to extra memory

//example of data hiding
function Counter(){
var counter = 0;
this.incrementCounter = function(){
    counter++;
    console.log(counter);
}

this.decrementCounter = function(){
    counter--;
    console.log(counter);
}
};
var incCounter = new Counter();
incCounter.incrementCounter();
incCounter.incrementCounter ();
incCounter.decrementCounter();

//currying
function sum_a(a){

    return function sum_b(b){
        return function sum_c(c){
            return a+b+c;
        }
    }
}

//console.log(sum_a(13)(4)(15));

//setTimeout() and closure

for(var i = 1;i<=5;i++){

    function test(x){
    setTimeout(function(){
        console.log(x);
    }, x*1000);
}
test(i);
}

//hoisting in javascript


console.log(x);
console.log(getName);
var x = 10;
function getName(){
    return "Devendra Yadav";
}

//above code is working due to hoisting in js, at the time of creation phase-it will move all variable declartion and 
// functions to the top and it will mark variable as undefined (default) and functions it will move same.

//Case 1 : what about function expression, you can not call fun below , because JS engine will consider it as
//a variable not a function.
console.log(fun);
var fun  = function (){
    return "jsdnfakj";
}

//Case 2 : what about arrow functions
//console.log(fun1());
var fun1 = () => {

    return "fun1";
}
console.log(fun1());

//Case 3 : let, const
//console.log(let_var);
let let_var = 10;

//let and const 
//let and const declarations are hoisted, you can see them in different memory Script : with undefined.
//they are in temporal dead zone for the time being 
//what is the temporal dead zone ?
//Ans : the time duration between hoisting of let and const to the actual intialization
//and you can not access these variables unless they are in temporal dead zone.


//example to understand
//console.log(a);// this will give reference error, cannot access a before initlization.
console.log(b);
let a = "fndkdk";
var b = 30;

//Case 1 : Reference error : x is not defined
//console.log(x);

//Case 2 : Reference error, Can not access a before initlization.
//console.log(a);

//let and const they will not be part of window(global), they will be in separate memory space.

//Case 3 : if you will try to redeclare let variable again
// Syntax error : Identifier 'a' has already been declared.
//it will not give error in case of var.

//Case 4 : const variable you need to initialization at the time of declare.
//otherwise you will get below error
//syntax error : Missing initializer in const declaration

//Case 5 : reinitialize const varible will give type error
// Type error : Assignment to constant variable

//best way to avoid above issues: push all the declaration, initialization on the top.

//what is block
{
    //compound statement.
    //var a = 10;
    //console.log(a);
}

//example to understand block Scope 
{
    var aa = 10;
    let bb = 20;//it will be part of Block scope.
    const cc = 30;//it will also be part of Block scope.
}
console.log(aa);
console.log(bb);//at this point you will see block scope is no longer present in memory.




