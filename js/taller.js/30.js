const USER_SYS = "admin";
const PASS_SYS = "1234";
const ROL_SYS = "admin";

let userIn = prompt("Usuario:");
let passIn = prompt("Contraseña:");
let rolIn = prompt("Rol:");

if (userIn === USER_SYS && passIn === PASS_SYS && rolIn === ROL_SYS) {
    console.log("Acceso concedido. Bienvenido Administrador.");
} else {
    console.log("Acceso denegado. Uno o más datos son incorrectos.");
}