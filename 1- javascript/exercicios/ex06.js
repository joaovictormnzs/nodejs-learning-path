const readline = require('readline')
const ls = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

function apresentarPessoa(nome, idade) {
    console.log('Ola, meu nome é ' + nome + ' e tenho ' + idade + ' anos.')
}

ls.question('Qual o seu nome?', (nome) => {

    ls. question('Qual sua idade?', (idade) => {
        apresentarPessoa(nome, idade)

        ls.close()
    })
    
})