

let presupuesto = 0;
let gastos = [];
let idGasto = 0;




function actualizarPresupuesto(x) {

    if (x > 0) {
        presupuesto = x;
    }
    else {
        x=-1
    }
    return x;
}



function mostrarPresupuesto() {
    
    let x = presupuesto;

    return "Tu presupuesto actual es de " + x + " €";
}

/* let gasto1 = new CrearGasto("Gasto1");
console.log(gasto1);
let gasto2 = new CrearGasto("Gasto 2", 23.55, 0,  "casa", "supermercado", "comida");
console.log(gasto2); */



function CrearGasto(descripcion, valor, fecha , ...etiquetas) {

    this.descripcion = descripcion;
    
    if (valor >= 0) {

        this.valor = valor;

    } else {

        this.valor = 0;

    }

    if (fecha) {
        
        fecha = Date.parse(fecha);
        this.fecha = fecha;

    } else {
        
        fecha = Date.now();
        this.fecha = fecha;

    }

    if (etiquetas.length === 0) {
        
        this.etiquetas = [];

    } else {
        
        this.etiquetas = etiquetas;
    }  
    
    this.anyadirEtiquetas = function (...etiquetas) {
        

    }
        
    this.mostrarGasto = function () {

        return ("Gasto correspondiente a " + this.descripcion + " con valor " + this.valor + " €");

    }

    this.actualizarDescripcion = function (descripcion) {

        this.descripcion = descripcion;

    }

    this.actualizarValor = function (valor) {

        if (valor >= 0) {

            this.valor = valor;

        } else {

            this.valor;
        }        
    }   

}



function listarGastos() {

    return gastos;    
}

function anyadirGasto() {
    
}

function borrarGasto() {
    
}

function calcularTotalGastos() {
    
}

function calcularBalance() {
    
}



// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance,
}
