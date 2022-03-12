function outer(outerVariable){
    return function inner(innerVariable){
        document.write(outerVariable);
        document.write(innerVariable);
    }
}

var fun = outer("i am outer variable");
console.dir(fun);
fun("I am inner variable");