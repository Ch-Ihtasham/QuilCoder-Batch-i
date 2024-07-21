let a = 0;
while (a < 5) {
    console.log("hello world")
    a++;
}
let b = 3;
do {
    console.log("hello eesha")
    b++;
}
while (b <= 2)

let c = 12;
let d = 13;

function sum(x, y) {
    return x + y;
}
console.log(sum(c, d));
let amara = () => {
    console.log("hello my name is amara")
    return "hi";
}
console.log(amara())
let obj = {
    name: "eesha",
    class: "bsit"
}
console.log(obj["name"])
let array = [
    {
        name: "amara",
        class: "bsit",
        func: () => {

            console.log("im a function in object in an array");
        }

    },
    12,
    [1, 2, 4, 5],

]
let ab = {
    name: "amara",
    class: "bsit",
    func: () => {

        console.log("im a function in object in an array");
    }

}
delete ab.func
console.log(ab)
let name="Ihtasham"
console.log(name.slice(1))

