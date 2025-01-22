let a = 10;
console.log(`hello my name is eesha alam and my age is ${a}`)
let name = "12345";

// for(let a=0;a< name.length;a++){
//     console.log(name[a])
// }
let arr = [1, 2, 3, "eesha", "amra"]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])



let obj = {
    name: "amara",
    Fname: "Saeed",
    Class: "BsIt",
    RollNo: 12
}
let data = Object.values(obj)
let ki = Object.keys(obj)
for (let n = 0; n < ki.length; n++) {
    console.log(ki[n]+": " + data[n])
}

for (let ab in obj){
    console.log(obj[ab])
}


let arra=[1,2,3,4,"amara"]
for(let an of arra){
    console.log(an)
}


