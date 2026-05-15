# 1. FUNCIONES Y LÓGICA
def calcular_factorial(n):
    if n < 0: return "No definido"
    resultado = 1
    for i in range(2, n + 1):
        resultado *= i
    return resultado

def es_primo(n):
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0: return False
    return True

# 2. ESTRUCTURAS DE DATOS Y ORDENAMIENTO (Puntos 2, 3 y 4)
def eliminar_duplicados(estudiantes):
    vistos = set()
    unicos = []
    for est in estudiantes:
        if est['nombre'] not in vistos:
            unicos.append(est)
            vistos.add(est['nombre'])
    return unicos

def ordenar_burbuja(lista):
    n = len(lista)
    for i in range(n):
        for j in range(0, n - i - 1):
            if lista[j]['promedio'] < lista[j+1]['promedio']:
                lista[j], lista[j+1] = lista[j+1], lista[j]
    return lista

def buscar_lineal(lista, nombre):
    for est in lista:
        if est['nombre'].lower() == nombre.lower():
            return est
    return None

# 5. PROBLEMA INTEGRADOR
def sistema_estudiantes(lista_cruda):
    # Calcular promedios
    procesados = []
    for est in lista_cruda:
        promedio = sum(est['notas']) / len(est['notas'])
        procesados.append({"nombre": est['nombre'], "promedio": round(promedio, 2)})
    
    # Limpiar y Ordenar
    limpios = eliminar_duplicados(procesados)
    ordenados = ordenar_burbuja(limpios)
    
    print(f"--- Sistema Escolar ---")
    print(f"Mejor estudiante: {ordenados[0]['nombre']} con {ordenados[0]['promedio']}")
    return ordenados

# Ejemplo de uso
datos_estudiantes = [
    {"nombre": "Ana", "notas": [5, 4, 5]},
    {"nombre": "Luis", "notas": [3, 2, 4]},
    {"nombre": "Ana", "notas": [5, 4, 5]}, # Duplicado
    {"nombre": "Beatriz", "notas": [4, 5, 4]}
]

ranking = sistema_estudiantes(datos_estudiantes)