let estudiantes = [
    { nombre: "Pedro", notas: [4, 5, 3] },
    { nombre: "Maria", notas: [5, 5, 4] },
    { nombre: "Juan", notas: [3, 2, 4] }
];

// 1. Calcular promedio y limpiar
const procesarEstudiantes = (lista) => {
    return lista.map(est => ({
        nombre: est.nombre,
        promedio: parseFloat((est.notas.reduce((a, b) => a + b) / est.notas.length).toFixed(2))
    }));
};

// 2. Ordenamiento Burbuja (Bubble Sort) por promedio
function ordenarBurbuja(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j].promedio < arr[j + 1].promedio) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    return arr;
}

// 3. Búsqueda Lineal por nombre
const buscarPorNombre = (lista, nombre) => {
    return lista.find(est => est.nombre.toLowerCase() === nombre.toLowerCase()) || "No encontrado";
};

// --- EJECUCIÓN ---
let datos = procesarEstudiantes(estudiantes);
let ordenados = ordenarBurbuja(datos);

console.log("Ranking:", ordenados);
console.log("Mejor Estudiante:", ordenados[0]);
console.log("Búsqueda 'Maria':", buscarPorNombre(ordenados, "Maria"));