// HOF -> Higher-Order Function === funcao que recebe outra funcao como parametro.

function calcular(numero1, numero2, operacao) {

    return operacao(numero1, numero2)
}

function soma(num1, num2) {
    return num1 + num2
}

function subtracao(num1, num2) {
    return num1 - num2
}

function multiplicacao(num1, num2) {
    return num1 * num2
}

const resultadoSoma = calcular(10, 20, soma) //soma é um callback
console.log(resultadoSoma)

const resultadoSubtracao = calcular(100, 50, subtracao) // subtracao é um callback
console.log(resultadoSubtracao)

const resultadoMultiplicao = calcular(100, 100, multiplicacao) //multiplicacao é um callback
console.log(resultadoMultiplicao)