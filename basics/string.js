const name = "Ani"
const repocount = 50
/*
console.log(name + repocount + "value");

this is not the best way to concatenate the strings
*/

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('hitesh-sdjvn-kjsfng-fnvlfn-hc')
/*
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
*/

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  Hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ani.com/ani%20parihar"
console.log(url.replace('%20','-'));
console.log(url.includes('ani'));

console.log(gameName.split('-'));








