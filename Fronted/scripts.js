let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar$${total}`
}

function pay() {
    window.alert(products.join(", \n"));
}

// Se remplaza index.html por ProductsList generando el mismo .html aqui 
function displayProducts(productsList){
    let productsHTML = '';
    productsList.forEach(element => {
        productsHTML +=
        `<div class="product-container">
            <h3>${element.name}</h3>
            <img src="${element.image}"/>
            <h2>$${element.price}</h2>
            <button class="button-add" onclick="add(${element.id}, ${element.price})">Agregar</button>
        </div>`
    });
    document.getElementById('page-content').innerHTML = productsHTML;
}


window.onload = async() => {
    const productsList = await (await fetch("/api/products")).json();
    console.log(productsList);
    displayProducts(productsList);
}