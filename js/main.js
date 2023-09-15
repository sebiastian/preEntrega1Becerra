let carrito = []
let contenedor = document.getElementById("containerProductos")
const mostrarFinalizarCompra = document.getElementById("menuFinalizarCompra")
let h3total = document.getElementById("h3.total")



function principal() {

    const carritoGuardado = localStorage.getItem("carrito")
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado)
    } else {
        carrito = []
    }

    let cinta = 217.08
    let medialuna = 93.92
    let hebilla = 145.43
    let regulador = 76.06
    let mosqueton = 432
    let argolla = 162

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
    ];

    function mostrarProductos(productos) {
        contenedor.innerHTML = ''
        contenedor.className = "productos"
        productos.forEach(producto => {
            let tarjetaProducto = document.createElement("div")
            tarjetaProducto.innerHTML = `
                    <img src="/Image/pretal01.jpg">
                    <div class="caracteristicasProducto">
                        <h3>${producto.nombre}</h3>
                        <h3>${producto.precio}</h3>
                    </div>
                    <button class="botonAgregarCarrito" id="${producto.id}">Agregar al Carrito</button>`
            contenedor.appendChild(tarjetaProducto)

            const botonAgregarCarrito = tarjetaProducto.querySelector(".botonAgregarCarrito");
            botonAgregarCarrito.addEventListener("click", comprar)
        })
        mostrarFinalizarCompra.className = "menuOcultoCompra"
    }

    function mostrarCarrito(productos) {
        contenedor.innerHTML = ''
        contenedor.className = "productosCarrito"
        productos.forEach(producto => {
            let tarjetaProducto = document.createElement("div")
            tarjetaProducto.className = "carrito"
            tarjetaProducto.innerHTML = `
                    <img src="/Image/pretal01.jpg">
                    <div class="caracteristicasProducto">
                        <h3>${producto.nombre}</h3>
                        <h3>${producto.precio}</h3>
                    </div>
                    <div>
                    <h3>Unidades</h3>
                    <h3>${producto.cantidad}</h3>
                    </div>
                    <div>
                    <h3>Subtotal</h3>
                    <h3>$${producto.cantidad * producto.precio}</h3>
                    </div>
                    `

            contenedor.appendChild(tarjetaProducto)
            if (productos) {

            mostrarFinalizarCompra.className = "menuVisibleCompra"
            }
        })
    }

    function mostrarCategoria(mostrarCategoria) {
        const categoriaNueva = productos.filter(producto => producto.categoria === mostrarCategoria)
        mostrarProductos(categoriaNueva)
        mostrarFinalizarCompra.className = "menuOcultoCompra"
    }

    function comprar() {
        const boton = event.target
        const id = boton.getAttribute("id")
        const producto = productos.find(item => item.id === +(id))
        const productoEnCarrito = carrito.find(item => item.id === +(id))
        if (productoEnCarrito) {
            producto.cantidad++
        } else {
            producto.cantidad = 1
            carrito.push(producto)
        }
        producto.subtotal = 1
        producto.subtotal = +(producto.precio) * producto.cantidad
        console.log(carrito)
        let total = carrito.reduce((accumulator, carrito) => accumulator + carrito.subtotal, 0)
        console.log(total)
        h3total.innerText = +(total)
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    mostrarProductos(productos)

    const productosTodos = document.getElementById("productosTodos")
    productosTodos.addEventListener("click", () => mostrarProductos(productos))
    const productosPerros = document.getElementById("productosPerros")
    productosPerros.addEventListener("click", () => mostrarCategoria("perros"))
    const productosGatos = document.getElementById("productosGatos")
    productosGatos.addEventListener("click", () => mostrarCategoria("gatos"))
    const productosCarrito = document.getElementById("productosCarrito")
    productosCarrito.addEventListener("click", () => mostrarCarrito(carrito))
}



principal()
