// let name="    Eesha    "
// let lastName="Alam"
// console.log(name.trimStart())
// let fullName=name.concat(lastName)
// // console.log(fullName)
// let num="5"

// let anOtherNumber=num.padStart(5,"x");
// console.log(num.length)
// console.log(anOtherNumber.length)
let name = "my name is esha"
// console.log(name.repeat(2));
// console.log(name.replace(/ESHA/gi,'eeshaa'))
// console.log(name.replaceAll(/ESHA/,"eeshhaaa"))
// console.log(name.split(","))
// console.log(name.indexOf('name'))
let str = "hello, world! world";
console.log(str.match("world"))
console.log(Array.from(str.matchAll("world")));
console.log(str.includes("world"))
// console.log(str.startsWith("ello"))
console.log(str.endsWith("world"))
let y = "100"
let z = +y
let x = 10;
console.log(Number.isSafeInteger(x))
console.log(x.toPrecision(7));
// console.log(x+z)
let array = [
    {
        name: "eesha alam",
        class: "bsit"
    },
    12,
    13,
    [1, 2, 3]

]
// console.log(array[0])
// let arr=[1,2,3,4]
// arr.forEach((i)=>{
//    console.log(i)
// })
let array1 = ['eesha', 'amara', 'nimko', 'fruit']
// array1.forEach(functionxy)
// function functionxy(i) {
//     console.log(i)
// }
function esha() {
    console.log('this functin belongs to eesha alam')
}
esha()
let abc = () => {
    console.log('this is an arrow function')
}
abc()
