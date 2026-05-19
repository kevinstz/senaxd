nota = float(input("Ingrese la nota (0-5): "))

if 4.5 <= nota <= 5.0:
    print("Excelente")
elif 4.0 <= nota < 4.5:
    print("Bueno")
elif 3.0 <= nota < 4.0:
    print("Aprobado")
elif 0.0 <= nota < 3.0:
    print("Reprobado")
else:
    print("Nota fuera de rango válido.")