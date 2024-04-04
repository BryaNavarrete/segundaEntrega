let totalCarrito = 0;

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let mortalKombat = new Producto("Mortal Kombat", 1900);
let streetFighter = new Producto("Street Fighter", 1750);
let tekken = new Producto("Tekken", 1600);
let kof = new Producto("KOF", 1500);
let pokemon = new Producto("Pokemon", 1380);

const arrayJuegos = [mortalKombat, streetFighter, tekken, kof, pokemon];

function obtenerOpcion() {
    let opciones = parseInt(prompt(`Oprima 1 si desea llevar ${arrayJuegos[0].nombre} por $${arrayJuegos[0].precio}\nOprima 2 si desea llevar ${arrayJuegos[1].nombre} por $${arrayJuegos[1].precio}\nOprima 3 si desea llevar ${arrayJuegos[2].nombre} por $${arrayJuegos[2].precio}\nOprima 4 si desea llevar ${arrayJuegos[3].nombre} por $${arrayJuegos[3].precio}\nOprima 5 si desea llevar ${arrayJuegos[4].nombre} por $${arrayJuegos[4].precio}\nOprima 6 si desea filtrar por precio más bajo`));

    while (opciones < 1 || opciones > 6) {
        opciones = parseInt(prompt(`Oprima 1 si desea llevar ${arrayJuegos[0].nombre} por $${arrayJuegos[0].precio}\nOprima 2 si desea llevar ${arrayJuegos[1].nombre} por $${arrayJuegos[1].precio}\nOprima 3 si desea llevar ${arrayJuegos[2].nombre} por $${arrayJuegos[2].precio}\nOprima 4 si desea llevar ${arrayJuegos[3].nombre} por $${arrayJuegos[3].precio}\nOprima 5 si desea llevar ${arrayJuegos[4].nombre} por $${arrayJuegos[4].precio}\nOprima 6 si desea filtrar por precio más bajo`));
    }

    return opciones;
}

function obtenerProducto(opcion) {
    if (opcion < 6) {
        return arrayJuegos.find((juego, index) => index === opcion - 1);
    } else {
        let productosFiltrados = arrayJuegos.slice().sort((a, b) => a.precio - b.precio);
        let opcionesFiltradas = parseInt(prompt(`Oprima 1 si desea llevar ${productosFiltrados[0].nombre} por $${productosFiltrados[0].precio}\nOprima 2 si desea llevar ${productosFiltrados[1].nombre} por $${productosFiltrados[1].precio}\nOprima 3 si desea llevar ${productosFiltrados[2].nombre} por $${productosFiltrados[2].precio}\nOprima 4 si desea llevar ${productosFiltrados[3].nombre} por $${productosFiltrados[3].precio}\nOprima 5 si desea llevar ${productosFiltrados[4].nombre} por $${productosFiltrados[4].precio}`));
        while (opcionesFiltradas < 1 || opcionesFiltradas > 5) {
            opcionesFiltradas = parseInt(prompt(`Oprima 1 si desea llevar ${productosFiltrados[0].nombre} por $${productosFiltrados[0].precio}\nOprima 2 si desea llevar ${productosFiltrados[1].nombre} por $${productosFiltrados[1].precio}\nOprima 3 si desea llevar ${productosFiltrados[2].nombre} por $${productosFiltrados[2].precio}\nOprima 4 si desea llevar ${productosFiltrados[3].nombre} por $${productosFiltrados[3].precio}\nOprima 5 si desea llevar ${productosFiltrados[4].nombre} por $${productosFiltrados[4].precio}`));
        }
        return productosFiltrados.find((juego, index) => index === opcionesFiltradas - 1);
    }
}

function confirmarCompra(productoElegido) {
    let confirmacion = confirm(`Usted eligió ${productoElegido.nombre} y sale $${productoElegido.precio}, quieres agregarlo al carrito?`);
    return confirmacion;
}

function continuarComprando() {
    let confirmacion = confirm("Va a seguir comprando?");
    return confirmacion;
}

function realizarPago() {
    let confirmacion = confirm(`El total es de ${totalCarrito}, quieres pagar?`);
    return confirmacion;
}

function graciasPorComprar() {
    alert("Gracias por su compra!!");
}

function esperamosPronto() {
    alert("Ok, te esperamos pronto!!");
}

function comprar() {
    let opcion = obtenerOpcion();
    let productoElegido = obtenerProducto(opcion);

    totalCarrito += productoElegido.precio;

    let agregarAlCarrito = confirmarCompra(productoElegido);

    if (agregarAlCarrito) {
        let comprarMas = continuarComprando();
        if (comprarMas) {
            comprar();
        } else {
            let pagar = realizarPago();
            if (pagar) {
                graciasPorComprar();
            } else {
                esperamosPronto();
            }
        }
    } else {
        let seguirComprando = continuarComprando();
        if (seguirComprando) {
            comprar();
        } else {
            esperamosPronto();
        }
    }
}

comprar();
