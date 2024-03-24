let totalCarrito = 0

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

let mortalKombat = new Producto("Mortal Kombat", 1900)
let streetFighter = new Producto("Street Fighter", 1750)
let tekken = new Producto("Tekken", 1600)
let kof = new Producto("KOF", 1500)
let pokemon = new Producto("Pokemon", 1380)

const arrayJuegos = [mortalKombat,streetFighter,tekken,kof,pokemon]

function comprar(){
    let opciones = parseInt(prompt(`Oprima 1 si desea llevar ${arrayJuegos[0].nombre} por $${arrayJuegos[0].precio}\nOprima 2 si desea llevar ${arrayJuegos[1].nombre} por $${arrayJuegos[1].precio}\nOprima 3 si desea llevar ${arrayJuegos[2].nombre} por $${arrayJuegos[2].precio}\nOprima 4 si desea llevar ${arrayJuegos[3].nombre} por $${arrayJuegos[3].precio}\nOprima 5 si desea llevar ${arrayJuegos[4].nombre} por $${arrayJuegos[4].precio}\nOprima 6 si desea filtrar por precio más bajo`))
    
    while (opciones < 1 || opciones > 6){
        opciones = parseInt(prompt(`Oprima 1 si desea llevar ${arrayJuegos[0].nombre} por $${arrayJuegos[0].precio}\nOprima 2 si desea llevar ${arrayJuegos[1].nombre} por $${arrayJuegos[1].precio}\nOprima 3 si desea llevar ${arrayJuegos[2].nombre} por $${arrayJuegos[2].precio}\nOprima 4 si desea llevar ${arrayJuegos[3].nombre} por $${arrayJuegos[3].precio}\nOprima 5 si desea llevar ${arrayJuegos[4].nombre} por $${arrayJuegos[4].precio}\nOprima 6 si desea filtrar por precio más bajo`))
    }
    let productoElegido;
    if (opciones == 1){
        productoElegido = arrayJuegos[0]
        totalCarrito += arrayJuegos[0].precio 
    }
    else if (opciones == 2){
        productoElegido = arrayJuegos[1]
        totalCarrito += arrayJuegos[1].precio
    }
    else if (opciones == 3){
        productoElegido = arrayJuegos[2]
        totalCarrito += arrayJuegos[2].precio
    }
    else if (opciones == 4){
        productoElegido = arrayJuegos[3]
        totalCarrito += arrayJuegos[3].precio
    }
    else if (opciones == 5){s
        productoElegido = arrayJuegos[4]
        totalCarrito += arrayJuegos[4].precio
    }
    else if (opciones == 6){
        arrayJuegos.sort((a,b) => a.precio - b.precio)
        opciones = parseInt(prompt(`Oprima 1 si desea llevar ${arrayJuegos[0].nombre} por $${arrayJuegos[0].precio}\nOprima 2 si desea llevar ${arrayJuegos[1].nombre} por $${arrayJuegos[1].precio}\nOprima 3 si desea llevar ${arrayJuegos[2].nombre} por $${arrayJuegos[2].precio}\nOprima 4 si desea llevar ${arrayJuegos[3].nombre} por $${arrayJuegos[3].precio}\nOprima 5 si desea llevar ${arrayJuegos[4].nombre} por $${arrayJuegos[4].precio}`))
        while (opciones < 1 || opciones > 6){
            opciones = parseInt(prompt(`Oprima 1 si desea llevar ${arrayJuegos[0].nombre} por $${arrayJuegos[0].precio}\nOprima 2 si desea llevar ${arrayJuegos[1].nombre} por $${arrayJuegos[1].precio}\nOprima 3 si desea llevar ${arrayJuegos[2].nombre} por $${arrayJuegos[2].precio}\nOprima 4 si desea llevar un ${arrayJuegos[3].nombre} por $${arrayJuegos[3].precio}\nOprima 5 si desea llevar un ${arrayJuegos[4].nombre} por $${arrayJuegos[4].precio}`))
        }
        if (opciones == 1){ 
            productoElegido = arrayJuegos[0]
            totalCarrito += arrayJuegos[0].precio 
        }
        else if (opciones == 2){
            productoElegido = arrayJuegos[1]
            totalCarrito += arrayJuegos[1].precio
        }
        else if (opciones == 3){
            productoElegido = arrayJuegos[2]
            totalCarrito += arrayJuegos[2].precio
        }
        else if (opciones == 4){
            productoElegido = arrayJuegos[3]
            totalCarrito += arrayJuegos[3].precio
        }
        else if (opciones == 5){
            productoElegido = arrayJuegos[4]
            totalCarrito += arrayJuegos[4].precio
    }
    }
   let confirmacion = confirm(`Usted eligió ${productoElegido.nombre} y sale $${productoElegido.precio}, quieres agregarlo al carrito?`)
    if (confirmacion == true){
        let confirmacion2 = confirm("El producto se ha agregado al carrito, quieres comprar algo más?")
        if (confirmacion2 == true){
            comprar()
        } else{
            let confirmacion3 = confirm(`El total es de ${totalCarrito}, quieres pagar?`)
            if (confirmacion3 == true){
                alert("Gracias por su compra!!")
            } else{
                alert("Ok, te esperamos pronto!!")
            }
        }
    } else{
        let confirmacion4 = confirm("Va a seguir comprando?")
        if (confirmacion4 == true){
            comprar()
        } else{
            alert("Ok, te esperamos pronto!!")
        }
    }
}

comprar()