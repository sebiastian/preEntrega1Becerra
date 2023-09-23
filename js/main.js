fetch('./data.json')
    .then(respuesta => respuesta.json())
    .then(productos => principal(productos))
    .catch(error => console.log(error))

function principal(productos) {
    let carrito = []
    let contenedor = document.getElementById("containerProductos")
    const mostrarFinalizarCompra = document.getElementById("menuFinalizarCompra")
    let h3total = document.getElementById("h3.total")

    const carritoGuardado = localStorage.getItem("carrito")
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado)
    } else {
        carrito = []
    }
    let total = carrito.reduce((accumulator, producto) => accumulator + producto.subtotal, 0);
    h3total.innerText = total 

    function mostrarProductos(productos) {
        contenedor.innerHTML = ''
        contenedor.className = "productos"
        productos.forEach(producto => {
            let tarjetaProducto = document.createElement("div")
            tarjetaProducto.innerHTML = `
                    <img src="${producto.imagen}">
                    <div class="caracteristicasProducto">
                        <h3>${producto.nombre}</h3>
                        <h3>${producto.precio}</h3>
                    </div>
                    <button class="botonAgregarCarrito" id="${producto.id}">Agregar al Carrito</button>`
            contenedor.appendChild(tarjetaProducto)

            const botonAgregarCarrito = tarjetaProducto.querySelector(".botonAgregarCarrito")
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
                    <img src="${producto.imagen}">
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
               
            
            h3total.innerText = +(total)
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
            productoEnCarrito.cantidad++
            productoEnCarrito.subtotal = productoEnCarrito.precio * productoEnCarrito.cantidad
        } else {
            producto.cantidad = 1
            producto.subtotal = producto.precio
            carrito.push(producto)
        }
        producto.subtotal = 1
        producto.subtotal = +(producto.precio) * producto.cantidad
        total = carrito.reduce((accumulator, carrito) => accumulator + carrito.subtotal, 0)
        h3total.innerText = +(total)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        mostrarNotificacion()
    }

    function mostrarNotificacion() {
        Toastify({
            text: "Agregado al carrito",
            duration: 3000,
            newWindow: true,
            close: false,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #016A70, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast()
    }

    function mostrarTotal (total) {
        Swal.fire({
            title: 'Deseas finalizar la compra?',
            text: `El total de su compra es $${total}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Muchas Gracias por su compra!'
              )
              localStorage.removeItem("carrito")
              mostrarCarrito([])
              mostrarFinalizarCompra.className = "menuOcultoCompra"
              setTimeout(() => {location.reload();}, 2000)
            }
          })


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
    const finalizarCompra = document.getElementById("finalizarCompra")
    finalizarCompra.addEventListener("click", () => mostrarTotal(total))
}

