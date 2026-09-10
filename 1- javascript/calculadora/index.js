//const readline = require('readline')
import {createInterface} from 'readline'
import {soma, subtracao, multiplicacao, divisao} from './operacoesMatematicas.js'

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Digite um numero:\n>', (numero1) => {

    leitor.question('Digite a operacao:\n+ : soma\n- : subtracao\n* : multiplicacao\n/ : divisao\n>', (operacao) => {

        leitor.question('Digite o segundo numero:\n>', (numero2) => {
            
            const num1 = Number(numero1) // para nao concatenar e nbao se tornar uma string
            const num2 = Number(numero2)

            let resultado = null

            if ( operacao == '+') {
                resultado = soma(num1, num2)
            } else if (operacao == '-') {
                resultado = subtracao(num1, num2)
            } else if (operacao == '*') {
                resultado = multiplicacao(num1, num2)
            } else if (operacao == '/') {
                resultado = divisao(num1, num2)
            } else {
                console.log('Operacao invalida!')
            }

            if (resultado != null) {
                console.log('O resultado da operacao é:', resultado)
            }

            leitor.close()
        })
        
    })

})