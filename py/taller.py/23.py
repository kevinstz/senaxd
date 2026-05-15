ladoA=int(input("ingrese el valor del lado A"))
ladoB=int(input("ingrese el valor del lado B"))
ladoC=int(input("ingrese el valor del lado C"))
if ladoA==ladoB and ladoB !=ladoC or ladoC==ladoA and ladoA != ladoB or ladoB==ladoC and ladoC != ladoB:
    print("es un triangulo isoseles")
if ladoA==ladoB==ladoC:
    print("es un triangulo equilatero")
else:
    print("es un triangulo escaleno")