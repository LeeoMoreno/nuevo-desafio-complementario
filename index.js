const div = document.getElementById("div")
const boton = document.getElementById("boton")


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
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio: ${producto.precio}</p>
        </div>
        <button id="${producto.id}"> Comprar </button>
    </div>
    `
    div.append(productoRenderizado)
    const boton = document.getElementById(producto.id)
    boton.addEventListener("click", () => comprarProducto(producto))

})

const comprarProducto = (producto) => {
    console.log(producto.nombre);
    let productoExiste = carrito.find(item => item.id === producto.id)
    if(productoExiste !== undefined){
        productoExiste.precio = productoExiste.precio + producto.precio
        productoExiste.cantidad  = productoExiste.cantidad + 1
    }else{
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        })
    }

}

boton.addEventListener("click", () => console.log(carrito))