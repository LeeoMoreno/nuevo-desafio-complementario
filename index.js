const div = document.getElementById("div")


let productos = [
    {
        id: 1,
        nombre: "Fifa 23",
        precio: 15000,
        imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202207/0515/HrC1Prgq2P70WXZn1X36P9vu.png"
    },

    {
        id: 2,
        nombre: "GTA V",
        precio: 10000,
        imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202203/0911/VIB0SeEj9vT6DTv7P4thJLZi.jpg",
    },

    {
        id: 3,
        nombre: "F1 2022",
        precio: 12000,
        imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202205/1010/UWJxJ4D7pyHvyyePY3mFaASN.png"
    }
]
let carrito = []

productos.forEach(producto => {
    let productoRenderizado = document.createElement("div")
    productoRenderizado.innerHTML = `
    <h3>Nombre: ${producto.nombre}</h5>
    <span>Precio: ${producto.precio}</span>
    <img class="imgProducto" src="${producto.imagen}">
    <button id="comprar"> Comprar </button>
    `
    div.append(productoRenderizado)


})
