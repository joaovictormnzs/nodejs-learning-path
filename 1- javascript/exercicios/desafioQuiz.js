const readline = require('readline')
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let acertos = 0;

console.log('Bem-vindo ao quiz!')
console.log('Responda somente com as alternativas a, b, ou c\n')

leitor.question('1) Qual palavra usamos para criar uma função?\n(a) define\n(b) funcion\n(c) create\n>', (resposta1) => {
    if (resposta1 == 'b') {
        acertos++
    }

    leitor.question('2) Qual dessas é uma estrutura de repetição?\na) loopar\nb) repeat\nc) for\n>', (resposta2) => {
        if (resposta2 == 'c') {
            acertos++
        }

        leitor.question('3) Qual valor é considerado falsy em Javascript?\na) 1\nb) 0\nc) "texto"\n>', (resposta3) => {
            if (resposta3 == 'b') {
                acertos++
            }


            if (acertos == 3) {
                console.log('Parabéns! Você acertou todas as questões!\n')
            } else if (acertos == 2) {
                console.log('Muito bom! continue assim!\n')
            } else {
                console.log("Continue praticando\n")
            }

            console.log("Fim do Quiz.")
            
            leitor.close()
        })
    })
})

