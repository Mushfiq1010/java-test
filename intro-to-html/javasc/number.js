const number=new Number(100)

// console.log(number.toFixed(2));
// console.log(number.toString());
// const balance=123.8234
// console.log(balance.toPrecision(3));
// const hundreds=10000000
// console.log(hundreds.toLocaleString('en-IN'));

let myDate=new Date()
console.log(myDate.getDay());
console.log(myDate.getMonth()+1);

console.log(myDate.toLocaleString());
let date=new Date(2024,1,27,3,30)
console.log(date.toString());

console.log(Math.floor(Date.now()/1000));

console.log(myDate.toLocaleString('default',{
    weekday: "long",hour: "2-digit"
} ))






