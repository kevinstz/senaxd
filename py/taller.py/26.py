tipo_cliente = input("Tipo de cliente (1=VIP, 2=Normal): ")
subtotal = float(input("Monto de la compra: "))

if tipo_cliente == "1":
    descuento = subtotal * 0.20
    print("Cliente VIP - 20% aplicado.")
elif tipo_cliente == "2":
    descuento = subtotal * 0.05
    print("Cliente Normal - 5% aplicado.")
else:
    descuento = 0
    print("Tipo de cliente no válido. Sin descuento.")

print(f"Total a pagar: {subtotal - descuento}")