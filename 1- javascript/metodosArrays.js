const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0
})

const numerosimpares = numeros.filter((numero) => {
    return numero % 2 != 0
})

console.log('Todos os numeros:', numeros)
console.log('Todos os numeros pares:', numerosPares)
console.log('Todos os numeros impares:', numerosimpares)

const numerosDobrados= numeros.map(numero => {
    return numero * 2
})

console.log('Lista mapeada:', numerosDobrados)