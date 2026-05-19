let mes = parseInt(prompt("Ingrese el número del mes (1-12):"));

if ([12, 1, 2].includes(mes)) {
    console.log("Estación: Invierno");
} else if ([3, 4, 5].includes(mes)) {
    console.log("Estación: Primavera");
} else if ([6, 7, 8].includes(mes)) {
    console.log("Estación: Verano");
} else if ([9, 10, 11].includes(mes)) {
    console.log("Estación: Otoño");
} else {
    console.log("Mes inválido. Debe ser de 1 a 12.");
}