base=int(input("cuanto ganas al dia ? por la jornada normal de 8 horas"))
extra=int(input("cuantas horas extras has realizado hoy?"))
horabase=base/8
total=extra*horabase*1.5 + base
print("su ganancia del dia hoy en total a sido=",total)