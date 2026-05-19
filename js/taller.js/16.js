let compra = parseFloat(prompt("Ingrese el valor de la compra:"));
if (compra >= 100000) {
    let descuento = compra * 0.10;
    let total = compra - descuento;
    console.log(`Descuento aplicado (10%): ${descuento}. Total a pagar: ${total}`);
} else {
    console.log(`Sin descuento. Total a pagar: ${compra}`);
}