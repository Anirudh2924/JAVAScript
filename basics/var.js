const accountId = 1238
let accountEmail = "ani@gmail.com"
var accountPass = "12345678"
accountCity = "jdp"
let accountState ;


// accountId = 2 not allowed because of const key word ...!
accountEmail = "aniii@gmail.com"
accountPass = "87654321"
accountCity = "udp"

/*
not to use var , because of issue in 
block scope and functional scope
*/

console.log(accountId);

console.table([accountEmail,accountId,accountPass,accountCity,accountState]);
