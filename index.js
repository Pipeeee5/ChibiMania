// node express, se inicializa la app con el puerto 3000
const express = require('express')
const app = express()
const port = 3000

//se definen los productos en el backend
const products = [
    {
        id: 1,
        name: "Spider Wen",
        price: 21.990,
        image: "img/Spider Wen.jpg",
        stock: 50
    },
    {
        id: 2,
        name: "Inuyasha",
        price: 24.990,
        image: "img/Inuyasha.jpg",
        stock: 50
    },
    {
        id: 3,
        name: "Obi Wan Kenobi",
        price: 24.990,
        image: "img/Obi wan kenobi.jpg",
        stock: 50
    },
    {
        id: 4,
        name: "Avatar Aang",
        price: 13.990,
        image: "img/Avatar Aang.jpg",
        stock: 50
    },
    {
        id: 5,
        name: "Nekuzo Kamado",
        price: 19.990,
        image: "img/Nezuko Kamado.jpg",
        stock: 50
    },
    {
        id: 6,
        name: "Zenitsu",
        price: 16.990,
        image: "img/Zenitsu.jpg",
        stock: 50
    },
];


app.get("/api/products", (req, res) => {
    res.send(products)
})

app.use("/", express.static("Fronted"));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})