const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            // console.log('prmoise one')
            resolve({
                name: 'eesha',
                class: 10

            })
        }
        else {
            // console.log('its an error')
            reject()
        }
    }, 1000)

})
promiseOne.then((data) => {
    return data
}).then((data)=>{
    console.log(data.class)
}).catch((error) => {
    console.log('its an error through cath key word', error)
})
