// console.log('hellow')
// const amara=document.querySelector('.container')
// console.log(amara)
// const saeed =document.querySelector('[data-amara]')
// console.log(saeed)



const container = document.querySelector('.container')
const cardTemplate = document.querySelector('[user-card]')
let users = []
const searchBox = document.querySelector('#search')
searchBox.addEventListener('input', (e) => {
    let value = e.target.value;
    users.forEach(user => {
        let isVisible = user.name.includes(value) || user.email.includes(value)
        user.element.classList.toggle('hide', !isVisible)
    })

})

// method no 1 

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => {
//         users = data.map(user => {
//             const card = cardTemplate.content.cloneNode(true).children[0]
//             const name = card.querySelector('[data-name]')
//             const email = card.querySelector('[data-email')
//             name.textContent = user.name
//             email.innerText = user.email
//             container.appendChild(card)
//             return { name: user.name, email: user.email, element: card }
//         })
//     })

// method no 2

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => {
//         users = data.map((user) => {
//             container.innerHTML += `
//             <div class="card">
//                 <div>${user.name}</div>
//                 <div>${user.email}</div>
//             </div>
//             `

//         })
//     })

// method no 3

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        users = data.map((user) => {
            const div = document.createElement('div')
            // div.classList.add('card')
            div.innerHTML = `
                <div class="card">
                <div>${user.name}</div>
                <div>${user.email}</div>
            </div>
            `
            container.append(div)
            return { name: user.name, email: user.email, element: div }
        })
    })


