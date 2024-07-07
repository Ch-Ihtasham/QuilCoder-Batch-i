
// let a=3
// let b="2"
// Type conversion '

// string into number 

// 1 Number()
// 2 parseInt()
// 3 parseFloat()
// a=Number(a)
// b=Number(b)
// b =Number.parseInt(b)
// b =Number.parseFloat(b)
// console.log(typeof a)
//  b = + b;
// console.log(typeof b)
// console.log(a+b) 

// number into string 
let a = 12;
//  a =String(a)
a = toString(a)
console.log(typeof a)

123456
"123456"
let arr=["1","2","3","4","5","6"]
arr[0]=Number(arr[0])
arr[1]=Number(arr[1])
arr[2]=Number(arr[2])
arr[3]=Number(arr[3])
arr[4]=Number(arr[4])
arr[5]=Number(arr[5])
console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5])

let no1 = 123456;
let sum = 0
no1=Array.from(String(no1), Number)
for (let i = 0; i < no1.length; i++) {
    sum = no1[i] + sum;
}
console.log(sum)
