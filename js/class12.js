let array = [1, 2, 3, 4, 5]
// array.forEach(function (va) {
//     console.log(va)
// })

let array3 = ['esha', 'amara', 'saeed', 'alam']
// array3.forEach((e) => {

//     if (e == "amara") {
//         console.log("amara reached");

//     }

//     console.log(e)
// })

let array2 = [2, 3, 4, 5, 6, 7]
let ans = array2.map((e) => {


    return e

})

console.log(array2)
console.log(ans)
ans[0] = 'eesha'
console.log(ans)
console.log(array2)
// console.log(ans[0]='ali')
// let array4=[1,2,3]
// console.log(array4)
// array5=array4
// array5[0]='aaal'
// console.log(array4)
let array6 = [2, 3, 4, 5, 6, 7]
let ans2 = array6.filter((e) => {

    if (e > 3) {
        return e
    }


})
console.log(ans2)


let sum = [1, 2, 3, 4, 5]
// let result=0
// for(let i=0;i<sum.length;i++){
//     result=result+sum[i]
// }
// console.log(result)
// let result = sum.reduce((acc, value) => {
//     return acc + value
// }, 0)
// console.log(result)
let reult=sum.reduce((su,value)=>{
return su+value
},0)
console.log(reult)