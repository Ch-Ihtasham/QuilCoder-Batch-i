// number 
// null 
// Boolean 
// string 
// symbol 
// BigInt 
// undefined

// non premtive data type 

// array 
// objects 


let a = 1231234567;
console.log(a)
let b = null;
// console.log(b)
let c = "amara";
let d = Symbol("This is the discription of Symbol")
let e = Symbol("This is the discription of Symbol")
// console.log(d.description);
let f;
let g = BigInt("12312345678901234567890234567890234567812345678")
console.log(g)
let bool = false;
console.log(bool)

let arr = [1, 2, 3, 4, 5]
console.log(arr[2])
let arr2 = ["hellow", "this", "is", "an", "array"]
console.log(arr2)
let arr3 = [1, "hello", true,]
console.log(arr3)

let amra = Symbol("age")
let obj = {
    name: "amra",
    rollno: 1234,
    subject: "web",
    dep: "Cs",
    deg: "It",
    fee: false,
    [amra]: 25

}
console.log( 
     (obj[amra]))
obj.number = 12;
console.log(obj)
// console.log(obj["name"])
// console.log(Object.values(obj))

let ar = [
    {
        name: "amra",
        rollno: 1234,
        subject: "web",
        dep: "Cs",
        deg: "It",
    },
    12,
    "hello world"
]
console.log(ar)

