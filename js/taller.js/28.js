let notaCualitativa = parseFloat(prompt("Ingrese la nota (0-5):"));

if (notaCualitativa >= 4.5 && notaCualitativa <= 5.0) {
    console.log("Excelente");
} else if (notaCualitativa >= 4.0 && notaCualitativa < 4.5) {
    console.log("Bueno");
} else if (notaCualitativa >= 3.0 && notaCualitativa < 4.0) {
    console.log("Aprobado");
} else if (notaCualitativa >= 0.0 && notaCualitativa < 3.0) {
    console.log("Reprobado");
} else {
    console.log("Nota fuera de rango válido.");
}