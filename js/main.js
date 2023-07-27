let user = "kilu"
let password = "kilu123"
let userIngresado = prompt ("Ingrese su usuario")
if (user === userIngresado){   
    let passIngresada = prompt ("Ingrese su contraseña")
    
    if(user === userIngresado && password === passIngresada){
        console.log (`Bienvenida ${userIngresado}` )
    } else {
        console.log (`La contraseña ${passIngresada} es incorrecta`)
    }
} else {
    console.log ("Usuario no registrado")
}

