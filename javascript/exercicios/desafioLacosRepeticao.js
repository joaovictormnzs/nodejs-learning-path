let totalNumerosPares = 0
let totalNumerosImpares = 0

for (let contador = 0; contador <= 100; contador++) {
    if (contador % 2 == 0){
        totalNumerosPares++
    } else {
        totalNumerosImpares++
    }
}

console.log('Total de numeros pares:', totalNumerosPares)
console.log('Total de numeros impares:', totalNumerosImpares)