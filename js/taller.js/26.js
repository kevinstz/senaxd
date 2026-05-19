let tipoCliente = prompt("Tipo de cliente (1=VIP, 2=Normal):");
let subtotal = parseFloat(prompt("Monto de la compra:"));
let descuentoCliente = 0;

if (tipoCliente === "1") {
    descuentoCliente = subtotal * 0.20;
    console.log("Cliente VIP - 20% aplicado.");
} else if (tipoCliente === "2") {
    descuentoCliente = subtotal * 0.05;
    console.log("Cliente Normal - 5% aplicado.");
} else {
    console.log("Tipo de cliente no válido. Sin descuento.");
}

console.log("Total a pagar: " + (subtotal - descuentoCliente));