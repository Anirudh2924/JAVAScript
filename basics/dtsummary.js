//primitive 
// 7 types : String  ,Number, Boolean,Null,Undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.33 // there nothing like float in js, all are counted as Number

const isLoggedIn = false
const outsideTemp = null // shows obj data type
let userEmail; // value will be undefined ;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34485347934868937684587686895498n // adding n to aloarge number auto set the data type to bigInt

// reference (non primitive)

//Array,objects,functions

const array = ["a","b","c","d"] // array 

let myobj = {
    name:"Ani",  // these are objects and these are defined with key value pairs,
    age: 19,   
}

const myfunc = function(){
    console.log("hello world");
}

console.log(typeof array);