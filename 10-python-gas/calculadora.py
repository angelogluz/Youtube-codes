# Calculadora

dist = float(input("Digite a distância a ser percorrida")) 
consumo = float(input("Digite o consumo do veículo"))
valor = float(input("Digite o valor do combustível"))

print("Você digitou:\n   Distância percorrida=",dist,"km","\n   Consumo do veículo=",consumo, "km/l","\n Valor do Combustível= R$",valor,)
litros = float(dist/consumo)
print("A quantidade de litros necessários para o percurso é:" ,litros,"l")
print("O valor total gasto com combustível é de R$", litros*valor)
