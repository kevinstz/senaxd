n1 = float(input("Número 1: "))
n2 = float(input("Número 2: "))
n3 = float(input("Número 3: "))

# Lógica con condicionales para ordenar
if n1 <= n2 and n1 <= n3:
    menor = n1
    if n2 <= n3:
        medio, mayor = n2, n3
    else:
        medio, mayor = n3, n2
elif n2 <= n1 and n2 <= n3:
    menor = n2
    if n1 <= n3:
        medio, mayor = n1, n3
    else:
        medio, mayor = n3, n1
else:
    menor = n3
    if n1 <= n2:
        medio, mayor = n1, n2
    else:
        medio, mayor = n2, n1

print(f"Números en orden ascendente: {menor}, {medio}, {mayor}")