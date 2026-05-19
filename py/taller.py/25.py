print("--- MENÚ ---")
print("1. Saludar")
print("2. Mostrar fecha (simulada)")
print("3. Salir")

opcion = input("Seleccione una opción (1-3): ")

if opcion == "1":
    print("¡Hola! Esperamos que tengas un excelente día.")
elif opcion == "2":
    print("Fecha simulada: 18 de Mayo de 2026")
elif opcion == "3":
    print("Saliendo del programa... ¡Adiós!")
else:
    print("Opción no válida.")