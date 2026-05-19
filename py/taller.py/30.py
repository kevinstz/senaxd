# Credenciales del sistema
USER_SYS = "admin"
PASS_SYS = "1234"
ROL_SYS = "admin"

user_input = input("Usuario: ")
pass_input = input("Contraseña: ")
rol_input = input("Rol: ")

# Debe cumplir las tres estrictamente
if user_input == USER_SYS and pass_input == PASS_SYS and rol_input == ROL_SYS:
    print("Acceso concedido. Bienvenido Administrador.")
else:
    print("Acceso denegado. Uno o más datos son incorrectos.")