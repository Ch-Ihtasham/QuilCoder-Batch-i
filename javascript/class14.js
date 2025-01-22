let url = 'https://api.github.com/users/ch-ihtasham';
let name=document.querySelector('.name')
let bio=document.querySelector('.bio')
let img=document.querySelector('img')
const xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.onreadystatechange = () => {
    // console.log(xhr.readyState)
    if (xhr.readyState === 4) {
        if (xhr.status == 200) {
            const response = JSON.parse(xhr.responseText)
            // console.log(response.login)
            console.log(response)
            name.innerHTML=response.login
            bio.innerHTML=response.bio
            // img.src=response.avatar_url
        }
        else{
            console.log('error')
        }
    }
  

}

xhr.send()



