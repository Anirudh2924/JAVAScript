const arr1 = [1,2,3,4,5,6,7]
const arr2 = [8,78,67,57,6545,22]

/*
const abs = arr1.concat(arr2)  // Combines arrays or values into a new array. Does not change the original arrays
console.log(abs);
*/


/*
const all = [...arr1, ...arr2]
console.log(all);
Uses the spread operator (...) to copy and merge arrays.
Super clean and non-destructive.
*/


/*
const a2arr = [1,2,[4,5,6],7,[5,3,1],5,[5,4,[4 , [2,3,[1]]]]]
const real = a2arr.flat(Infinity);
console.log(real);

Flattens nested arrays into a single array.
Shallow flattening by default (1 level).
Can pass depth like .flat(2) or .flat(Infinity) for deep flattening.
*/



console.log(Array.from("ANI"));
console.log(Array.from({name : "Ani"})); //intresting..........!
//Converts array-like or iterable objects into a real array.


let score1 = 100
let score2 = 120
let score3 = 345
console.log(Array.of(score1,score2,score3));
//Creates a new array from the arguments you pass.
//Even if it’s just one number! Unlike Array(5) which makes empty slots.















