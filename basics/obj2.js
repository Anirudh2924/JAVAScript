// const something = new Object() -> singleton object

const something = {}

something.id = "123abc"
something.name = "ABCC"
something.isLoggedIn = false

//console.log(something);

const regular = {
    email: "abc@gmail.com",
    fullname: {
        username : {
            firstname: "Ani",
            lastname: "Parihar"
        }
    }
}
//console.log(regular.fullname.username.firstname);


const obj1 = {1:"a" , 2:"C" , 3:"d"}
const obj2 = {4:"a" , 5:"C" , 8:"d"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({} , obj1 ,obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:2,
        email: "hc@gmail.com"
    },
    {
        id:3,
        email: "c@gmail.com"
    }
]

console.log(users[1].email);
console.log(something);
console.log(Object.keys(something));
console.log(Object.values(something));
