/*
let cinta = 217.08
let medialuna = 93.92
let hebilla = 145.43
let regulador = 76.06
let mosqueton = 432
let argolla = 162

const carrito = []

const productos = [
    {
        nombre: "Correa",
        precio: (cinta * 1.38 + mosqueton).toFixed(2),
        id: 1,
        categoria: "perros",
        stock: 20
    },
    {
        nombre: "Collar",
        precio: (2 * medialuna + hebilla + regulador + cinta * 0.7).toFixed(2),
        id: 2,
        categoria: "perros",
        stock: 20
    },
    {
        nombre: "Pretal",
        precio: (cinta * 1.84 + regulador + hebilla + medialuna).toFixed(2),
        id: 3,
        categoria: "perros",
        stock: 20
    },
    {
        nombre: "Pretal Anti Escape",
        precio: (cinta * 1.66 + argolla + regulador * 3 + hebilla).toFixed(2),
        id: 4,
        categoria: "perros"
    },
    {
        nombre: "Collar de Gato",
        precio: (cinta * 0.31 + hebilla + regulador + medialuna).toFixed(2),
        id: 5,
        categoria: "gatos",
        stock: 20
    }
]

let inicio
let lista = productos.map(producto => `${producto.nombre} ID-${producto.id} \n`)

function comprar(id) {
    let productoBuscado = productos.find(producto => producto.id === id)
    let precioProducto = productoBuscado.precio
    let agregarCarrito = confirm(`El precio del producto es $${precioProducto} \n Deseas agregarlo al carrito?`)
    if (agregarCarrito === true) {
        let cantidadProductos = +(prompt(`Que cantidad deseas comprar?`))
        if (cantidadProductos <= productoBuscado.stock) {
            for (let i = 0; i < cantidadProductos; i++) {
                (carrito.push(productoBuscado))
                --productoBuscado.stock
            }
        } else {
            alert(`No tenemos stock \n Nuestro stock de este producto es ${productoBuscado.stock}`)
        }
    }
}



do {
    inicio = +(prompt(`Bienvenidos a Kilu Pet Shop \n \n
1- Ver productos \n
2- Comprar \n
3- Ver carrito \n
4- Salir`))
    if (inicio === 1) {
        alert(lista.join(""))
    } else if (inicio === 2) {
        let eleccion = prompt(`Qué producto deseas comprar \n${lista.join("")}`)
        let idEleccion = parseInt(eleccion)
        comprar(idEleccion)
    } else if (inicio === 3) {
        let resumenCompra = carrito.map(producto => `${producto.nombre} $${producto.precio}`).join("\n")
        alert(resumenCompra)
    }
} while (inicio !== 4) {
    if (carrito.length < 10) {
        let totalCompra = carrito.reduce((acumulador, producto) => acumulador + parseFloat(producto.precio), 0).toFixed(2)
        alert(`Gracias por su compra. El total de su compra es $${totalCompra}`)
    } else {
        let totalSinDescuento = carrito.reduce((acumulador, producto) => acumulador + parseFloat(producto.precio), 0)
        let totalConDescuento = (totalSinDescuento * 0.9).toFixed(2)
        alert(`Gracias por su compra. El total de su compra es $${totalConDescuento} y ha obtenido un descuento del 10% por la compra de más de 10 artículos`)
    }
}
*/
