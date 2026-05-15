estudiantes = [
    {"nombre": "Ana", "promedio": 4.5},
    {"nombre": "Luis", "promedio": 3.8},
    {"nombre": "Ana", "promedio": 4.5}, # Duplicado
    {"nombre": "Sofia", "promedio": 4.9}
]

# Eliminar duplicados (basado en nombre)
estudiantes = list({est['nombre']: est for est in estudiantes}.values())

# Ordenamiento por Selección (Selection Sort)
def ordenar_seleccion(lista):
    n = len(lista)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if lista[j]['promedio'] > lista[min_idx]['promedio']: # Descendente
                min_idx = j
        lista[i], lista[min_idx] = lista[min_idx], lista[i]
    return lista

# Búsqueda Binaria (por promedio)
def busqueda_binaria(lista, objetivo):
    bajo, alto = 0, len(lista) - 1
    while bajo <= alto:
        medio = (bajo + alto) // 2
        if lista[medio]['promedio'] == objetivo: return lista[medio]
        elif lista[medio]['promedio'] < objetivo: alto = medio - 1
        else: bajo = medio + 1
    return None