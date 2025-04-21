//singleton
//Object.create

//object literals

const mySmb = Symbol("k1")

const user = {
    name: "Ani",
    age:19,
    [mySmb] :"mybby", //correct syntax to add symbol key to objects
    location: "jdp",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDay:["Monday" , "Saturday"]

}

//console.log(user.email)
//console.log(user["email"])
//console.log(user[mySmb])

user.email = "bbc@gmail.com"
//Object.freeze(user)     //not change anything after this...!
user.email = "cvvse@gamil.com"
console.log(user);

user.greeting = function(){
    console.log("hello js");
}
user.greetingtwo = function(){
    console.log(`hello js ${this.name}`);
}
/*
In JavaScript, the keyword this is used to refer to the object that is currently calling the function.
It helps you access the properties or methods of the same object from within its own function.
 */
/*
this is used inside an object’s method to refer to the same object that owns the method — so you can access its properties and other methods.
*/
console.log(user.greeting());
console.log(user.greetingtwo());

