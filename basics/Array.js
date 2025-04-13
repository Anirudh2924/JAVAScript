// Array

const myArray = [0,1,2,3,4,5,6]
const myalpha = ["a","b","c","d","e","f"]
const myarr2 = new Array(1,2,3,4)
//console.log(myArray[0]);


//methods of array
/*
myArray.push(6) appends at last
myArray.pop()  removes from last
console.log(myArray);
*/

myArray.unshift(9) // adds elem at starting of the array 
myArray.shift() // removes elem from the starting of an array
//console.log(myArray.includes(9));
//console.log(myArray.indexOf(12));

/*
const newArr =  myArray.join() // join binds the array and convert its data type to string
console.log(myArray);
console.log(newArr);
*/


// slice - Does not change the original array.
//         Returns a shallow copy of a portion of the array.

// splice - Changes the original array.
//        - Can be used to add, remove, or replace elements.

/*
console.log("A" ,myArray);
const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B",myArray);  

const myn2 = myArray.splice(1,3)
console.log("c",myArray);
console.log(myn2);
*/










