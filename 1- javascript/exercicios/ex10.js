idades = [10, 18, 20, 25, 13, 30, 40, 50, 5, 4]

const idadesMaiores = idades.filter(idade =>{
    return idade >= 18
})

console.log('idades:', idades)
console.log('Idade acima de 18 anos:', idadesMaiores)