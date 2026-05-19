const USER_DB = "juanito";
const PASS_DB = "secreto123";

let userInput = prompt("Usuario:");
let passInput = prompt("Contraseña:");

if (userInput === USER_DB && passInput === PASS_DB) {
    console.log("Acceso concedido.");
} else {
    console.log("Usuario o contraseña incorrectos.");
}