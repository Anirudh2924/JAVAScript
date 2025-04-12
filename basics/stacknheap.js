//++++
// stack(primitive) , heap(non-primitive)
/*
 Stack (Primitive values)
When you assign a primitive, it creates a copy.
So changes don’t affect the original.
*/


/*Heap (Reference types: objects, arrays, functions)

When you assign a non-primitive, it copies the reference, not the actual data.
So changes affect the original since both variables point to the same location.

*/


let myname = "Anirudh.parihar"

let anotherName = myname
anotherName = "Annaaa"
console.log(anotherName);
console.log(myname)

let userOne = {
    email: "userone@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "userTwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
