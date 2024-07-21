
// let array = [1, 2, 3, 4]
// let array2 = [5, 6, 7, 8]
// let result = [...array, ...array2]
// console.log(result)
// let anOtherArray = [...array]
// console.log(anOtherArray)
// let obj = {
//     name: "amara",
//     class: "bsit"
// }
// let anOtherObj = obj
// console.log(anOtherObj)
// anOtherObj.name = "eesha";
// console.log(obj)
// function sum() {
//     console.log("this is a function")
// }
// sum();


// let ab = function amara() {
//     console.log("this is an other function which a variable")
// }
// ab();
// let obj1 = {
//     name1: "amara1",
//     class1: "bsit"
// }

// console.log({ obj, obj1 })
// let name = "amara";

// console.log([...name])

// function eesha(val, ...num1) {
//     return [val, num1]
// }
// console.log(eesha(13, 11, 12))
// let array=[12,13,14]
// function sum(x, y, z) {
//     let result = x + y + z;
//     return result;
// }
// console.log(sum(...array))
// let array = [11, 21, 31]
// let sum = 0;
// function amara(values) {

//     for (let x in values) {
//         sum += (values[x])


//     }
//     return sum;

// }
// console.log(amara(array))
const obj = {
    name: "amara saeed",
    class: "bsit"

}
console.log(obj.hasOwnProperty("nam"))
const obj1 = {
    name1: "eesha Alam",
    class1: "bsit",
    fun: function fullName() {
        console.log(`${this.name1} is my name and ${this.class1} is my degree`)
    }


}
// console.log(Object.assign({},obj,obj1))
// Object.freeze(obj)
// Object.seal(obj)
// obj.nam=3.12
obj.fu = function na() {
    this.class1
}
// console.log(obj)

var answer = "";
for (let x in obj) {

    answer += x

}
// console.log(Object.entries(obj))
// console.log(JSON.stringify(obj))

// let abc=(a,b)=>  ({a,b})

// console.log(abc(1,2))

// (function eesha() {
//     console.log("this is a function name with eesha")
// })();
// (function eesha() {
//     console.log("this is a function name with eesha")
// })()



