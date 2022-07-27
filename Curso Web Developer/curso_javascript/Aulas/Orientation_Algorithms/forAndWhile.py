def _min(array):
    maior = 0
    menor = 0

    for x in array:
        if x > maior:
            maior = x
    
    for x in array:
        if x < maior:
            menor = x
            maior = menor
    
    return menor

nomes = ['joao', 'maria']
horas = [2000, 1000]

mais_cedo = _min(horas)

for i in range(len(horas)):
    if horas[i] == mais_cedo:
        print(nomes[i])
