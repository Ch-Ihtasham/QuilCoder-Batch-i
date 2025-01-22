// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             // console.log('prmoise one')
//             resolve({
//                 name: 'eesha',
//                 class: 10

//             })
//         }
//         else {
//             // console.log('its an error')
//             reject()
//         }
//     }, 1000)

// })
// promiseOne.then((data) => {
//     return data
// }).then((data)=>{
//     console.log(data.class)
// }).catch((error) => {
//     console.log('its an error through cath key word', error)
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log('promise two')
//         reject('its an error through reject key word')
//     }, 2000)

// }).then(() => {
//     console.log('resolved')
// }).catch((a) => {
//     console.log(a)
// }).finally(() => {
//     console.log('it will execute every time ')
// })

// async function getData() {
//     try {
//         let respone = await fetch('https://api.github.com/users/ch-ihtasham')
//         let data=(await respone.json());
//         console.log(data.login)
//     } catch(error) {
//         console.log('eror',error)
//     }
// }
// getData()

fetch('https://api.github.com/users/ch-ihtasham').then((data)=>{
console.log(data)
}).catch((error)=>{
console.log(error)
})



