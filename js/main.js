let user = "kilu"
let password = "kilu123"
let userIngresado = prompt("Ingrese su usuario")
if (user === userIngresado) {
    let passIngresada = prompt("Ingrese su contraseña")

    if (user === userIngresado && password === passIngresada) {
        console.log(`Bienvenida ${userIngresado}`)
    } else {
        console.log(`La contraseña ${passIngresada} es incorrecta`)
    }
} else {
    console.log("Usuario no registrado")
}
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

switch (producto) {
    case "1":
        precioProductoElegido = costoCollar
        precioUnidad = +(costoCollar * 2.8)
        console.log(`El precio por unidad es ${precioUnidad}`)
        break
    case "2":
        precioProductoElegido = costoCorrea
        precioUnidad = +(costoCorrea * 2.8)
        console.log(precioUnidad)
        break
    case "3":
        precioProductoElegido = costoPretal
        precioUnidad = +(costoPretal * 2.8)
        console.log(precioUnidad)
        break
    default:
        console.log(`ingrese una opcion correcta`)
        break
}

let cantidad = +(prompt(`Que cantidad deseas?`))


function costoventa(x) {
    if (cantidad < 10) {
        costofinal = x * cantidad * 2.8
    } else {
        costofinal = x * cantidad * 2
    }
    return costofinal
}
let costoventas = costoventa(precioProductoElegido)

console.log(`El costo total es ${costoventas}`)