const readline = require('readline')
const ls = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

function calcularIMC(peso, altura) {

    const imc = peso / (altura*altura)

    return imc
}

ls.question('Digite o peso: ', (peso) => {

    ls.question('Digite a altura: ', (altura) => {
        const pesoNum = parseFloat(peso)
        const alturaNum = parseFloat(altura)

        const imc = calcularIMC(pesoNum, alturaNum)        
        console.log('seu IMC é: ', imc.toFixed(2))

        ls.close()
    })
})