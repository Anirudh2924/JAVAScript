let mydate = new Date()
//console.log(mydate.toString());
//console.log(mydate.toDateString());
//console.log(mydate.toLocaleString());
//console.log(typeof mydate);
//console.log(mydate.toJSON());
//console.log(mydate.toISOString());
//console.log(mydate.toUTCString());

let myCreatedDate = new Date(2005 , 6 ,29)
//console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}));