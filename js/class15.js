const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise one')
        resolve()
    }, 2000)
})
console.log(promiseOne)