let productsdata = [
    {
        img: "../images/1.jpg",
        name: "Half Running Set",
        price: "$99-$129",
        desc: "A comfortable half running set for your daily workouts."
    },
    {
        img: "../images/2.jpg",
        name: "Full Running Set",
        price: "$199-$229",
        desc: "A full running set for all seasons."
    },
    {
        img: "../images/3.jpg",
        name: "Winter Jacket",
        price: "$149-$179",
        desc: "Stay warm with this cozy winter jacket."
    },
    {
        img: "../images/4.jpg",
        name: "Summer Set",
        price: "$89-$109",
        desc: "Light and airy summer wear."
    },
    {
        img: "../images/5.jpg",
        name: "Spring Tracksuit",
        price: "$109-$139",
        desc: "Perfect for springtime runs."
    },
    {
        img: "../images/6.jpg",
        name: "Rain Jacket",
        price: "$129-$159",
        desc: "Water-resistant jacket for rainy days."
    },
    {
        img: "../images/7.jpg",
        name: "Casual Hoodie",
        price: "$79-$99",
        desc: "Comfortable hoodie for casual wear."
    },
    {
        img: "../images/8.jpg",
        name: "Gym Shorts",
        price: "$59-$79",
        desc: "Durable shorts for intense gym sessions."
    }
];

let products = document.getElementById('products');
products.innerHTML = productsdata.map((x) => {
    return `
        <div class="row" onclick="showDetails('${x.name}', '${x.img}', '${x.price}', '${x.desc}')">
            <div><img src="${x.img}"></div>
            <h5>sale</h5>
            <button class="heart" id="cartbtn" >
                <i   class="fas fa-shopping-cart" onclick="addToCart('${x.name}', '${x.img}', '${x.price}')" ></i>
            </button>
            <div class="rating"> 
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <i class="fas fa-star"></i>

            </div>
            <div class="price">
                <h4>${x.name}</h4>
                <p>${x.price}</p>
            </div>
            
        </div>
    `;
}).join("");

function showDetails(name, img, price, desc) {
    localStorage.setItem('productName', name);
    localStorage.setItem('productImage', img);
    localStorage.setItem('productPrice', price);
    localStorage.setItem('productDescription', desc);
    window.location.href = '../html/productdetails.html';

}
// cartpage
let counter = document.getElementById('counter')
let storedNumber = localStorage.getItem('number')
if (storedNumber != null) {
    counter.innerText = storedNumber
}
else {
    counter.innerText = 0
}

function addToCart(name, img, price) {

    let existingData = localStorage.getItem('data');
    let items = existingData ? existingData : '';
    let newItem =
        ` <tr id="cart-Item">
    <td id="image"><img src="${img}" alt=""  style="width: 70px;height: 70px; " ></td>
    <td id="name">${name}</td>
    <td id="price">${price}</td>
    <td id="quantity"><span class="decrement" >-</span>
        <span id="one" class="count">1</span>
        <span class="increment">+</span></td>
    <td id="total">$99-$129</td>
    <td><i class="fas fa-times" style="border: 1px solid black; border-radius: 100%; padding: 2px 6px 2px 5px; "></i></button>
    </td>
</tr>`
    items += newItem;
    localStorage.setItem('data', items)

    // cart numbering 
    var cartNumber = (parseInt(localStorage.getItem('number'))) || 0
    cartNumber++;
    localStorage.setItem('number', cartNumber)
    let storedNumber = localStorage.getItem('number')
    if (storedNumber != null) {
        counter.innerText = storedNumber
    }
    else {
        counter.innerText = 0

    }

    event.stopPropagation()
};


