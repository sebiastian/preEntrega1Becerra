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
        categoria: "perros"
    },
    {
        nombre: "Collar",
        precio: (2 * medialuna + hebilla + regulador + cinta * 0.7).toFixed(2),
        id: 2,
        categoria: "perros"
    },
    {
        nombre: "Pretal",
        precio: (cinta * 1.84 + regulador + hebilla + medialuna).toFixed(2),
        id: 3,
        categoria: "perros"
    },
    {
        nombre: "Pretal Anti Escape",
        precio: (cinta * 1.66 + argolla + regulador * 3 + hebilla),
        id: 4,
        categoria: "perros"
    },
    {
        nombre: "Collar de Gato",
        precio: (cinta * 0.31 + hebilla + regulador + medialuna ),
        id: 5,
        categoria: "gatos"
    }
]

let inicio
let lista = productos.map ( producto => `${producto.nombre} ID-${producto.id} \n`)

function comprar(id) {
    let productoBuscado = productos.find (producto => producto.id === id)
    let precioProducto = productoBuscado.precio
    let agregarCarrito = confirm(`El precio del producto es $${precioProducto} \n Deseas agregarlo al carrito?`)
    if (agregarCarrito === true){
        carrito = carrito.push(productoBuscado)
    }


}

do {
    inicio = +(prompt(`Bienvenidos a Kilu Pet Shop \n \n
1- Ver productos \n
2- Comprar \n
3- Ver carrito \n
4- Ver por categorias \n
5- Salir`))
 if (inicio === 1){
    alert(lista.join(""))
 } else if (inicio ===2){
   let eleccion = prompt(`Que producto deseas comprar \n ${lista}` )
    comprar(eleccion)
 }

} while ( inicio != 5)

/*let eleccion = prompt(`Que producto deseas comprar \n
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
} else ( alert(`Muchas gracias por su consulta`)) */