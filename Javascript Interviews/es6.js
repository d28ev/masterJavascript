//classes , inheritance

class Person{
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log(`${this.name} can walk`);
    }
}

const p = new Person("Devendra");

p.walk();

const p2 = new Person("Sachin");

p2.walk();

class ChildPerson extends Person{
    constructor(childName, name){
        super(name);
        this.childName = childName;
    }

    childWalk(){
        console.log(`${this.childName} can walk`);
    }


}

const childp1 = new ChildPerson("childPerson", "parentPerson");
childp1.childWalk();
childp1.walk();

//Array functions
//1. map()
//map returns new array it will not modify existing array
const arr = [5,4,9,2,30];

function double(num){
    return num*2;
}
console.log(arr);
const doublearr = arr.map(double);
console.log(doublearr);

const strArray = ["Sachin", "Sharad", "Sonu", "Monu", "Diwan", "Anita"];
console.log(strArray);
function appendSurname(str){
    return str + " Yadav";
}
const strArrayNew = strArray.map(appendSurname);
console.log(strArrayNew);

//2.fill() functions
//fill does not return new array, it will modify the existing array.

const testfill = [1,2,3,4,5];
console.log(testfill);
testfill.fill(0);
console.log(testfill);

const testfill1 = ["a","b","c","d"];
console.log(testfill1);
testfill1.fill("");
console.log(testfill1);

//3. filter() function
//filter() returns a new array

const testfilter = [1,2,3,4,5,6,7,8,9,10];
console.log(testfilter);
const testfilter1 =  testfilter.filter(num => !(num%2));
console.log(testfilter1);

//4.reduce() function

//reduce will behave differently
const reducetest = [1,12,3,4,5];
console.log(reducetest);
function getSum(acc, val){
    return acc + val;
}
let sum = reducetest.reduce(getSum);
console.log(sum);

let maxnumber = reducetest.reduce((a, b) => (a>b) ? a : b);
console.log(maxnumber);

//5. sort() function

const sorttest = [10,5,9,13,20,31,14];
console.log(sorttest);
function sortFunction(a,b){
    return b-a;
}
const aftersort = sorttest.sort(sortFunction);
console.log(sorttest);

const str = ["name", "devendra", "yadav", "sharad", "vishal", "rohit", "avc", "dev"];
console.log(str);
function compare(a,b){
    return b.length - a.length;
}

str.sort(compare);
console.log(str);


//before es6 how to use inheritance.

const parent = {
    name : "i am parent function",
    walk() {
        console.log("i am parent");
    }
}


let childObject = Object.create(parent);

childObject.childName = "I am child function";
console.log(childObject.walk());
