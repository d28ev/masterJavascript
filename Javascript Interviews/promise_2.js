// let us work on new project 
// steps :
// you want to buy vegatable
// you want to make breakfast
// you want to eat it

console.log("Before starting process");

function buyVegatable(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('I bought vegatable');
        }, 5000);
    });
    
}

function makeBreakfast(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('Hey Breakfast is ready');
        }, 3000);
    });
}

function eatIt(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Hey I am done with breakfast");
        }, 4000);
    });
}

//Problem : 1 : if you will call these 3 in this way, it will not work.
//you will get random order. so need to use callback function
//concept here , just to make sure that order is correct.
// buyVegatable();
// makeBreakfast();
// eatIt();

//let us use callback function
//buyVegatable();
//Problem 2 : if you will have mutliple level of callback
//first of all your code will not be easy to understand
//second thing when there will be some issue
//it will be very difficult to debug


//Let us use promise to make it easy to understand and
//looking simple.

buyVegatable().then(function(response1){    
    console.log('response1 :'+ response1);
    return makeBreakfast();})
.then(function(response2){
    console.log('response2 :'+ response2);
    return eatIt();})
.then(function(response3){
    console.log('response3 :'+ response3);})
.catch(function(error){
    console.log("hey error occured"+error);
});


console.log("End of process");