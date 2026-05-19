mes = int(input("Ingrese el número del mes (1-12): "))

if mes in [12, 1, 2]:
    print("Estación: Invierno")
elif mes in [3, 4, 5]:
    print("Estación: Primavera")
elif mes in [6, 7, 8]:
    print("Estación: Verano")
elif mes in [9, 10, 11]:
    print("Estación: Otoño")
else:
    print("Mes inválido. Debe ser de 1 a 12.")