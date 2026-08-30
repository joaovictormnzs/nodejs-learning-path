const readline = require('readline')

const leitor = readline.Interface ({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual é o seu nome?', (nome) => {
    console.log('Olá,', nome)
    console.log('Seja bem-vindo ao sistema!')

    leitor.question('Qual é a sua idade?', (idade) => {
        
        if (idade >= 18) {
            console.log('Você pode tirar sua CNH!')
        } else {
            console.log('Você é de menor e não pode tirar sua CNH !')
        }

        leitor.close()
    })

})