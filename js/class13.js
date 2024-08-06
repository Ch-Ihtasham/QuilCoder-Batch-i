document.querySelector('.parent').addEventListener('click', () => {
    alert('parent clicked')
})
document.querySelector('.child2').addEventListener('click', (e) => {
    alert('child 2 clicked')
    e.stopPropagation()
})
// by default value is false and it execute bubble event 
// and true execute capturing event 
document.querySelector('input').addEventListener('keydown', (e) => {
    // alert("key press")
    if (e.key == 'Enter') {
        alert('enter pressed')
    }
})
// console.log('hello world')
function sayhi() {
    alert('Hi world')
}
let ab = setTimeout(() => {
    console.log('this is a set time out funtion')

}, 1000)
clearTimeout(ab)

let ac = setInterval(sayhi, 2000)
clearInterval(ac)
let clock = document.querySelector('.clock')

setInterval(() => {
    let time = new Date()
    clock.innerHTML = time.toLocaleTimeString()
},1000)



