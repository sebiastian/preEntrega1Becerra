/* // Hacemos un login
let user = "kilu"
let password = "kilu123"
let userIngresado = prompt("Ingrese su usuario")
if (user === userIngresado) {
    let passIngresada = prompt("Ingrese su contraseña")

    if (user === userIngresado && password === passIngresada) {
        console.log(`Bienvenida ${userIngresado}`)

        //declaro productos y costos
        let correa = +(217.08)
        let medialuna = +(93.92)
        let hebilla = +(145.43)
        let regulador = +(76.06)
        let mosqueton = +(432)

        let costoCollar = (2 * medialuna + hebilla + regulador + correa * 0.7)
        let costoCorrea = (correa * 1.38 + mosqueton)
        let costoPretal = (correa * 1.84 + regulador + hebilla + medialuna)
        
        let producto = prompt(`Que producto deseas comprar \n
                     1- Collar\n
                     2- Correa\n
                     3- Pretal`)

        let precioProductoElegido = +("")
        let precioUnidad = + ("")

        if ((producto == "1") || (producto == 2) || (producto == "3" )) {
            switch (producto) {
                case "1":
                    precioProductoElegido = costoCollar
                    precioUnidad = (+(costoCollar * 2.8)).toFixed(2)
                    console.log(`El precio por unidad del collar es $${precioUnidad}`)
                    break
                case "2":
                    precioProductoElegido = costoCorrea
                    precioUnidad = (+(costoCorrea * 2.8)).toFixed(2)
                    console.log(`El precio por unidad de la correa es $${precioUnidad}`)
                    break
                case "3":
                    precioProductoElegido = costoPretal
                    precioUnidad = (+(costoPretal * 2.8)).toFixed(2)
                    console.log(`El precio por unidad del pretal es $${precioUnidad}`)
                    break
                default:
                    console.log(`Ingrese una opcion correcta`)
                    break
            }

            let cantidad = +(prompt(`Que cantidad deseas?`))

            // con esta funcion veo si aplico precio minorista o mayorista, segun las cantidades
            function costoventa(x) {
                if (cantidad < 10) {
                    costofinal = x * cantidad * 2.8
                } else {
                    costofinal = x * cantidad * 2
                }
                return costofinal
            }
            let costoventas = (costoventa(precioProductoElegido)).toFixed(2)

            console.log(`El costo total de ${cantidad} articulo/s es $${costoventas}`)

        } else {
            console.log(`ingrese una opcion correcta`)
        }
    } else {
        console.log(`La contraseña ${passIngresada} es incorrecta`)
    }
} else {
    console.log("Usuario no registrado")
} */

let cinta = 217.08
let medialuna = 93.92
let hebilla = 145.43
let regulador = 76.06
let mosqueton = 432

const productos = [
    {
        nombre: "Correa",
        precio: (cinta * 1.38 + mosqueton).toFixed(2),
        id: 1
    },
    {
        nombre: "Collar",
        precio: (2 * medialuna + hebilla + regulador + cinta * 0.7).toFixed(2),
        id: 2
    },
    {
        nombre: "Pretal",
        precio: (cinta * 1.84 + regulador + hebilla + medialuna).toFixed(2),
        id: 3
    }
]

let lista = productos.map ( producto => `${producto.nombre} ID-${producto.id} \n`)
alert(lista.join(""))

let eleccion = prompt(`Que producto deseas comprar \n
                     1- Correa\n
                     2- Collar\n
                     3- Pretal`)

let precioProductoEncontrado = null;
let nombreProductoBuscado

productos.forEach(producto => {
    if (producto.id == eleccion) {
        precioProductoEncontrado = producto.precio;
        nombreProductoBuscado = producto.nombre
    }
});

if (precioProductoEncontrado !== null) {
    alert(`El precio de ${nombreProductoBuscado} es: ${precioProductoEncontrado}`);
} else {
    console.log(`No se encontró el producto`);
}

let consulta = confirm(`Quieres agregar al carrito?`)

if (consulta === true){
let carrito = productos.filter( producto => producto.nombre === nombreProductoBuscado)
    console.log(carrito)
} else ( alert(`Muchas gracias por su consulta`))