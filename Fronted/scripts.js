let carrito = [];
let total = 0;

function add(productId, price) {
    console.log(productId, price);
    carrito.push(productId);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

async function pay() {
    const productsList = await (await fetch("/api/pay",{
        method: "post",
        body: JSON.stringify(carrito),
        headers: {
            "Content-Type": "aplication/json"
        }
    })).json();
}

//window.alert(products.join(", \n"));

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
    //se llama a la funcion
    displayProducts(productsList);
}