// CONSTRUCCION PIZZAS
class Pizza{
    constructor(id, nombre, sabor, precio){
        this.id = id;
        this.nombre = nombre;
        this.sabor = sabor;
        this.precio = precio;
    }    
}

// instanciamos objetos 
const pizza1 = new Pizza(1,"Muzza", "Muzzarella", 1000)
const pizza2 = new Pizza(2,"Nappo", "Napolitana", 1350)
const pizza3 = new Pizza(3, "Fugga", "Fugazza", 1100)
const pizza4 = new Pizza(4, "Italiana", "Calabresa", 1900)
const pizza5 = new Pizza(5, "Veleza", "Espinaca y salsa blanca", 2800)

const misPizzas = [pizza1, pizza2, pizza3, pizza4, pizza5]

// CONSTRUCCION EMPANADAS
class Empanada{
    constructor(id, nombre, sabor, precio){
        this.id = id;
        this.nombre = nombre;
        this.sabor = sabor;
        this.precio = precio;
    }    
}

// instanciamos objetos 
const empanada1 = new Empanada(1,"CRIOLLA" ,"Carne", 1000)
const empanada2 = new Empanada(2, "POLLO EN HEBRAS","Pollo", 1350)
const empanada3 = new Empanada(3, "JAMÓN Y QUESO","Jamón y queso", 1100)
const empanada4 = new Empanada(4, "CARUSO","Humita", 1900)
const empanada5 = new Empanada(5, "FOUR CHEESE","Cuatro quesos", 2800)

const misEmpanadas = [empanada1, empanada2, empanada3, empanada4, empanada5]


// establezco las variables para calcular la cantidad de productos que va a solicitar el cliente y poder realizar los calculos de valores.
let cantidadPedidoPizza = 0;
let cantidadPedidoEmpanada = 0;

// ejecuto  la funcion para solicitar al cliente cuántas unidades quiere y poder calcularlas por el precio + iva.
// calculo costo para un pedido de pizza.
let carrito = []

function realizarPedido() {
    let nombre = prompt("Bienvenido a La Fortinental! ingresá tu nombre por favor");
    console.log("el nombre del cliente es " + nombre);

    // establezco una variable para solicitar la eleccion del cliente "pizza o empanadas".
    let hambre = prompt("Hola " + nombre + " qué tenes ganas de comer hoy, pizza o empanadas??");
    while (hambre.toUpperCase()!= "PIZZA" && hambre.toUpperCase()!= "EMPANADAS") {
        alert ("Opcción incorrecta, tenes que elegir PIZZA o EMPANADAS!!")
        hambre = prompt("Hola " + nombre + " qué tenes ganas de comer hoy, pizza o empanadas??");
    }

    if (hambre.toUpperCase() == "PIZZA"){
        let opcionUserPizza = parseInt (prompt("Por favor elegí el número de la opcion deseada: \n1- MUZZA\n2- NAPPO\n3- FUGGA\n4- ITALIANA\n5- VELEZA"));
        console.log(nombre+" eligió la opción: "+ opcionUserPizza);
        const pizzaElegida = misPizzas.find (elemento => elemento.id === opcionUserPizza);
        alert("Muy buena elección!!! la " +pizzaElegida.nombre + " es de nuestras mejores Pizzas.");
        cantidadPedidoPizza = parseInt(prompt("Cuántas pizzas querés?"));
        let totalPrecioPizza = cantidadPedidoPizza *pizzaElegida.precio;
        carrito.push(totalPrecioPizza);        
        alert("El precio total de tu pedido de pizza es de $ " + totalPrecioPizza +".");
        console.log("el pedido fue ingresado con exito el costo total es de $ " +totalPrecioPizza);

        // calculo costo para un pedido de empanadas
    }else if (hambre.toUpperCase()=="EMPANADAS"){
        let opcionUserEmpanada = parseInt(prompt("Por favor elegí el número de la opcion deseada: \n1- CRIOLLA \n2- POLLO EN HEBRAS \n3- JAMÓN Y QUESO \n4- CARUSO \n5- FOUR CHEESE"));
        console.log(nombre +" eligió la opcion: "+ opcionUserEmpanada);
        const empanadaElegida = misEmpanadas.find (elemento => elemento.id === opcionUserEmpanada);
        alert ("Muy bien!! la empanada "+ empanadaElegida.nombre + " es de las más ricas de nuestro local!");
        cantidadPedidoEmpanada = parseInt(prompt("Cuantas empanada querés?"));
        let totalPrecioEmpanada = cantidadPedidoEmpanada * empanadaElegida.precio;
        carrito.push(totalPrecioEmpanada) 
        alert("El precio total de tu pedido de empanadas es de $ " + totalPrecioEmpanada +".");
        console.log("el pedido fue ingresado con exito el costo total es de $ " +totalPrecioEmpanada);
    }else{
        alert ("La opción ingresada es incorrecta");
    }
}
RealizarPedido()

let domicilio = prompt ("Ingresa tu domicilio por Favor");
console.log(domicilio);
alert ( "Tu pedido fue realizado con éxito, y lo enviaremos a " +domicilio+ " esperemos lo disfrutes!");
























































































