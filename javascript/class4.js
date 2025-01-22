// const prompt = require('prompt-sync')();
// let b = new Date()

// console.log(b.toLocaleString()) 
// console.log(b.toString()) 
// console.log(b.toLocaleDateString())
// console.log(b.toLocaleTimeString())
// console.log(b.getDate())
// console.log(b.getFullYear())
// console.log(b.getHours())
// console.log(b.getMinutes())
// console.log(b.getSeconds())
// console.log(b.getDay())
// let age = 20
// if (age <= 19) {
//     console.log("you are in teen age")
// }
// else{
//     console.log("you are above teen age")
// }
// let number = -10;
// if (number == 0) {
//     console.log("You enter  zero ")
// }
// else if (number < 0) {
//     console.log("You enter a negative number")
// }
// else {
//     console.log("You enter a positive number")
// }

// let x =10;
// let y=15;
// if(x<=10 ||  y<=12){
//     console.log(true)
// }
// else{
//     console.log(false)
// }
// let x=99;
// if(!(x<0)){
//     console.log("its a postive number")
// }
// let x = new Date().getDay();
// switch (x) {
//     case 0:
//         console.log("sunday")
//         break;
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
// }

// let a = Number(prompt("Enter first number"));
// a=Number(a);
// let opr = prompt("Enter the operator");
// let b = prompt("Enter second number");
// b = Number(b);
// switch (opr) {
//     case "+":
//         console.log(a + b)
//         break;
//     case "-":
//         console.log(a - b)
//         break;
//     case "*":
//         console.log(a * b)
//         break;
//     case "/":
//         console.log(a / b)
//         break;

// }

// let no = 11;
// let ans = (no % 2 == 0) ? "Number is even" : "Number is odd"
// console.log(ans)
// let age = 25;
// console.log("hello my name is amara and my age is " + age)
let obj = {
    nme: 1,
    clas: 2
}
for (let x in obj) {
    console.log(x,obj[x])
}
